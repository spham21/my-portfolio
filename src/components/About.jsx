export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 border-t border-neutral-800">
      <h3 className="text-3xl font-bold">About me</h3>
      <p className="mt-4 text-white/75 max-w-3xl">
      Hi! My name is Stephanie Pham, I'm currently a student at UCLA studying Mathematics of Computation 
      with interest in incorporating art and creativity into the STEM field. Here is a little about me!
      </p>

      <div className="mt-8 grid sm:grid-cols-3 gap-5">
        <Stat number="Hobbies" label="Travel, art, cafes, photography, crafts" />
        <Stat number="Education" label="University of California, Los Angeles." />
        <Stat number="Interests" label="Data science, design, graphic design, mathematics" />
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-xl bg-neutral-900/80 p-6 border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_rgba(255,78,205,0.25)] transition">
      <div className="text-3xl font-extrabold bg-gradient-to-r from-[#ff4ecd] to-[#b26bff] bg-clip-text text-transparent">
        {number}
      </div>
      <div className="text-white/70">{label}</div>
    </div>
  );
}