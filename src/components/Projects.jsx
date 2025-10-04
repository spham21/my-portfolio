import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 border-t border-neutral-800">
      <h3 className="text-3xl font-bold">Projects</h3>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group rounded-2xl bg-neutral-900/80 border border-white/5 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_rgba(255,78,205,0.25)] hover:-translate-y-1 transition relative overflow-hidden"
          >
            <div className="absolute inset-x-0 -top-1 h-1 bg-gradient-to-r from-[#ff4ecd] to-[#b26bff] opacity-0 group-hover:opacity-100 transition" />
            <div className="h-36 rounded-lg bg-gradient-to-tr from-[#ff4ecd]/15 to-[#b26bff]/15 mb-4" />
            <h4 className="text-xl font-semibold">{p.title}</h4>
            <p className="mt-2 text-white/70">{p.desc}</p>

            <div className="mt-4 flex gap-2 flex-wrap">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex gap-3">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md border border-white/15 hover:border-white/30"
              >
                View Repo
              </a>
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-md bg-[#ff4ecd] hover:bg-[#ff4ecd]/90 transition shadow-[0_0_40px_rgba(255,78,205,0.35)]"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}