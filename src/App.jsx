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
      </Routes>
    </div>
  );
}

export default App;
