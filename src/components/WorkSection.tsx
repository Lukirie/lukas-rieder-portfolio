import { useState, useRef } from 'react';
import { Play } from 'lucide-react';
import LocalVideo from '@/components/LocalVideo';
import MobileVideo from '@/components/MobileVideo';
import MediaEmbed from '@/components/MediaEmbed';

// Special video component with play button for video_5
const SpecialVideo = ({ src, title, description, isActive, onActivate }: any) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<any>(null);

  const handleVideoClick = () => {
    onActivate();
    const video = videoRef.current;
    if (!video) return;

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
    setHasError(true);
  };

  return (
    <div className="relative group cursor-pointer transition-all duration-300">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-contain cursor-pointer"
        loop
        playsInline
        preload="metadata"
        onLoadStart={() => setIsLoading(true)}
        onCanPlay={handleVideoLoad}
        onError={handleVideoError}
        onClick={handleVideoClick}
      />
      
      {/* Play button overlay */}
      {!isPlaying && !isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
      )}
      
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
    </div>
  );
};

// Local videos - add your actual video paths
const localVideos = [
  {
    src: '/videos/video_1.mp4',
    title: "I am not into politics",
    description: '**Visuals by Aylin Aktas  | Sound by Lukas Rieder**\n\nA visual reflection on everyday racism, privilege, and the illusion of neutrality. Handwritten words cover faces, looping the phrase "I\'m not really into politics," exploring how silence protects some while others are forced to navigate a world where their identity is always politicized. Presented as animation and posters, digital and physical.',
  },
  {
    src: '/videos/video_2.mp4',
    title: "8030",
    description: '**Visuals by Lina Sandersfeld | Sound by Lukas Rieder**\n\n8030 explores the insidious normalization of right-wing rhetoric and its impact on women\'s rights. It is both a visual and emotional response to a political climate that reframes oppression as tradition.',
  },
  {
    src: '/videos/video_4.mp4',
    title: "Alice in Deutschland",
    description: '**Visuals by Franziska Schiffer | Sound by Lukas Rieder**\n\nThe poster Alice in Deutschland takes a satirical jab at today\'s political situation, with a direct critique of the worrying shift in politics. Using the Mad Tea Party not just as a visual element but as a symbol, it portrays the feeling of being stuck in time, 1933, to be exact, just like Alice in Alice in Wonderland at 6 o\'clock. The world today feels like we\'re caught in a chaotic loop, where the past keeps repeating itself. The goal here is to provoke, criticize, and act as a wake-up call.',
   },
    {
    src: '/videos/video_3.mp4',
    title: "Fading Freedoms",
    description: '**Visuals by Julia Hechtl | Sound by Lukas Rieder**\n\nFading Freedoms is a visual exploration of how human rights are gradually erased. Not through sudden destruction, but through slow, unnoticed disappearance. Using light, shadow, and physical materials, this project captures the fragile nature of democracy, free speech and equality. The words fading shadows are strong at first, then dissolving, mirroring the way rights slip away while we are still watching. What remains when everything has faded?',
  },
  {
    src: '/videos/video_5.mp4',
    title: "Mei Marie",
    description: '**Concept: Mei Marie**\n**Illustration & Animation: Magdalena Ackerl**\n**Sound Design: Lukas Rieder**\n\nFor MeiMarie, I created the sound design for a series of social media animation videos that quickly and clearly explain the key features of their new app.\nThe tax-saving app by Linde Verlag (Vienna) makes accounting easier and faster than ever – from capturing receipts to getting helpful tips for tax returns.',
  },
];

// YouTube videos - add your actual YouTube links
const youtubeVideos = [
  {
    type: 'youtube' as const,
    url: 'https://youtu.be/neftf2eH18c',
    title: 'PANDEMONIUM - Klanglicht 2025',
    description: '**Composition: Lukas Rieder, Anna Mauthner**\n**Stereo/Surround Mix: Lukas Rieder**\n\n**Visuals: Magdalena Ackerl, Felix Prinz, Tobias Schnittenkopf, Florian Thausing, Tanja Kobler**\n\nThere are moments when routine becomes a cage we built ourselves. We chase rhythm, control, and comfort, until something inside begins to shift. What follows is both chaos and liberation — the quiet realization that losing balance is also how we grow. We created the soundtrack for a sound installation at the Klanglicht Festival Graz, realized inside a church with challenging acoustics.',
  },
  {
    type: 'youtube' as const,
    url: 'https://www.youtube.com/watch?v=BAYFrHkABJs',
    title: 'Standby - Flavor Amp',
    description: '**Writing: Lukas Kotschnig, Lukas Rieder, Alex Glantschnig, Clemens Bärnthaler**\n**Recording, Mixing: Lukas Rieder**\n\nStandby was the first production realized in our self-built recording studio. I was responsible for the complete music production, including recording and mixing. The track is part of a rock concept album of my Band FLAVOR AMP about addiction and dependency. The lyric video was created by Jacob Mikula (@meaku.arts).',
  },
  {
    type: 'youtube' as const,
    url: 'https://www.youtube.com/watch?v=SWNIiu4zLVw',
    title: "'Kindred' for The North Face",
    description: 'Talents: @katarina.ptg @prinzik @crazy.ass.guy\nDirector: @noahbonevie\nDoP: @peter.verhounik\nGaffer: @a_man_called_aman\nPAs: @katarismus @http_magda\nEdit: @mariosahbi & @noahbonevie\nColor: @peter.verhounik\n\nMusic: Gregor Schmitz\nSound Design: Lukas Rieder\n\nSpec movie for The North Face',
  },
];

const WorkSection = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  // Handle video activation with sound management
  const handleVideoActivate = (index: number) => {
    // If clicking the same video, don't change anything
    if (activeVideoIndex === index) {
      return;
    }
    
    // Set new active video (this will automatically mute the old one via LocalVideo logic)
    setActiveVideoIndex(index);
  };

  return (
    <section id="work" className="py-16 sm:py-24 md:py-32 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="section-heading mb-3 sm:mb-4">
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A selection of projects I have worked on recently.
          </p>
        </div>

        {/* YouTube videos section - first */}
        <div className="mb-16">
          <div className="space-y-8 max-w-4xl mx-auto">
            {youtubeVideos.map((video, index) => (
              <MediaEmbed
                key={index}
                type={video.type}
                url={video.url}
                title={video.title}
                description={video.description}
                featured={false}
              />
            ))}
          </div>
        </div>

        {/* Local videos section */}
        <div className="mb-8">
          <h3 className="text-center text-xl font-semibold mb-4 text-muted-foreground">Animated Posters</h3>
          {/* Video grid - 4 portrait videos side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-7xl mx-auto mb-8">
            {localVideos.slice(0, 4).map((video, index) => (
              <LocalVideo
                key={index}
                src={video.src}
                title={video.title}
                description={video.description}
                isActive={activeVideoIndex === index}
                onActivate={() => handleVideoActivate(index)}
              />
            ))}
          </div>

          {/* Special layout for video_5 */}
          <div className="max-w-7xl mx-auto mt-12">
            <h3 className="text-center text-xl font-semibold mb-8 text-muted-foreground">Commercial Sound Design</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Video on the left */}
              <div className="aspect-video">
                <SpecialVideo
                  src={localVideos[4].src}
                  title={localVideos[4].title}
                  description={localVideos[4].description}
                  isActive={activeVideoIndex === 4}
                  onActivate={() => handleVideoActivate(4)}
                />
              </div>
              
              {/* Description on the right */}
              <div className="space-y-4">
                <h3 className="font-semibold text-2xl">{localVideos[4].title}</h3>
                <div 
                  className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{
                    __html: localVideos[4].description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional note */}
        <p className="text-center text-muted-foreground text-xs sm:text-sm mt-10 sm:mt-16">
          Want to see more? <a href="#contact" className="text-primary hover:underline">Get in touch</a> for more projects.
        </p>
      </div>
    </section>
  );
};

export default WorkSection;
