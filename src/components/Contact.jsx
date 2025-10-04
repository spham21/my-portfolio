export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 border-t border-neutral-800">
      <h3 className="text-3xl font-bold">Contact</h3>
      <p className="mt-3 text-white/75 max-w-2xl">
        Have a project or role in mind? I’m open to freelance and full-time opportunities.
      </p>

      <form
        className="mt-8 grid sm:grid-cols-2 gap-4"
        onSubmit={(e) => { e.preventDefault(); alert("Thanks! I’ll reply soon."); }}
      >
        <input className="bg-neutral-900/80 border border-white/10 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#ff4ecd]/30" placeholder="Your name" required />
        <input type="email" className="bg-neutral-900/80 border border-white/10 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#ff4ecd]/30" placeholder="Email" required />
        <input className="sm:col-span-2 bg-neutral-900/80 border border-white/10 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#ff4ecd]/30" placeholder="Subject" />
        <textarea className="sm:col-span-2 bg-neutral-900/80 border border-white/10 rounded p-3 h-32 focus:outline-none focus:ring-2 focus:ring-[#ff4ecd]/30" placeholder="Message" />
        <button className="sm:col-span-2 px-5 py-3 rounded-md bg-[#ff4ecd] hover:bg-[#ff4ecd]/90 transition shadow-[0_0_40px_rgba(255,78,205,0.35)]">
          Send message
        </button>
      </form>
    </section>
  );
}