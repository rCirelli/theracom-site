import { DotsThreeVertical } from "phosphor-react";

import Script from "next/script"
import Image from "next/image";

import logo from "@images/logo-theracom-horiz-branco.svg";
import ButtonLink from "./ButtonLink";

const ContactInfo = () => (
  <div className="flex items-center justify-around bg-slate-900 text-slate-200 py-1 border-b-4 border-theracom-200">
    <div className="flex items-center gap-2">
      <div>
        <a
          className="text-xs antialiased flex items-center gap-2"
          href="mailto:contato@theracom.com.br"
        >
          <i className="fa-solid fa-envelope text-lg" />
          contato@theracom.com.br
        </a>
      </div>
      <DotsThreeVertical />
      <div>
        <a
          className="text-xs antialiased flex items-center gap-2"
          href="tel:+551144211001"
        >
          <i className="fa-solid fa-phone text-base" />
          (11) 4421-1001
        </a>
      </div>
    </div>
    <div className="flex gap-2">
      <a href="https://www.linkedin.com/company/theracom-solutions/">
        <i className="fa-brands fa-linkedin-in fa-fw" data-fa-transform="down-6" />
      </a>
      <a href="https://www.facebook.com/theracom">
        <i className="fa-brands fa-facebook-f fa-fw" data-fa-transform="rotate-90" />
      </a>
      <a href="https://www.instagram.com/theracomsolutions/">
        <i className="fa-brands fa-instagram fa-fw" data-fa-transform="up-6" />
      </a>
    </div>
  </div>
);

const Logo = () => (
  <Image src={logo} layout="responsive" priority />
);

const NavBar = () => (
  <nav className="flex items-center justify-between max-w-5xl mx-auto">
    <span className="w-[14%] py-3">
      <Logo />
    </span>
    <span className="flex gap-7 text-slate-200 h-full">
      <ButtonLink linkTo="/">Home</ButtonLink>
      <ButtonLink linkTo="/sobre">Sobre</ButtonLink>
      <ButtonLink linkTo="/produtos">Produtos</ButtonLink>
      <ButtonLink linkTo="/servicos">Serviços</ButtonLink>
      <ButtonLink linkTo="/contato" type="secondary">Contato</ButtonLink>
    </span>
  </nav>
);

function Header() {
  return (
    <>
      <Script src="https://kit.fontawesome.com/13f91c5eb9.js" crossOrigin="anonymous" />
      <header className="bg-theracom-300">
        <ContactInfo />
        <NavBar />
      </header>
    </>
  );
}

export default Header;
