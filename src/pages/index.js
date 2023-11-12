import AuthWrapper from "../components/AuthWrapper";
import Companies from "../components/landing/Companies";
import Everything from "../components/landing/Everything";
import SkilledBusiness from "../components/landing/SkilledBusiness";
import HeroBanner from "../components/landing/HeroBanner";
import JoinSkilled from "../components/landing/JoinSkilled";
import PopularServices from "../components/landing/PopularServices";
import Services from "../components/landing/Services";
import { useStateProvider } from "../context/StateContext";
import React from "react";

function Index() {
  const [{ showLoginModal, showSignupModal }] = useStateProvider();

  return (
    <div>
      <HeroBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <Services />
      <SkilledBusiness />
      <JoinSkilled />
      {(showLoginModal || showSignupModal) && (
        <AuthWrapper type={showLoginModal ? "login" : "signup"} />
      )}
    </div>
  );
}

export default Index;