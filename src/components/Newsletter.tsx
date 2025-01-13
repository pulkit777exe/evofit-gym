import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  return (
    <div className="bg-gym-darker py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">NEWSLETTER</h2>
          <p className="text-gray-300 mb-8">Promotions, articles, events and news.</p>
          <form className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="E-mail address"
              className="bg-transparent border-white text-white placeholder:text-gray-400"
            />
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gym-dark">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;