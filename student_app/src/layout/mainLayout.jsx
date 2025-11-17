import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}