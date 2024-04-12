import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import GoalsSection from "./sections/Goals";
import AboutSection from "./sections/About";
import ContactSection from "./sections/Contact";
import HeroSection from "./sections/Hero";
import WorkSection from "./sections/Works";

function App() {
  return (
    <div className="w-full max-w-screen bg-gray-800 min-h-screen">
      <Header />
      <main className="h-full md:px-10 px-4">
        <HeroSection id="hero"/>
        <GoalsSection id="goals" /> 
        <WorkSection id="portfolio"/>
        <AboutSection id="about" /> 
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
}
 
export default App;
