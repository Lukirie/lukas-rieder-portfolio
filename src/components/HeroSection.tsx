import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

// Configuration for hero background video
// Replace with your actual video URL or leave empty for static background
const heroConfig = {
  videoUrl: '', // e.g., 'https://example.com/hero-video.mp4' or '/videos/hero.mp4'
  fallbackImage: '', // Optional fallback image URL
  showVideo: false, // Set to true when you have a video URL
};

const HeroSection = () => {
  const [videoError, setVideoError] = useState(false);

  const shouldShowVideo = heroConfig.showVideo && heroConfig.videoUrl && !videoError;

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background video */}
      {shouldShowVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source src={heroConfig.videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Fallback/Static background */}
      {heroConfig.fallbackImage && !shouldShowVideo && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroConfig.fallbackImage})` }}
        />
      )}

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="animate-slide-up">
          <p className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6">
            Sound Engineer & Sound Designer
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 sm:mb-8">
            Lukas Rieder
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            Crafting immersive audio experiences for studio recordings, 
            live performances, and creative productions.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#about"
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-xs tracking-widest uppercase hidden sm:block">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>

      {/* Decorative accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
