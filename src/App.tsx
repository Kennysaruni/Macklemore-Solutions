/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Careers from "./pages/Careers";
import CaseStudies from "./pages/CaseStudies";
import DealRoom from "./pages/DealRoom";
import Automation from "./pages/solutions/Automation";
import AIEducation from "./pages/solutions/AIEducation";
import Security from "./pages/solutions/Security";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="partners" element={<Partners />} />
          <Route path="careers" element={<Careers />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="deal-room" element={<DealRoom />} />
          <Route path="solutions/automation" element={<Automation />} />
          <Route path="solutions/ai-education" element={<AIEducation />} />
          <Route path="solutions/security" element={<Security />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
