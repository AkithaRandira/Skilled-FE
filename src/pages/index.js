import Companies from "@/components/Companies";
import Everything from "@/components/Everything";
import HeroBanner from "@/components/HeroBanner";
import JoinSkilled from "@/components/JoinSkilled";
import PopularServices from "@/components/PopularServices";
import Services from "@/components/Services";
import SkilledBusiness from "@/components/SkilledBusiness";
import React from "react";

function index() {
  return (
    <div>
      <HeroBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <Services />
      <SkilledBusiness />
      <JoinSkilled />
    </div>
  );
}

export default index;
