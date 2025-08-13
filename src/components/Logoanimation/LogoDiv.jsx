import React from "react";
import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
  

  const upperMarquee = [
    "/acn.svg",
    "/adobe-dreamweaver-2.svg",
    "/adobe-xd-2.svg",
    "/aruba-it.svg",
    "/audi.svg",
    "/bootstrap.svg",
    "/dhl.svg",
    "/fastbank.svg",
    "/fedex-express-6.svg",
    "/halifax.svg",
    
  ];

  return (
    <div className="container mx-auto mt-30">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
    </div>
  );
};

export default Marquee;