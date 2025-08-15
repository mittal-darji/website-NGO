import React from "react";
// import "./App.css";
import Home from "./Component/Home/Home";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./Component/Contact/ContactUs";
import OurWork from "./Component/OurWork/OurWork";
import Carddetail from "./Component/CardDetail/Carddetail";
import DonationGateway from "./Component/Donation/DonationGateway ";
import Founder from "./Component/Founder/Founder";
import AboutOrganization from "./Component/organaization/AboutOrganization";
import VisionPage from "./Component/vision/VisionPage";
import MissionPage from "./Component/Mission/MissionPage";
import Achievements from "./Component/Achievements/Achievements";
import Media from "./Component/Media/Media";
import Kanyadaan from "./Component/KanyadaanPage/Kanyadaan";
import Campaign from "./Component/Campaign/Campaign";
import CardOptionsPage from "./Component/Membership/CardOptionsPage ";
import MembershipForm from "./Component/Membership/MembershipForm";
import MemberCard from "./Component/Membership/MemberCard";
import Yellowcardfield from "./Component/Membership/yellowcardfield";
import Orangecardfield from "./Component/Membership/Orangecardfield";
import PaymentPage from "./Component/Donation/PaymentPage";
import OtpGenerate from "./Component/Membership/OtpGenerate";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/founder" element={<Founder />} />
        <Route path="/about/organization" element={<AboutOrganization />} />
        <Route path="/about/Kanyadaan" element={<Kanyadaan />} />
        <Route path="/about/campaign" element={<Campaign />} />
        <Route path="/about/vision" element={<VisionPage />} />
        <Route path="/about/mission" element={<MissionPage />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/media" element={<Media />} />
        <Route path="/carddetail" element={<Carddetail />} />
        <Route path="/donate" element={<DonationGateway />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/otpGenerate" element={<OtpGenerate />} />{" "}
        <Route path="/membership" element={<CardOptionsPage />} />
        <Route path="/membership/form" element={<MembershipForm />} />
        <Route path="/membercard" element={<MemberCard />} />
        <Route path="/yellowcard" element={<Yellowcardfield />} />
        <Route path="/orangecard" element={<Orangecardfield />} />
      </Routes>
    </div>
  );
}

export default App;
