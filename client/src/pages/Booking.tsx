import Navigation from "@/components/Navigation";
import { Mail, MapPin, Clock, Phone } from "lucide-react";

export default function Booking() {
  return (
    <div className="w-screen">
      <Navigation />

      <div id="contact" className="bg-gym-dark text-gym-light min-h-screen py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h1 className="text-3xl font-bold tracking-wider mb-12">GET IN TOUCH</h1>
              <div className="flex items-center gap-4 mb-4">
                <Phone size={24} />
                <h3 className="text-xl font-bold tracking-wider">PHONE</h3>
              </div>
              <p className="text-gray-300 pl-10 pb-10">
                +91 9350856435 <br />
                +91 8287954863 <br />
                +91 9540396782
              </p>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <Mail size={24} />
                    <h3 className="text-xl font-bold tracking-wider">EMAIL</h3>
                  </div>
                  <p className="text-gray-300 pl-10">info@evofitgym.com</p>
                </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-wider mb-12">INFORMATION</h2>
              <div className="space-y-12">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <MapPin size={24} />
                    <h3 className="text-xl font-bold tracking-wider">LOCATION</h3>
                  </div>
                  <p className="text-gray-300 pl-10">
                    Gurbaksha Plaza
                    <br />
                    2nd Floor, Jagat Farm
                    <br />
                    Greater Noida, Uttar Pradesh
                    <br />
                    201310
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <Clock size={24} />
                    <h3 className="text-xl font-bold tracking-wider">HOURS</h3>
                  </div>
                  <div className="text-gray-300 pl-10">
                    <p className="mb-2">Monday - Friday: 6:00 AM - 10:00 PM</p>
                    <p className="mb-2">Saturday: 8:00 AM - 8:00 PM</p>
                    <p>Sunday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
