import Link from "next/link";

const links = [
  {
    label: "Início",
    href: "#",
  },
  {
    label: "Serviços",
    href: "#",
  },
  {
    label: "Portifólio",
    href: "#",
  },
  {
    label: "Quem Somos",
    href: "#",
  },
  {
    label: "Contato",
    href: "#",
    className: "button",
  },
];
export function TopBar() {
  return (
    <header className="flex flex-row justify-between w-full p-4 container">
      <Link href="/">Logo</Link>
      <div className="flex-1"></div>

      <nav>
        <ul className="flex justify-between">
          {links.map((l) => {
            return (
              <li key={l.label} className={`${l.className ? l.className : ""}`}>
                <Link className="py-3 px-12 block" href={l.href}>
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
