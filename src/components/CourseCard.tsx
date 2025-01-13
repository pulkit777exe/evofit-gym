import { Button } from "./ui/button";

interface CourseCardProps {
  title: string;
  description: string;
  className?: string;
}

const CourseCard = ({ title, description, className = "" }: CourseCardProps) => {
  return (
    <div className={`p-8 space-y-6 ${className}`}>
      <h3 className="text-2xl font-semibold text-gym-light">{title}</h3>
      <p className="text-gym-accent leading-relaxed">{description}</p>
      <Button 
        variant="outline" 
        className="text-gym-light border-gym-light hover:bg-gym-light hover:text-gym-dark transition-all duration-300"
      >
        LEARN MORE
      </Button>
    </div>
  );
};

export default CourseCard;