/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./components/AdminLayout";
import { DataProvider } from "./context/DataContext";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Advantage = lazy(() => import("./pages/Advantage"));
const Partners = lazy(() => import("./pages/Partners"));
const Careers = lazy(() => import("./pages/Careers"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Industries = lazy(() => import("./pages/Industries"));
const DealRoom = lazy(() => import("./pages/DealRoom"));
const Contact = lazy(() => import("./pages/Contact"));
const Automation = lazy(() => import("./pages/solutions/Automation"));
const AIEducation = lazy(() => import("./pages/solutions/AIEducation"));
const Security = lazy(() => import("./pages/solutions/Security"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const PaymentHub = lazy(() => import("./pages/PaymentHub"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const EGuides = lazy(() => import("./pages/EGuides"));
const EGuideView = lazy(() => import("./pages/EGuideView"));
const Playbooks = lazy(() => import("./pages/Playbooks"));
const PlaybookView = lazy(() => import("./pages/PlaybookView"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy-loaded admin pages
const Login = lazy(() => import("./pages/admin/Login"));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const ManageTeam = lazy(() => import("./pages/admin/ManageTeam"));
const ManagePartners = lazy(() => import("./pages/admin/ManagePartners"));
const ManageBlog = lazy(() => import("./pages/admin/ManageBlog"));
const ManageCaseStudies = lazy(() => import("./pages/admin/ManageCaseStudies"));
const ManageEGuides = lazy(() => import("./pages/admin/ManageEGuides"));
const ManagePlaybooks = lazy(() => import("./pages/admin/ManagePlaybooks"));
const ManageMessages = lazy(() => import("./pages/admin/ManageMessages"));

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
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
                <Route path="contact" element={<Contact />} />
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
                <Route path="*" element={<NotFound />} />
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
          </Suspense>
        </BrowserRouter>
      </DataProvider>
    </AuthProvider>
  );
}
