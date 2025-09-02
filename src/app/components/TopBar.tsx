"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const links = [
  { label: "Início", href: "#" },
  { label: "Serviços", href: "#" },
  { label: "Portifólio", href: "#" },
  { label: "Quem Somos", href: "#" },
  { label: "Contato", href: "#", className: "button" }
];

export function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-row justify-between w-full p-4 container relative">
      <Link href="/">
        <Image src={Logo} alt="Logo" height={50} />
      </Link>

      <nav className="hidden lg:block">
        <ul className="flex justify-between">
          {links.map((l) => (
            <li key={l.label} className={l.className ?? ""}>
              <Link className="py-3 px-6 block" href={l.href}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="block lg:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir menu"
      >
        <Bars3Icon className="size-6" />
      </button>

      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <aside
          className={`absolute top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4">
            <div></div>
            <button onClick={() => setIsOpen(false)} aria-label="Fechar menu">
              <XMarkIcon className="size-6" />
            </button>
          </div>

          <ul className="flex flex-col p-4 gap-4">
            {links.map((l) => (
              <li key={l.label} className={l.className ?? ""}>
                <Link
                  className="block py-2 px-4"
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </header>
  );
}
