// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { MessageCircle } from "lucide-react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Industries from "./pages/Industries";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => {
//   const whatsappNumber = "919133316688";
//   const defaultMessage = encodeURIComponent("Hello! I'd like to inquire about your testing services.");

//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <ScrollToTop />
//           <Navbar />
//           <main className="relative">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/services" element={<Services />} />
//               <Route path="/industries" element={<Industries />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>

//             {/* Floating WhatsApp Button */}
//             <a
//               href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce md:animate-none group"
//               aria-label="Contact on WhatsApp"
//             >
//               <MessageCircle className="w-7 h-7 fill-current" />
              
//               {/* Tooltip on Hover */}
//               <span className="absolute right-16 bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-border">
//                 Chat with us
//               </span>
              
//               {/* Pulse effect ring */}
//               <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></span>
//             </a>
//           </main>
//           <Footer />
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;





import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Phone } from "lucide-react"; // Alternative icon if your lucide version is older, but most support direct SVG
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Simple SVG Component for the authentic WhatsApp logo
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const App = () => {
  const whatsappNumber = "919133316688";
  const defaultMessage = encodeURIComponent("Hello! I'd like to inquire about your testing services.");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <main className="relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

            {/* Updated Floating WhatsApp Button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
              aria-label="Contact on WhatsApp"
            >
              {/* Actual WhatsApp Icon */}
              <WhatsAppIcon className="w-8 h-8" />
              
              {/* Tooltip on Hover */}
              <span className="absolute right-16 bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-border">
                Chat with us
              </span>
              
              {/* Soft Pulse effect (Slowed down and simplified) */}
              <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-30 pointer-events-none"></span>
            </a>
          </main>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;