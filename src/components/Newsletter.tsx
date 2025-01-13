import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  return (
    <div className="bg-gym-darker py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">NEWSLETTER</h2>
          <p className="text-gray-300">Promotions, articles, events and news.</p>
          <form className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="E-mail address"
              className="bg-transparent border-white text-white placeholder:text-gray-400 focus:ring-white"
            />
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-gym-dark transition-all duration-300"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;