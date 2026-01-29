import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';

interface MobileVideoProps {
  src: string;
  title: string;
  description: string;
  isActive?: boolean;
  onActivate?: () => void;
}

const MobileVideo = ({ src, title, description, isActive = false, onActivate }: MobileVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Generate mobile-optimized video URL
  const getMobileSrc = (originalSrc: string) => {
    if (!isMobile) return originalSrc;
    
    // For mobile, we could use a different video format or quality
    // For now, return the same but we could add logic for mobile versions
    return originalSrc;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoading(false);
      setHasError(false);
      if (isMobile) {
        // Auto-play muted on mobile
        video.play().catch(() => {
          // Handle autoplay restrictions
        });
      }
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, [isMobile]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {
        // Handle play restrictions
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleClick = () => {
    onActivate?.();
    if (isMobile) {
      // On mobile, toggle play/pause
      handlePlayPause();
    }
  };

  return (
    <div className={`relative group cursor-pointer transition-all duration-300 ${isActive ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''} hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20`}>
      <video
        ref={videoRef}
        src={getMobileSrc(src)}
        className={`w-full object-contain cursor-pointer ${isMobile ? 'h-48' : 'h-[28rem] sm:h-[32rem]'}`}
        loop
        playsInline
        muted={isMuted}
        preload={isMobile ? 'metadata' : 'auto'}
        onClick={handleClick}
      />
      
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
          <div className="text-muted-foreground">Loading...</div>
        </div>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-destructive/10">
          <div className="text-center p-4">
            <div className="text-destructive mb-2">Video unavailable</div>
            <div className="text-xs text-muted-foreground">{isMobile ? 'Mobile version not available' : src}</div>
          </div>
        </div>
      )}

      {/* Mobile play button overlay */}
      {isMobile && !isPlaying && !isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <button
            onClick={handlePlayPause}
            className="w-16 h-16 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
          </button>
        </div>
      )}
      
      {/* Volume controls - simplified for mobile */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-background/80 rounded-full px-3 py-2">
        <button
          onClick={handleMuteToggle}
          className="w-6 h-6 rounded-full flex items-center justify-center transition-colors hover:bg-primary/20"
        >
          {isMuted ? (
            <VolumeX className="w-3 h-3 text-foreground" />
          ) : (
            <Volume2 className="w-3 h-3 text-foreground" />
          )}
        </button>
        
        {!isMobile && (
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-16 h-1 bg-muted rounded-lg appearance-none cursor-pointer"
          />
        )}
      </div>

      {/* Title and description */}
      <div className="mt-0">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        
        {/* Mobile indicator */}
        {isMobile && (
          <div className="text-xs text-muted-foreground mb-1">📱 Mobile optimized</div>
        )}
        
        <div 
          className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line"
          dangerouslySetInnerHTML={{
            __html: description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          }}
        />
      </div>
    </div>
  );
};

export default MobileVideo;
