/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Advantage from "./pages/Advantage";
import Partners from "./pages/Partners";
import Careers from "./pages/Careers";
import CaseStudies from "./pages/CaseStudies";
import Industries from "./pages/Industries";
import DealRoom from "./pages/DealRoom";
import Automation from "./pages/solutions/Automation";
import AIEducation from "./pages/solutions/AIEducation";
import Security from "./pages/solutions/Security";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PaymentHub from "./pages/PaymentHub";
import Blog from "./pages/Blog";
import EGuides from "./pages/EGuides";
import Playbooks from "./pages/Playbooks";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="advantage" element={<Advantage />} />
          <Route path="partners" element={<Partners />} />
          <Route path="careers" element={<Careers />} />
          <Route path="industries" element={<Industries />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="deal-room" element={<DealRoom />} />
          <Route path="payment-hub" element={<PaymentHub />} />
          <Route path="solutions/automation" element={<Automation />} />
          <Route path="solutions/ai-education" element={<AIEducation />} />
          <Route path="solutions/security" element={<Security />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="blog" element={<Blog />} />
          <Route path="eguides" element={<EGuides />} />
          <Route path="playbooks" element={<Playbooks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
