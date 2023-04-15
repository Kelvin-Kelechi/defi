import React from "react";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="bg-black text-white text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16 bg-black text-white text-center">
        <div>
          <h1 className="py-4 text-3xl">A Growing protocol Ecosystem</h1>
          <p className="py-4 text-3xl">
            The Defi protocol stystem empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AboutCard
              icon={<SiHiveBlockchain size={40} />}
              heading="Reliable, tamper-proof setwork"
              text="The decentralization, trusted nodes, premium data, and crytographic proofs
                to connect highly accurate and available data/API to any smart contracts."
            />
            <AboutCard
              icon={<SiFsecure size={40} />}
              heading="Seamless connection to any API"
              text="Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain."
            />
            <AboutCard
              icon={<SiStrapi size={40} />}
              heading="Proven, ready-made solutions"
              text="Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications."
            />
            <AboutCard
              icon={<VscServerProcess size={40} />}
              heading="Secure off-chain computation"
              text="Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
