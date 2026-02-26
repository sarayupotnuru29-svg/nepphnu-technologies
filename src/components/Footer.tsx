// import { Link } from "react-router-dom";
// import { Linkedin } from "lucide-react";
// import logo from "@/assets/nepphnu-logo.jpeg";

// const Footer = () => {
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <footer className="gradient-navy text-primary-foreground">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Company */}
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               <img src={logo} alt="Nepphnu" className="h-10 w-10 rounded-md" />
//               <span className="font-display font-bold text-lg">NEPPHNU TECHNOLOGIES</span>
//             </div>
//             <p className="text-primary-foreground/70 text-sm leading-relaxed">
//               Precision-engineered environmental & reliability testing solutions for defence, aerospace, and industrial applications.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-sm">
//               {[
//                 { to: "/", label: "Home" },
//                 { to: "/about", label: "About Us" },
//                 { to: "/services", label: "Services" },
//                 { to: "/industries", label: "Industries" },
//                 { to: "/contact", label: "Contact" },
//               ].map((link) => (
//                 <li key={link.to}>
//                   <Link to={link.to} onClick={scrollToTop} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="font-display font-bold text-lg mb-4">Services</h4>
//             <ul className="space-y-2 text-sm">
//               {[
//                 "Vibration Testing",
//                 "Shock Testing",
//                 "Temperature Testing",
//                 "Humidity Testing",
//                 "Thermal Cycling",
//                 "Thermal Shock",
//               ].map((s) => (
//                 <li key={s}>
//                   <Link to="/services" onClick={scrollToTop} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
//                     {s}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-display font-bold text-lg mb-4">Contact Info</h4>
//             <ul className="space-y-3 text-sm text-primary-foreground/70">
//               <li>📞 +91 9133316688</li>
//               <li>✉️ nepphnutechnologiespvtltd@gmail.com</li>
//               <li>
//                 📍 Flat No. 201, Sai Bhargavi Residency,<br />
//                 Srinivas Colony East, Ameerpet,<br />
//                 Hyderabad – 500038
//               </li>
//               <li>
//                 <a
//                   href="https://www.linkedin.com/company/nepphnutechnologiespvtltd/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 text-primary-foreground hover:text-blue-bright transition-colors"
//                 >
//                   <Linkedin className="w-5 h-5" /> LinkedIn
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm text-primary-foreground/50">
//           © {new Date().getFullYear()} Nepphnu Technologies Pvt. Ltd. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






import { Link } from "react-router-dom";
import { Linkedin, Heart } from "lucide-react";
import logo from "@/assets/nepphnu-logo.jpeg";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Nepphnu" className="h-10 w-10 rounded-md" />
              <span className="font-display font-bold text-lg">NEPPHNU TECHNOLOGIES</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Precision-engineered environmental & reliability testing solutions for defence, aerospace, and industrial applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/industries", label: "Industries" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} onClick={scrollToTop} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Vibration Testing",
                "Shock Testing",
                "Temperature Testing",
                "Humidity Testing",
                "Thermal Cycling",
                "Thermal Shock",
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" onClick={scrollToTop} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>📞 +91 9133316688</li>
              <li>✉️ nepphnutechnologiespvtltd@gmail.com</li>
              <li>
                📍 Flat No. 201, Sai Bhargavi Residency,<br />
                Srinivas Colony East, Ameerpet,<br />
                Hyderabad – 500038
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/nepphnutechnologiespvtltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-foreground hover:text-blue-bright transition-colors"
                >
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col items-center gap-3 text-sm text-primary-foreground/50">
          <div>
            © {new Date().getFullYear()} Nepphnu Technologies Pvt. Ltd. All rights reserved.
          </div>
          
          <div className="flex justify-center items-center gap-1">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 hover:underline font-medium"
            >
              <img
                src="/staffarclogo.jpg"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;