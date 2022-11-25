import React from "react";
import globoCrypto from "../../images/illustrations/globe.png";

export default function HeroSections() {
  return (
    <section>
      <div className="grid grid-cols-2">
        <div className="flex items-center">
          <div>
            <p className="text-primary">SIGN UP TODAY</p>
            <h1 className="text-4xl">The World’s Fastest Growing Crypto Web App</h1>
          </div>
        </div>
      </div>
      <div>
        <img src={globoCrypto} alt="ilustration" />
      </div>
    </section>
  );
}
