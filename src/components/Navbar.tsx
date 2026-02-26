import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/nepphnu-logo.jpeg";

const servicesDropdown = [
  {
    heading: "Dynamic Testing",
    items: [
      { label: "Sine & Random Vibration Test", hash: "vibration" },
      { label: "Shock Test", hash: "shock" },
    ],
  },
  {
    heading: "Environmental Testing",
    items: [
      { label: "Low Temperature Test (up to -70°C)", hash: "low-temp" },
      { label: "High Temperature Test (up to +180°C)", hash: "high-temp" },
      { label: "Humidity Test (up to 98% RH)", hash: "humidity" },
      { label: "Thermal Cycling (10°C/min)", hash: "thermal-cycling" },
      { label: "Damp Heat Test", hash: "damp-heat" },
      { label: "Thermal Shock", hash: "thermal-shock" },
      { label: "Tropical Exposure", hash: "tropical-exposure" },
    ],
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const isHome = location.pathname === "/";
  const navBg = scrolled || !isHome
    ? "bg-primary shadow-lg"
    : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Nepphnu Technologies" className="h-10 w-10 rounded-md" />
            <span className="text-primary-foreground font-display font-bold text-lg md:text-xl tracking-wide">
              NEPPHNU TECHNOLOGIES PVT. LTD.
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="nav-link text-primary-foreground hover:text-blue-bright">Home</Link>
            <Link to="/about" className="nav-link text-primary-foreground hover:text-blue-bright">About</Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="nav-link text-primary-foreground hover:text-blue-bright flex items-center gap-1">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-card rounded-lg shadow-2xl border border-border overflow-hidden"
                  >
                    <div className="p-4">
                      {servicesDropdown.map((group) => (
                        <div key={group.heading} className="mb-4 last:mb-0">
                          <h4 className="font-display font-bold text-sm text-accent uppercase tracking-wider mb-2">
                            {group.heading}
                          </h4>
                          {group.items.map((item) => (
                            <Link
                              key={item.hash}
                              to={`/services#${item.hash}`}
                              className="block py-1.5 px-2 text-sm text-foreground hover:bg-muted rounded transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/industries" className="nav-link text-primary-foreground hover:text-blue-bright">Industries</Link>
            <Link to="/contact" className="nav-link text-primary-foreground hover:text-blue-bright">Contact</Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-primary overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              <Link to="/" className="block text-primary-foreground py-2">Home</Link>
              <Link to="/about" className="block text-primary-foreground py-2">About</Link>
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-primary-foreground py-2"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden pl-4"
                    >
                      {servicesDropdown.map((group) => (
                        <div key={group.heading} className="mb-3">
                          <h4 className="text-blue-bright text-xs font-bold uppercase tracking-wider mb-1">
                            {group.heading}
                          </h4>
                          {group.items.map((item) => (
                            <Link
                              key={item.hash}
                              to={`/services#${item.hash}`}
                              className="block text-primary-foreground/80 text-sm py-1"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link to="/industries" className="block text-primary-foreground py-2">Industries</Link>
              <Link to="/contact" className="block text-primary-foreground py-2">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
