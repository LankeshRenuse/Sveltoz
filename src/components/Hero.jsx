export default function Hero() {

  return (

    <section className="hero">

<video
  className="hero-banner"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
>
  <source
    src="/entry-vid.mp4"
    type="video/mp4"
  />
</video>  

      {/* HERO PARTICLE OVERLAY */}
      <div className="hero-particle-overlay"></div>

    </section>
  );
}