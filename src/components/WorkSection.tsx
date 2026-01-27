import MediaEmbed from './MediaEmbed';

// Example work items - replace with actual content
const workItems = [
  {
    type: 'youtube' as const,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with actual video
    title: 'Live Concert Mix',
    description: 'Full live sound engineering for sold-out arena show',
  },
  {
    type: 'spotify' as const,
    url: 'https://open.spotify.com/embed/album/4LH4d3cOWNNsVw41Gqt2kv', // Replace with actual Spotify link
    title: 'Album Production',
    description: 'Recording and mixing for indie rock album release',
  },
  {
    type: 'youtube' as const,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with actual video
    title: 'Sound Design Reel',
    description: 'Collection of sound design work for film and games',
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated selection of studio recordings, live productions, and sound design projects.
          </p>
        </div>

        {/* Work grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {workItems.map((item, index) => (
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
        <p className="text-center text-muted-foreground text-sm mt-12">
          Want to see more? <a href="#contact" className="text-primary hover:underline">Get in touch</a> for a complete portfolio.
        </p>
      </div>
    </section>
  );
};

export default WorkSection;
