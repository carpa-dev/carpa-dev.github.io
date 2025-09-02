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
    <header className="fixed z-1 w-full bg-white shadow-xl">
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
                  <Link className="py-3 px-12 block" href={l.href}>
                    {l.label}
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
