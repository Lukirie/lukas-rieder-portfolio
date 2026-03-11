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
                I’m Lukas, an audio engineer, sound designer, and live musician based in Graz & Klagenfurt. Being an active musician myself means I know exactly what a performance needs to translate - both for the artist and the audience.
              </p>
              <p>
               My day-to-day work happens in two different worlds. On the live side-mixing FOH and handling event tech - I love the fast pace and the challenge of making a room sound great in real-time.
              </p>
              <p>
               In the studio, the workflow shifts from instant problem-solving to detailed storytelling. I mix music, but another part of my work is sound design for short films and commercial campaigns. This is exactly where my Bachelor's in International Marketing and Sales comes into play. When I work on brand audio or advertising, I don't just look at the frequencies. I understand how sound drives a message, shapes a brand's identity, and actually connects with a target audience.
              </p>
              <p>
               Whether I'm standing behind a live console or sitting between studio monitors, my mindset doesn't change. I stay calm, put the work in, and keep the creative intent front and center.
              </p>
            </div>

            {/* Skills/Services */}
            <div className="pt-6 sm:pt-8 space-y-4 max-w-md mx-auto md:max-w-none">
              {['FOH Engineering', 'Music Production & Mixing', 'Sound Design for Film & Media', 'Brand Audio & Commercial Sound'].map(
                (skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 text-lg sm:text-xl font-semibold text-foreground justify-center md:justify-start bg-card/50 p-3 rounded-lg border border-border/50"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
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
