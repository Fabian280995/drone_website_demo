"use client";
import PaddingBox from "./layout/PaddingBox";
import ZoomParallax from "./ZoomParallax";

function Gallery() {
  return (
    <section id="gallery" className="bg-gray-50">
      <PaddingBox top="xl" horizontal="xl" bottom="sm">
        <h2 className="text-center">Gallerie</h2>
      </PaddingBox>
      <ZoomParallax />
    </section>
  );
}

export default Gallery;
