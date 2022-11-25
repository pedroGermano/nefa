import React from "react";
import Logo from "../../images/logo.svg";
import PrimaryButtons from "../buttons/PrimaryButtons";
import SecondaryButton from "../buttons/SecondaryButtons";

export default function Navbar() {
  return (
    <div className="sticky top-0 py-8 flex justify-between items-center">
      <div className="flex items-center">
        <img src={Logo} className="mr-6" alt="logo nefa" />
        <nav className="flex">
          <a href="/" className="mx-6 hover:text-primary">
            Cryptocurrency
          </a>
          <a href="/" className="mx-6 hover:text-primary">
            Exchanges
          </a>
          <a href="/" className="mx-6 hover:text-primary">
            Watchlist
          </a>
          <a href="/" className="mx-6 hover:text-primary">
            NFT
          </a>
          <a href="/" className="mx-6 hover:text-primary">
            Portfolio
          </a>
          <a href="/" className="mx-6 hover:text-primary">
            Product
          </a>
        </nav>
      </div>
      <div className="flex">
        <SecondaryButton>Log In</SecondaryButton>
        <PrimaryButtons>Sign Up</PrimaryButtons>
      </div>
    </div>
  );
}
