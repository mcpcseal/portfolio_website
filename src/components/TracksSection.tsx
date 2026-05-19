import { tracks } from '../data/tracks';
import TrackCard from './TrackCard';

export default function TracksSection() {
  return (
    <section id="tracks" className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Works</h2>
        <p className="text-gray-400 text-sm">Selected tracks & releases</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </section>
  );
}
