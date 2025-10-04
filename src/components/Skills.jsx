const skills = [
  "HTML5","CSS3","JavaScript","TypeScript","React",
  "Tailwind CSS","Git/GitHub","Figma","Adobe Photoshop",
  "Adobe Illustrator","Adobe Premiere Pro",
  "Python","C++","Java", "Wix", "WordPress", "Pandas"
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 border-t border-neutral-800">
      <h3 className="text-3xl font-bold">Skills</h3>
      <ul className="mt-6 flex flex-wrap gap-3">
        {skills.map((s) => (
          <li
            key={s}
            className="px-3 py-2 rounded-md bg-neutral-900/80 border border-white/5 text-white/85 hover:border-white/20 transition"
          >
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}