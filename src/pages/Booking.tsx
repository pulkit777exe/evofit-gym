import { Mail, MapPin, Clock, Phone} from "lucide-react";
 
export default function Booking() {
 
 return (
 <div className="py-24 px-4">
 <div className="max-w-6xl mx-auto">
   <div className="grid md:grid-cols-2 gap-24">
     <div>
       <h2 className="text-3xl font-light tracking-wider mb-12">GET IN TOUCH</h2>
       <form className="space-y-8">
         <div>
           <label className="block text-sm font-light mb-2">Name</label>
           <input
             type="text"
             className="w-full bg-transparent border border-white/20 p-3 focus:outline-none focus:border-white"
           />
         </div>
         <div>
           <label className="block text-sm font-light mb-2">Email</label>
           <input
             type="email"
             className="w-full bg-transparent border border-white/20 p-3 focus:outline-none focus:border-white"
           />
         </div>
         <div>
           <label className="block text-sm font-light mb-2">Message</label>
           <textarea
             rows={6}
             className="w-full bg-transparent border border-white/20 p-3 focus:outline-none focus:border-white"
           ></textarea>
         </div>
         <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider text-sm">
           SEND MESSAGE
         </button>
       </form>
     </div>
     <div>
       <h2 className="text-3xl font-light tracking-wider mb-12">INFORMATION</h2>
       <div className="space-y-12">
         <div>
           <div className="flex items-center gap-4 mb-4">
             <MapPin size={24} />
             <h3 className="text-xl font-light tracking-wider">LOCATION</h3>
           </div>
           <p className="text-gray-300 pl-10">
             123 Fitness Street<br />
             Montreal, QC H1A 1A1
           </p>
         </div>
         <div>
           <div className="flex items-center gap-4 mb-4">
             <Clock size={24} />
             <h3 className="text-xl font-light tracking-wider">HOURS</h3>
           </div>
           <div className="text-gray-300 pl-10">
             <p className="mb-2">Monday - Friday: 6:00 AM - 10:00 PM</p>
             <p className="mb-2">Saturday: 8:00 AM - 8:00 PM</p>
             <p>Sunday: 8:00 AM - 6:00 PM</p>
           </div>
         </div>
         <div>
           <div className="flex items-center gap-4 mb-4">
             <Phone size={24} />
             <h3 className="text-xl font-light tracking-wider">PHONE</h3>
           </div>
           <p className="text-gray-300 pl-10">+1 (514) 123-4567</p>
         </div>
         <div>
           <div className="flex items-center gap-4 mb-4">
             <Mail size={24} />
             <h3 className="text-xl font-light tracking-wider">EMAIL</h3>
           </div>
           <p className="text-gray-300 pl-10">info@fitnessstudio.com</p>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>
 )
}