import { Play } from 'lucide-react';
import { useState } from 'react';

interface MediaEmbedProps {
  type: 'youtube' | 'spotify' | 'video';
  url: string;
  title: string;
  description?: string;
  featured?: boolean;
}

const MediaEmbed = ({ type, url, title, description, featured = false }: MediaEmbedProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract YouTube ID and generate thumbnail
  const getYoutubeId = (youtubeUrl: string) => {
    if (youtubeUrl.includes('youtu.be')) {
      return youtubeUrl.split('/').pop();
    }
    return youtubeUrl.split('v=')[1]?.split('&')[0];
  };

  const renderEmbed = () => {
    switch (type) {
      case 'youtube':
        const youtubeId = getYoutubeId(url);
        const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
        
        return (
          <div className={`embed-container ${featured ? 'embed-container-featured' : ''}`}>
            {!isPlaying ? (
              // Thumbnail with play button overlay
              <div 
                className="absolute inset-0 cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <img 
                  src={thumbnailUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        );

      case 'spotify':
        const spotifyEmbedUrl = url.includes('embed')
          ? url
          : url.replace('open.spotify.com', 'open.spotify.com/embed');
        return (
          <iframe
            src={spotifyEmbedUrl}
            title={title}
            className="w-full rounded-lg"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        );

      case 'video':
        return (
          <div className={`embed-container ${featured ? 'embed-container-featured' : ''}`}>
            <video
              src={url}
              title={title}
              controls
              playsInline
              muted
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`card-hover bg-card rounded-lg overflow-hidden border border-border ${featured ? 'md:col-span-2 lg:col-span-3' : ''}`}>
      <div className="p-1">
        {renderEmbed()}
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="font-display font-semibold text-base sm:text-lg mb-1">{title}</h3>
        {description && (
          <p className="text-muted-foreground text-xs sm:text-sm">{description}</p>
        )}
      </div>
    </div>
  );
};

export default MediaEmbed;
