import { useState, useEffect } from 'react';
import lukasPortrait from '@/assets/lukas-portrait.jpg';

const AboutSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of images - add your image paths here
  const images = [
    lukasPortrait,
    '/images/Lukas_Rieder_2.jpg',  // Add your second image
    '/images/Lukas_Rieder_3.jpg',  // Add your third image
  ];

  // Rotate images with different timing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, currentImageIndex === 0 ? 7000 : 5000); // 7s for first, 5s for others

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);
  return (
    <section id="about" className="py-6 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative order-1 md:order-1">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-secondary max-w-sm mx-auto md:max-w-none">
              <img
                src={images[currentImageIndex]}
                alt={`Lukas Rieder - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full border border-primary/30 rounded-lg -z-10 max-w-sm mx-auto md:max-w-none" />
          </div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 order-2 md:order-2 text-center md:text-left">
            <h2 className="section-heading">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                I am Lukas, 24 years old, a live musician, sound technician and FOH engineer based in Klagenfurt.
                With experience in live sound, sound design and music production, I approach every project 
                with precision and a strong hands-on mindset.
              </p>
              <p>
               I work across live performances, events and studio environments, always focusing on clarity, 
               reliability and musical intent. My goal is to create sound that connects artists, audiences 
               and spaces in a natural and meaningful way.
              </p>
              <p>
               My background combines hands-on audio work, ongoing studies in Sound Design and a Bachelor
               in International Marketing and Sales Management. I collaborate with musicians and event 
               professionals to deliver effective and engaging sound experiences.
              </p>
            </div>

            {/* Skills/Services */}
            <div className="pt-4 sm:pt-6 grid grid-cols-2 gap-3 sm:gap-4 max-w-sm mx-auto md:max-w-none">
              {['FOH Engineering', 'Mixing', 'Recording', 'Production', 'Sound Design'].map(
                (skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-xs sm:text-sm text-foreground justify-center md:justify-start"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {skill}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
