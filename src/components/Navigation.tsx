import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "HOME", navigateTo: "/home" },
    { name: "TRAINERS", navigateTo: "/trainers" },
    { name: "MEMBERSHIP", navigateTo: "/membership-plans" },
    { name: "CONTACT US", navigateTo: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gym-dark/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-gym-light text-2xl font-bold">EvoFit</span>
          </div>
          
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gym-accent hover:text-gym-light"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <div className="hidden lg:flex lg:items-center lg:space-x-6 cursor-pointer">
            {menuItems.map((item) => (
              <a
                key={item.name}
                className="text-gym-accent hover:text-gym-light text-sm transition-colors duration-200 hover:bg-gym-light/10 px-3 py-2 rounded-md"
                onClick={() => navigate(item.navigateTo)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-gym-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                className="text-gym-accent hover:text-gym-light block px-3 py-2 text-base transition-colors duration-200 hover:bg-gym-light/10 rounded-md"
                onClick={() => {
                  setIsOpen(false);
                  navigate(item.navigateTo);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;