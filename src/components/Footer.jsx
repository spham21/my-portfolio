export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/60">© {new Date().getFullYear()} Stephanie Pham</p>
        <div className="flex gap-5 text-white/75">
          <a className="hover:text-white" href="https://github.com/spham21" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-white" href="https://www.linkedin.com/in/stephanie-pham-634ab1334/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-white" href="mailto:stephaniepham520@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}