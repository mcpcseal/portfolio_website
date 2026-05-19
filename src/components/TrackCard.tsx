import type { Track } from '../types';
import EmbedPlayer from './EmbedPlayer';

interface Props {
  track: Track;
}

export default function TrackCard({ track }: Props) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <EmbedPlayer track={track} />
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-semibold text-gray-900">{track.title}</h3>
          <span className="text-xs text-gray-400 shrink-0 mt-0.5">{track.year}</span>
        </div>
        {track.description && (
          <p className="text-sm text-gray-500 leading-relaxed mb-3">
            {track.description}
          </p>
        )}
        {track.tags && track.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {track.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
