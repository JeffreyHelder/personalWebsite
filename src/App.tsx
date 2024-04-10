import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import TemplateSection from "./sections/templateSection";

function App() {
  return (
    <div className="w-screen max-w-screen h-screen bg-gray-800">
      <Header />
      <main>
        <TemplateSection id="template-section"/>
      </main>
      <Footer />
    </div>
  );
}
 
export default App;
