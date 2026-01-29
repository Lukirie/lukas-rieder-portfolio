import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface LocalVideoProps {
  src: string;
  title: string;
  description?: string;
  isActive?: boolean;
  onActivate?: () => void;
}

const LocalVideo = ({ src, title, description, isActive = false, onActivate }: LocalVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [useFallback, setUseFallback] = useState(false);

  // External video URLs for GitHub Pages fallback (placeholder videos)
  const getFallbackUrl = (localSrc: string) => {
    const videoMap: { [key: string]: string } = {
      '/videos/video_1.mp4': 'https://www.w3schools.com/html/mov_bbb.mp4',
      '/videos/video_2.mp4': 'https://www.w3schools.com/html/movie.mp4',
      '/videos/video_3.mp4': 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      '/videos/video_4.mp4': 'https://sample-videos.com/video123/mp4/720/for_bigger_blazes_720p_1mb.mp4'
    };
    return videoMap[localSrc] || localSrc;
  };

  const videoSrc = useFallback ? getFallbackUrl(src) : src;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set volume to 100%
    video.volume = 1.0;

    // Mute if not active, otherwise use local mute state
    video.muted = !isActive || isMuted;

    // Auto-play videos
    if (video.paused && isPlaying) {
      video.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [isPlaying, isActive, isMuted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    video.volume = 1.0;
  }, []);

  const handleVideoClick = () => {
    onActivate();
    const video = videoRef.current;
    if (!video) return;

    // If active, toggle mute state
    if (isActive) {
      setIsMuted(!isMuted);
    }

    // Toggle play/pause state
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().catch(() => {
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleVideoError = () => {
    setIsLoading(false);
    if (!useFallback) {
      // Try placeholder URL on first error
      setUseFallback(true);
      console.log('Local video unavailable, using placeholder:', src);
    } else {
      setHasError(true);
      console.error('Video unavailable:', src);
    }
  };

  return (
    <div className={`relative group cursor-pointer transition-all duration-300 ${isActive ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''} hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20`}>
      <video
        ref={videoRef}
        src={videoSrc}
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
        key={videoSrc} // Force re-render when source changes
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
