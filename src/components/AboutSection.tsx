import lukasPortrait from '@/assets/lukas-portrait.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-secondary">
              <img
                src={lukasPortrait}
                alt="Lukas Rieder - Sound Engineer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="section-heading">
              About <span className="text-gradient">Lukas</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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
            <div className="pt-6 grid grid-cols-2 gap-4">
              {['Studio Recording', 'Live Sound', 'Mixing & Mastering', 'Sound Design'].map(
                (skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
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
