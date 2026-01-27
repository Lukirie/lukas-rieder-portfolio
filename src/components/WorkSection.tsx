import MediaEmbed from './MediaEmbed';

// Example work items - replace with actual content
const workItems = [
  {
    type: 'youtube' as const,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with actual video
    title: 'Live Concert',
    description: 'Full live sound engineering for sold-out arena show',
    featured: true,
  },
  {
    type: 'spotify' as const,
    url: 'https://open.spotify.com/embed/album/1kgcBzBRnBrqqef8XkryYx', // Replace with actual Spotify link
    title: 'Album Production',
    description: 'Recording and mixing for rock album release',
    featured: false,
  },
  {
    type: 'youtube' as const,
    url: 'https://www.youtube.com/watch?v=BAYFrHkABJs&list=RDBAYFrHkABJs&start_radio=1', // Replace with actual video
    title: 'Sound Design Reel',
    description: 'Collection of sound design work for film and games',
    featured: false,
  },
  {
    type: 'video' as const,
    url: '', // Add your own video URL here
    title: 'Studio Session',
    description: 'Behind the scenes recording session',
    featured: false,
  },
  
];

const WorkSection = () => {
  // Filter out items with empty URLs
  const visibleItems = workItems.filter(item => item.url);
  const featuredItem = visibleItems.find(item => item.featured);
  const regularItems = visibleItems.filter(item => !item.featured);

  return (
    <section id="work" className="py-16 sm:py-24 md:py-32 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="section-heading mb-3 sm:mb-4">
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A curated selection of studio recordings, live productions, and sound design projects.
          </p>
        </div>

        {/* Featured work - full width on all screens */}
        {featuredItem && (
          <div className="mb-8 sm:mb-12">
            <MediaEmbed
              type={featuredItem.type}
              url={featuredItem.url}
              title={featuredItem.title}
              description={featuredItem.description}
              featured={true}
            />
          </div>
        )}

        {/* Work grid - responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {regularItems.map((item, index) => (
            <MediaEmbed
              key={index}
              type={item.type}
              url={item.url}
              title={item.title}
              description={item.description}
            />
          ))}
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
