import Link from "next/link";

const links = [
  {
    label: "Início",
    href: "#",
  },
  {
    label: "Quem Somos",
    href: "#quem-somos",
  },
  {
    label: "Portifólio",
    href: "#portifolio",
  },
  {
    label: "Serviços",
    href: "#servicos",
  },
  {
    label: "Contato",
    href: "#contato",
    className: "button",
  },
];
export function TopBar() {
  return (
    <header className="sticky top-0 z-1 w-full bg-white shadow-xl">
      <div className="flex flex-row justify-between w-full p-4 container bg-white">
        <Link href="/">Logo</Link>
        <div className="flex-1"></div>

        <nav>
          <ul className="flex justify-between">
            {links.map((l) => {
              return (
                <li
                  key={l.label}
                  className={`${l.className ? l.className : ""}`}
                >
                  <Link
                    className="py-3 px-12 block group relative w-max"
                    href={l.href}
                  >
                    {l.label}
                    {l.className !== "button" && (
                      <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-black group-hover:w-full"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
