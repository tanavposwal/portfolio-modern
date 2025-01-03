import Link from 'next/link';

const navItems = {
  '/': {
    name: 'me',
  },
  '/blog': {
    name: 'blogs',
  },
  '/projects': {
    name: 'projects',
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mt-6 mb-6 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-colors text-neutral-400 hover:text-white flex align-middle relative py-1 px-2 group flex-col items-center justify-center font-semibold"
                >
                  {name}
                </Link>
              );
            })}
            <a
              href="http://docs.google.com/document/d/1rOTy341rTIquz2SzYpTs7ouaR88VzCi886iT0IEGOKk/export?format=pdf"
              className="transition-colors text-neutral-400 hover:text-white flex align-middle relative py-1 px-2 group flex-col items-center justify-center font-semibold"
            >
              resume
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}
