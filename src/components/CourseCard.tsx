import { Button } from "./ui/button";

interface CourseCardProps {
  title: string;
  description: string;
  className?: string;
}

const CourseCard = ({ title, description, className = "" }: CourseCardProps) => {
  return (
    <div className={`p-6 ${className}`}>
      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gym-dark transition-colors duration-300">
        LEARN MORE
      </Button>
    </div>
  );
};

export default CourseCard;