interface MediaEmbedProps {
  type: 'youtube' | 'spotify' | 'video';
  url: string;
  title: string;
  description?: string;
}

const MediaEmbed = ({ type, url, title, description }: MediaEmbedProps) => {
  const renderEmbed = () => {
    switch (type) {
      case 'youtube':
        // Extract video ID from YouTube URL
        const youtubeId = url.includes('youtu.be')
          ? url.split('/').pop()
          : url.split('v=')[1]?.split('&')[0];
        return (
          <div className="embed-container">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        );

      case 'spotify':
        // Handle Spotify embed URLs
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
          <div className="embed-container">
            <video
              src={url}
              title={title}
              controls
              className="w-full h-full object-cover"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="card-hover bg-card rounded-lg overflow-hidden border border-border">
      <div className="p-1">
        {renderEmbed()}
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg mb-1">{title}</h3>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
    </div>
  );
};

export default MediaEmbed;
