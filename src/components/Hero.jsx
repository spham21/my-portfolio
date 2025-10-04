export default function Hero() {
  return (
    <section className="pt-16 md:pt-24 pb-20 md:pb-28 grid md:grid-cols-2 gap-10 items-center">
      {/* Text */}
      <div>
        <p className="text-[#ff4ecd] font-medium">Hello, I’m</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-[#ff4ecd] to-[#b26bff] bg-clip-text text-transparent">
            Stephanie Pham
          </span>
        </h1>
        <h2 className="mt-2 text-2xl sm:text-3xl text-white/85">
          Front-End / Software Developer
        </h2>
        <p className="mt-5 text-white/70 max-w-xl">
        Hi! My name is Stephanie Pham, I'm currently a student at UCLA studying Mathematics of Computation with interest in incorporating 
        art and creativity into the STEM field. Here are some of my works.
        </p>
        <div className="mt-7 flex gap-3">
          <a
            href="#projects"
            className="px-5 py-3 rounded-md bg-[#ff4ecd] hover:bg-[#ff4ecd]/90 transition shadow-[0_0_40px_rgba(255,78,205,0.35)]"
          >
            My projects!
          </a>
          <a
            href="/resume.pdf"
            className="px-5 py-3 rounded-md border border-white/15 hover:border-white/30 relative overflow-hidden"
          >
            <span className="relative z-10">My resume!</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_1.25s_linear_infinite]" />
          </a>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/60">
          {["HTML","CSS","JavaScript","TypeScript","React","Git"].map((s) => (
            <span
              key={s}
              className="px-3 py-1.5 rounded-md bg-neutral-900 border border-white/5"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Portrait with neon ring */}
      <div className="flex justify-center">
        <div className="relative w-60 h-60 sm:w-72 sm:h-72">
          {/* glow */}
          <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#ff4ecd] to-[#b26bff] blur-2xl opacity-30" />
          <img
            src="/avatar.JPG"
            alt="Portrait"
            className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-[0_0_40px_rgba(255,78,205,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}