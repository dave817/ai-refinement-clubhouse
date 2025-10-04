import flowingVideo from '../assets/dave81793_01150_12688_glossy_liquid_glass_flowing_panorama_ho_9a9ba6ad-11c2-4a15-bbc0-b43f176c58e7_3.mp4';

export function BottomSection() {
  return (
    <div className="relative w-full h-96 md:h-96 overflow-hidden">
      <video
        className="w-full h-full object-cover scale-150 md:scale-100"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={flowingVideo} type="video/mp4" />
      </video>
    </div>
  );
}