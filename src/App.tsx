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
import BlogPost from "./pages/BlogPost";
import EGuides from "./pages/EGuides";
import EGuideView from "./pages/EGuideView";
import Playbooks from "./pages/Playbooks";
import PlaybookView from "./pages/PlaybookView";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./components/AdminLayout";
import Login from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import ManageTeam from "./pages/admin/ManageTeam";
import ManagePartners from "./pages/admin/ManagePartners";
import ManageBlog from "./pages/admin/ManageBlog";
import ManageCaseStudies from "./pages/admin/ManageCaseStudies";
import ManageEGuides from "./pages/admin/ManageEGuides";
import ManagePlaybooks from "./pages/admin/ManagePlaybooks";
import ManageMessages from "./pages/admin/ManageMessages";
import { DataProvider } from "./context/DataContext";

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>
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
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="eguides" element={<EGuides />} />
            <Route path="eguides/:id" element={<EGuideView />} />
            <Route path="playbooks" element={<Playbooks />} />
            <Route path="playbooks/:id" element={<PlaybookView />} />
          </Route>
          
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute />}>
            <Route element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="team" element={<ManageTeam />} />
              <Route path="partners" element={<ManagePartners />} />
              <Route path="blog" element={<ManageBlog />} />
              <Route path="case-studies" element={<ManageCaseStudies />} />
              <Route path="eguides" element={<ManageEGuides />} />
              <Route path="playbooks" element={<ManagePlaybooks />} />
              <Route path="messages" element={<ManageMessages />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </DataProvider>
    </AuthProvider>
  );
}
