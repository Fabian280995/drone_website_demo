"use client";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

function Hero() {
  const [videoSrc, setVideoSrc] = useState(
    "https://www.youtube.com/watch?v=_iiEVUTcm8k"
  );
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [played, setPlayed] = useState(0);

  // Typ des Refs festlegen, damit TypeScript weiß, dass es ein ReactPlayer ist
  const playerRef = useRef<ReactPlayer | null>(null);

  // Funktion für Play/Pause Umschalten
  const handlePlayPause = () => {
    setPlaying((prevPlaying) => !prevPlaying);
  };

  // Funktion für Mute/Unmute Umschalten
  const handleMuteUnmute = () => {
    setMuted((prevMuted) => !prevMuted);
  };

  // Handler für die Fortschrittsänderung des Videos (state: ReactPlayerProps['onProgress'])
  const handleProgress = (state: { played: number }) => {
    setPlayed(state.played);
  };

  // Funktion zum Springen im Video (Event e explizit typisieren)
  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPlayed = parseFloat(e.target.value);
    setPlayed(newPlayed);

    if (playerRef.current) {
      playerRef.current.seekTo(newPlayed, "fraction");
    }
  };

  return (
    <section id="home">
      <div className="container mx-auto px-4 bg-transparent py-64 flex flex-row flex-wrap items-center">
        <div className="flex flex-col w-1/2 pr-2">
          <h1 className="text-4xl mb-2 font-audiowide drop-shadow-md tracking-tight">
            Dynamische Drohnenaufnahmen
          </h1>
          <p className="text-primary/80 text-xl leading-8 text-balance">
            Lass uns coole Dinge tun! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ex, dicta provident non sed illo, ipsum doloremque
            vel laborum voluptatem reprehenderit assumenda saepe facere dolorem?
            Reprehenderit necessitatibus quibusdam culpa aut non!
          </p>
        </div>
        <div className="relative w-1/2 aspect-video shadow-md  shadow-black/20">
          <ReactPlayer
            ref={playerRef}
            url={videoSrc}
            playing={playing}
            muted={muted}
            loop
            controls={false}
            onProgress={handleProgress}
            width="100%"
            height="100%"
            playsinline
            config={{
              youtube: {
                playerVars: {
                  autoplay: 1,
                  controls: 0, // Keine Player-Steuerung anzeigen
                  modestbranding: 1, // Kein YouTube-Logo anzeigen
                  rel: 0, // Keine ähnlichen Videos am Ende anzeigen
                  showinfo: 0, // Keine Videoinformationen anzeigen
                  fs: 0, // Kein Vollbild-Button
                  cc_load_policy: 0, // Keine Untertitel anzeigen
                  iv_load_policy: 3, // Keine Anmerkungen anzeigen
                  disablekb: 1, // Tastatursteuerung deaktivieren
                  loop: 1, // Video in Schleife abspielen
                },
                embedOptions: {
                  autoplay: 1,
                },
              },
            }}
          />
          {/* Custom Controls */}
          <div className="absolute inset-0 flex flex-row items-end gap-4 group hover:bg-gradient-to-t from-black/60 via-transparent to-transparent">
            <div className="w-full flex flex-row items-center justify-between gap-4 opacity-0 group-hover:opacity-100 px-4 pb-2">
              {/* Play/Pause Button */}
              <div className="flex flex-row items-center gap-4">
                <button onClick={handlePlayPause} className="text-white">
                  {playing ? <Pause size={16} /> : <Play size={16} />}
                </button>
                <div className="w-32 h-1 bg-gray-400 rounded-full overflow-hidden opacity-80">
                  <div
                    className="h-full bg-white"
                    style={{ width: `${played * 100}%` }}
                  />
                </div>
              </div>
              {/* Mute/Unmute Button */}
              <div className="">
                <button onClick={handleMuteUnmute} className="text-white">
                  {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>
              {/* Fortschrittsbalken */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
