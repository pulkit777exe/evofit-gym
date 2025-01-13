import { Button } from "./ui/button";

interface CourseCardProps {
  title: string;
  description: string;
  className?: string;
}

const CourseCard = ({ title, description, className = "" }: CourseCardProps) => {
  return (
    <div className={`p-8 space-y-6 ${className}`}>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
      <Button 
        variant="outline" 
        className="text-white border-white hover:bg-white hover:text-gym-dark transition-all duration-300"
      >
        LEARN MORE
      </Button>
    </div>
  );
};

export default CourseCard;