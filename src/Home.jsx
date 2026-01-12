import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage.jsx"
import SkillPage from "./pages/SkillPage.jsx";
import EducationPage from "./pages/EducationPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CopyrightPage from "./pages/CopyrightPage.jsx"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";



function Home() {
  return (
  <>
    <main className="max-w-360 mx-auto font-inter overflow-hidden">
      <LandingPage />
      <AboutPage />
      <SkillPage />
      <EducationPage />
      {/* <ContactPage />
      <CopyrightPage /> */}
    </main>
      <ToastContainer />
  </>
  );
}

export default Home;
