import { createBrowserRouter, RouterProvider } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import SocialMediaManagement from './components/SocialMediaManagement';
import CampaignManagement from './components/CampaignManagement';
import DataDrivenPolicies from './components/DataDrivenPolicies';
import VolunteerPlatforms from './components/VolunteerPlatforms';
import DoorToDoorCampaigns from './components/DoorToDoorCampaigns';
import SoftwareSolutions from './components/SoftwareSolutions';
import Join from './pages/Join';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ScrollToTop from './components/ScrollToTop'; 
import ScheduleConsultation from "./pages/ScheduleConsultation";
import Reviews from "./pages/Reviews";
import { ProtectedRoute } from "./pages/ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />  
        <Home />
      </>
    ),
  },
  {
    path: '/services/social-media-management',
    element: (
      <>
        <ScrollToTop />
        <SocialMediaManagement />
      </>
    ),
  },
  {
    path: '/services/campaign-management',
    element: (
      <>
        <ScrollToTop />
        <CampaignManagement />
      </>
    ),
  },
  {
    path: '/services/data-driven-policies',
    element: (
      <>
        <ScrollToTop />
        <DataDrivenPolicies />
      </>
    ),
  },
  {
    path: '/services/volunteer-platforms',
    element: (
      <>
        <ScrollToTop />
        <VolunteerPlatforms />
      </>
    ),
  },
  {
    path: '/services/door-to-door-campaigns',
    element: (
      <>
        <ScrollToTop />
        <DoorToDoorCampaigns />
      </>
    ),
  },
  {
    path: '/services/software-services',
    element: (
      <>
        <ScrollToTop />
        <SoftwareSolutions />
      </>
    ),
  },
  {
    path: '/join',
    element: (
      <>
        <ScrollToTop />
        <Join />
      </>
    ),
  },
  {
    path: '/adminLogin',
    element: (
      <>
        <ScrollToTop />
        <AdminLogin />
      </>
    ),
  },
  {
    path: '/admin-dashboard',
    element: (
      <>
        <ScrollToTop />
        <ProtectedRoute><AdminDashboard /></ProtectedRoute>
      </>
    ),
  },
  {
    path:'/schedule-a-consultation',
    element:<ScheduleConsultation/>
  },
  {
    path:'/reviews',
    element:<Reviews/>
  }
]);

const App = () => {
  return (
    <div className="min-h-screen">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
};

export default App;
