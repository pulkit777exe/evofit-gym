import { Bell, Calendar, Dumbbell } from 'lucide-react';

const benefits = [
  {
    icon: <Bell className="w-5 h-5 text-gym-light" />,
    text: 'Exclusive offers and promotions'
  },
  {
    icon: <Calendar className="w-5 h-5 text-gym-light" />,
    text: 'Weekly workout schedules'
  },
  {
    icon: <Dumbbell className="w-5 h-5 text-gym-light" />,
    text: 'Fitness tips and nutrition advice'
  }
];

const NewsletterBenefits = () => {
  return (
    <div className="flex flex-wrap gap-6 mt-8 justify-center">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-center gap-2">
          {benefit.icon}
          <span className="text-gray-400">{benefit.text}</span>
        </div>
      ))}
    </div>
  );
};

export default NewsletterBenefits;