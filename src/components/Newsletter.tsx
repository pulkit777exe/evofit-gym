import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  return (
    <div className="bg-gym-darker py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gym-light">NEWSLETTER</h2>
          <p className="text-gym-accent">Promotions, articles, events and news.</p>
          <form className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="E-mail address"
              className="bg-transparent border-gym-light text-gym-light placeholder:text-gym-accent focus:ring-gym-light"
            />
            <Button 
              variant="outline" 
              className="text-gym-light border-gym-light hover:bg-gym-light hover:text-gym-dark transition-all duration-300"
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