"use client";
import React from "react";
import { Button } from "./ui/button";

function Gallery() {
  const [videoSrc, setVideoSrc] = React.useState<string | null>(null);
  const videos = [
    { id: 1, src: "/placeholder.mp4", title: "Stadtflug" },
    { id: 2, src: "/placeholder.mp4", title: "Naturaufnahmen" },
    { id: 3, src: "/placeholder.mp4", title: "Event-Coverage" },
  ];
  return (
    <section id="gallery" className="py-20 bg-muted z-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Video Galerie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <video
                src={video.src}
                className="w-full aspect-video object-cover cursor-pointer"
                poster="/placeholder.svg?height=360&width=640"
                onClick={() => setVideoSrc(video.src)}
              />
              <div className="p-4 bg-card">
                <h3 className="font-semibold">{video.title}</h3>
                <Button variant="link" onClick={() => setVideoSrc(video.src)}>
                  Ansehen
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
