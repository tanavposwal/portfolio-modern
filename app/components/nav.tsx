import Link from "next/link";

const navItems = {
  "/": {
    name: "me",
  },
  "/blog": {
    name: "blogs",
  },
  "/projects": {
    name: "projects",
  },
};

export function Navbar() {
  return (
    <nav className="animate-in fade-in-5 flex items-center justify-between border-b border-black/30 px-4 py-4">
      <Link href={"/"}>
        <div className="w-4 h-4 bg-gradient-to-br hover:rotate-45 from-primary to-accent rounded-full transition-tranform" />
      </Link>
      <div className="flex gap-3">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="transition-colors hover:text-dark flex align-middle relative group flex-col text-sm items-center justify-center font-semibold">
              {name}
            </Link>
          );
        })}
        {/* <a
              href="http://docs.google.com/document/d/1rOTy341rTIquz2SzYpTs7ouaR88VzCi886iT0IEGOKk/export?format=pdf"
              className="transition-colors text-neutral-500 hover:text-white flex align-middle relative py-1 px-2 group flex-col items-center justify-center"
            >
              resume
            </a> */}
      </div>
    </nav>
  );
}
