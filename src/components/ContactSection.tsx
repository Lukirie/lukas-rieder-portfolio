import { useState } from 'react';
import { Mail, MapPin, Phone, X } from 'lucide-react';

const ContactSection = () => {
  const [isImprintOpen, setIsImprintOpen] = useState(false);

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <h2 className="section-heading mb-3 sm:mb-4">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-muted-foreground mb-8 sm:mb-12 max-w-xl mx-auto text-sm sm:text-base">
            Whether you need an FOH engineer for an upcoming show, a mixdown in the studio, or sound design for a brand campaign - I’m ready to get to work. Tell me what you're planning, and let's figure out how to make it sound exactly the way it should.
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
          <div className="text-xs text-muted-foreground/70 mb-6">
            <p>Lukas Rieder</p>
            <p>Lavendelweg 9</p>
            <p>9130 Poggersdorf</p>
          </div>

          {/* Imprint Button */}
          <button 
            onClick={() => setIsImprintOpen(true)}
            className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors underline-offset-4 hover:underline"
          >
            Imprint
          </button>
        </div>
      </div>

      {/* Imprint Modal */}
      {isImprintOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-background border border-border rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Imprint / Legal Notice</h3>
              <button 
                onClick={() => setIsImprintOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4 text-sm text-muted-foreground">
              <p>Information according to § 5 ECG and disclosure according to § 25 Austrian Media Act (Mediengesetz):</p>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Website Operator:</h4>
                <p>Lukas Rieder</p>
                <p>Lavendelweg 9</p>
                <p>9130 Poggersdorf</p>
                <p>Austria</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Contact:</h4>
                <p>Phone: +43 676 951 312 4</p>
                <p>Email: info@lukasrieder.at</p>
                <p>Website: www.lukasrieder.at</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Business Purpose:</h4>
                <p>Audio engineering, sound design, and music production services.</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Chamber of Commerce Memberships & Terms:</h4>
                <p>Member of Carinthian Economic Chamber (WKO), Association of Film and Music Industry.</p>
                <p>The General Terms and Conditions (AGB) of Association of Film and Music Industry apply. <a href="https://www.wko.at/oe/agb/agb-tonstudios.docx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AGB</a></p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Supervisory/Trade Authority:</h4>
                <p>Bezirkshauptmannschaft Klagenfurt-Land</p>
                <p>Applicable Trade Regulations: Austrian Trade Act (Gewerbeordnung), available at www.ris.bka.gv.at</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">EU Dispute Resolution:</h4>
                <p>Consumers have the opportunity to submit complaints to the EU's online dispute resolution platform: <a href="https://commission.europa.eu/index_en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://commission.europa.eu/index_en</a>. You can also send any complaints directly to the email address provided above.</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Copyright Notice:</h4>
                <p>All rights reserved. The content and works created by the site operator on these pages are subject to copyright law. Any unauthorized use, reproduction, or distribution requires prior written consent.</p>
                <p>Insofar as the content on this site was not created by the operator (e.g., embedded videos or project collaborations), the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nonetheless become aware of a copyright infringement, please inform me accordingly. Upon notification of violations, I will remove such content immediately.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
