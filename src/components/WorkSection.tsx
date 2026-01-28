import { useState } from 'react';
import LocalVideo from './LocalVideo';
import MediaEmbed from './MediaEmbed';

// Local videos - replace with your actual video files
const localVideos = [
  {
    src: '/videos/video_1.mp4', // Your actual video files
    title: 'I\'m not really into politics',
    description: '**Visuals by Aylin Aktas | Sound by Lukas Rieder**\n\nA sentence often said casually but one not everyone can afford to say. For those whose lives are shaped by policies, borders, and biases, politics isn\'t something distant, it\'s something lived. This animated poster explores that quiet reality. Layered whispers loop like the background conversations we\'re not always meant to hear, but still feel. Because when your person is politicized, can you really be "not into politics"?"',
  },
  {
    src: '/videos/video_2.mp4',
    title: "When the right rises women's rights fall",
    description: '**Visuals by Lina Sandersfeld | Sound by Lukas Rieder**\n\nThe project explores the insidious normalization of right-wing rhetoric and its impact on women’s rights. It is both a visual and emotional response to a political climate that reframes oppression as tradition.',
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
    title: 'Live Sound Engineering',
    description: 'Complete FOH setup and mixing for live concert',
  },
  {
    type: 'youtube' as const,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    title: 'Studio Recording Session',
    description: 'Behind the scenes of a professional recording session',
  },
];

const WorkSection = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

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
        <div className="mb-16">
          <h3 className="text-center text-xl font-semibold mb-8 text-muted-foreground">Animated Posters</h3>
          {/* Video grid - 2 portrait videos side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {localVideos.map((video, index) => (
              <LocalVideo
                key={index}
                src={video.src}
                title={video.title}
                description={video.description}
                isActive={activeVideoIndex === index}
                onActivate={() => setActiveVideoIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Additional note */}
        <p className="text-center text-muted-foreground text-xs sm:text-sm mt-10 sm:mt-16">
          Want to see more? <a href="#contact" className="text-primary hover:underline">Get in touch</a> for a complete portfolio.
        </p>
      </div>
    </section>
  );
};

export default WorkSection;
