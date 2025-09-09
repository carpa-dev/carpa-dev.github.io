"use client";

import { useState } from "react";
import Image from "next-image-export-optimizer";
import Link from "next/link";
import Logo from "./logo.png";

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
    label: "O Ingrediente Secreto",
    href: "#ingrediente-secreto",
  },
  {
    label: "Contato",
    href: "#contato",
    className: "button",
  },
];

export function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full p-4 sticky top-0 z-9 bg-white shadow-lg">
      <div className="container flex flex-row justify-between">
        <Link href="/">
          <Image src={Logo} alt="Logo" height={50} />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex justify-between">
            {links.map((l) => (
              <li
                key={l.label}
                className={`${l.className ?? ""} group relative`}
              >
                {l.className !== "button" && (
                  <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-black group-hover:w-full"></span>
                )}
                <Link className="py-3 px-6 block" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="block lg:hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
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
            <div className="flex justify-between items-center">
              <div></div>
              <button
                className="cursor-pointer p-4"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar menu"
                style={{ height: "80px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <ul className="p-6">
              {links.map((l) => (
                <li
                  key={l.label}
                  className={`py-3 group ${l.className ?? ""} ${
                    l.className === "button" ? "px-6 mt-3 inline-block" : "px-2"
                  } 
                  `}
                >
                  <Link
                    href={l.href}
                    onClick={() => setIsOpen(false)}
                    className="relative"
                  >
                    {l.label}
                    {l.className !== "button" && (
                      <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-black group-hover:w-full"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </header>
  );
}
