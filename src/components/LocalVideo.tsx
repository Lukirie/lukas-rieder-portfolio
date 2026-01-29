import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface LocalVideoProps {
  src: string;
  title: string;
  description: string;
  isActive: boolean;
  onActivate: () => void;
}

const LocalVideo = ({ src, title, description, isActive, onActivate }: LocalVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set initial volume
    video.volume = volume;

    // Auto-play muted videos
    if (video.paused && isPlaying) {
      video.play().catch(console.error);
    }

    // Only one video can have sound
    if (!isActive && !isMuted) {
      video.muted = true;
      setIsMuted(true);
    }
  }, [isActive, isMuted, isPlaying, volume]);

  const handleVideoClick = () => {
    onActivate();
    const video = videoRef.current;
    if (!video) return;

    // Toggle play/pause state
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      // Try to play, handle autoplay restrictions
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay failed, just unmute
        const newMutedState = !isMuted;
        video.muted = newMutedState;
        setIsMuted(newMutedState);
      });
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    const video = videoRef.current;
    if (video) {
      video.volume = newVolume;
      // Unmute if volume is increased from 0
      if (newVolume > 0 && isMuted) {
        video.muted = false;
        setIsMuted(false);
      }
    }
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleVideoError = () => {
    setIsLoading(false);
    setHasError(true);
    console.error('Video failed to load:', src);
  };

  return (
    <div className={`relative group cursor-pointer transition-all duration-300 ${isActive ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''} hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20`}>
      <video
        ref={videoRef}
        src={src}
        className="w-full h-[28rem] sm:h-[32rem] object-contain cursor-pointer"
        loop
        playsInline
        muted={isMuted}
        autoPlay
        preload="metadata"
        onLoadStart={() => setIsLoading(true)}
        onCanPlay={handleVideoLoad}
        onError={handleVideoError}
        onClick={handleVideoClick}
      />
      
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
          <div className="text-muted-foreground">Loading video...</div>
        </div>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-destructive/10">
          <div className="text-center p-4">
            <div className="text-destructive mb-2">Video failed to load</div>
            <div className="text-xs text-muted-foreground">{src}</div>
          </div>
        </div>
      )}
      
      {/* Title and description */}
      <div className="mt-0">
        {/* Volume controls above title */}
        <div className="flex items-center justify-center gap-2 bg-background/80 rounded-full px-3 py-2 mb-2">
          <button
            onClick={handleVideoClick}
            className="w-8 h-8 sm:w-6 sm:h-6 rounded-full flex items-center justify-center transition-colors hover:bg-primary/20"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 sm:w-3 sm:h-3 text-foreground" />
            ) : (
              <Volume2 className="w-4 h-4 sm:w-3 sm:h-3 text-foreground" />
            )}
          </button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-20 sm:w-16 h-2 bg-muted rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        
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

export default LocalVideo;
