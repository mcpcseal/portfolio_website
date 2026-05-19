import type { Track } from '../types';

interface Props {
  track: Track;
}

export default function EmbedPlayer({ track }: Props) {
  if (track.embedType === 'youtube') {
    return (
      <div id={`embed-${track.id}`} className="embed-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${track.embedId}`}
          title={track.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  // SoundCloud embed
  const scUrl = encodeURIComponent(track.embedId);
  return (
    <div id={`embed-${track.id}`} className="embed-soundcloud">
      <iframe
        src={`https://w.soundcloud.com/player/?url=${scUrl}&color=%231a1a1a&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
        title={track.title}
        allow="autoplay"
      />
    </div>
  );
}
