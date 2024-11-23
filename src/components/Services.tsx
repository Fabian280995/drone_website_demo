import PaddingBox from "./layout/PaddingBox";
import Video from "next-video";
import previewVideo from "/videos/foggy_castle_preview.mp4";
function Services() {
  return (
    <section id="services" className="w-full h-full">
      <PaddingBox top="xl" bottom="md" horizontal="xl">
        <h2>Unsere Leistungen</h2>
      </PaddingBox>
      <div className="max-w-5xl mx-auto relative">
        <Video src={previewVideo} controls={false} loop />
      </div>
    </section>
  );
}

export default Services;
