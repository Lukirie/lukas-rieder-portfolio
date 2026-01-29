import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <h2 className="section-heading mb-3 sm:mb-4">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-muted-foreground mb-8 sm:mb-12 max-w-xl mx-auto text-sm sm:text-base">
            Have a project in mind? I'd love to hear about it. Whether it's a studio session, 
            live event, or creative collaboration—let's create something memorable.
          </p>

          {/* Contact info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            <a
              href="mailto:info@lukasrieder.at"
              className="group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground">Email</span>
              <span className="font-medium text-sm sm:text-base break-all">info@lukasrieder.at</span>
            </a>

            <a
              href="tel:+43 676 951 312 4"
              className="group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground">Phone</span>
              <span className="font-medium text-sm sm:text-base">+43 676 951 312 4</span>
            </a>

            <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-lg bg-card border border-border">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground">Location</span>
              <span className="font-medium text-sm sm:text-base">Klagenfurt, Graz</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap mb-6">
            <a
              href="https://www.instagram.com/lukiriee/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://open.spotify.com/intl-de/artist/6fkO0yKCX7VW1UFtJjPbQf?si=laXyQoZ0SYGYjpNUlUlSbw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Spotify
            </a>
          </div>

          {/* Impressum */}
          <div className="text-xs text-muted-foreground/70">
            <p>Lukas Rieder</p>
            <p>Lavendelweg 9</p>
            <p>9130 Poggersdorf</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
