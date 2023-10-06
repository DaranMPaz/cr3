"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function HeaderLink({text, link, isActive,} : {
  text: string;
  link: string;
  isActive?: boolean;
}) {
  return isActive ? (
    <li className="text-sm h-max leading-6 border-b-2 border-theme-yellow-800 cursor-pointer tracking-wide hover:text-theme-red-500">
      <Link href={`${link}`}>{`${text}`}</Link>
    </li>
  ) : (
    <li className="text-sm h-max leading-6 tracking-wide cursor-pointer hover:text-theme-red-500">
      <Link href={`${link}`}>{`${text}`}</Link>
    </li>
  );
}

export function HeaderDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsOpen((old) => !old);
  };
  const transClass = isOpen ? "flex" : "hidden";

  return (
    <>
      <div className="relative">
        <button className="hover:text-theme-red-500" onClick={toggle}>
          Serviços
        </button>
        <div
          className={`absolute top-8 z-30 w-[250px] flex flex-col gap-3 p-4 bg-theme-gray2-900 rounded ${transClass}`}
        >
          <HeaderLink
            link="/services/audit"
            text="Auditoria de Terceira Parte"
          />
          <HeaderLink link="/services/iso" text="Auditoria ISO" />
        </div>
      </div>
      {isOpen ? (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
          onClick={toggle}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}

export function HeaderButton({ text, link }: { text: string; link: string }) {
  return (
    <Link className="flex flex-col justify-center items-center h-12 px-4 py-3 rounded border-2 border-theme-yellow-800 text-theme-yellow-800 text-base font-bold tracking-wider uppercase hover:bg-theme-red-700 hover:text-theme-gray-50 hover:border-theme-red-700 " href={`${link}`}>{`${text}`}</Link>
  );
}

export function HeaderLinkGroup({ children }: { children: React.ReactNode }) {
  return <ul className="flex gap-6 items-center">{children}</ul>;
}

export function HeaderLogo({ logo }: { logo: any }) {
  return (
    <Link href={"/"}>
      <Image src={logo} alt="CR3 Logo" width={74} height={43}></Image>
    </Link>
  );
}

export function HeaderContainer({ children }: { children: React.ReactNode }) {
  return (
    <header className="py-4 px-24 flex justify-center items-center bg-zinc-900 text-white fixed w-full z-20">
      <div className="flex items-center justify-between w-full max-w-[1600px]">
        {children}
      </div>
    </header>
  );
}
