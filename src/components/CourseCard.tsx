import { useState } from "react";
import { Button } from "./ui/button";

interface CourseCardProps {
  title: string;
  description: string;
  className?: string;
  content: string;
}

const CourseCard = ({ title, description, className = "", content }: CourseCardProps) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const learnMoreClickHandler = () => {
    setIsContentVisible((prev) => !prev); 
  };

  return (
    <div className={`p-8 space-y-6 ${className}`}>
      <h3 className="text-2xl font-semibold text-gym-light">{title}</h3>
      <p className="text-gym-accent leading-relaxed">{description}</p>
      <Button
        onClick={learnMoreClickHandler} // Reference to the function instead of calling it immediately
        variant="outline"
        className="text-gym-dark border-gym-light hover:bg-gym-light hover:text-gym-dark transition-all duration-300"
      >
        LEARN MORE
      </Button>

      {isContentVisible && (
        <div className="mt-4 p-4 bg-gym-darker text-gym-light rounded-md">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
