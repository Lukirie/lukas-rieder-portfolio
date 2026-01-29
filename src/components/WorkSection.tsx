import { useState } from 'react';
import LocalVideo from '@/components/LocalVideo';
import MobileVideo from '@/components/MobileVideo';
import MediaEmbed from '@/components/MediaEmbed';

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-7xl mx-auto">
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
