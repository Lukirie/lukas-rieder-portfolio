import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <h2 className="section-heading mb-4">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Whether it's a studio session, 
            live event, or creative collaboration—let's create something memorable.
          </p>

          {/* Contact info */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:hello@lukasrieder.com"
              className="group flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Email</span>
              <span className="font-medium">hello@lukasrieder.com</span>
            </a>

            <a
              href="tel:+1234567890"
              className="group flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Phone</span>
              <span className="font-medium">+1 (234) 567-890</span>
            </a>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Location</span>
              <span className="font-medium">Your City, Country</span>
            </div>
          </div>

          {/* Social links placeholder */}
          <div className="flex items-center justify-center gap-6">
            {['Instagram', 'LinkedIn', 'SoundCloud'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
