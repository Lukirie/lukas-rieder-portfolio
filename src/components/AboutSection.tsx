import lukasPortrait from '@/assets/lukas-portrait.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative order-1 md:order-1">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-secondary max-w-sm mx-auto md:max-w-none">
              <img
                src={lukasPortrait}
                alt="Lukas Rieder - Sound Engineer"
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
              About <span className="text-gradient">Lukas</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                With over a decade of experience in audio engineering and sound design, 
                I bring a meticulous ear and creative vision to every project. From the 
                controlled environment of the studio to the dynamic energy of live events, 
                I craft soundscapes that resonate.
              </p>
              <p>
                My work spans recording, mixing, and mastering for artists across genres, 
                as well as sound design for film, games, and interactive media. I believe 
                that great audio should be felt as much as heard.
              </p>
              <p>
                Based in [Your City], I collaborate with artists, producers, and creative 
                teams worldwide to bring their sonic visions to life.
              </p>
            </div>

            {/* Skills/Services */}
            <div className="pt-4 sm:pt-6 grid grid-cols-2 gap-3 sm:gap-4 max-w-sm mx-auto md:max-w-none">
              {['Studio Recording', 'Live Sound', 'Mixing & Mastering', 'Sound Design'].map(
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
