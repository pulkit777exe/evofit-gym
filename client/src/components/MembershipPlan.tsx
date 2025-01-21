import React from 'react';
import { Check } from 'lucide-react';

interface MembershipPlanProps {
  name: string;
  price: number;
  features: string[];
  icon: React.ReactNode;
}

function MembershipPlan({ name, price, features, icon }: MembershipPlanProps) {
  return (
    <div className="bg-[#ded8c3] p-8 rounded-lg border border-gym-dark hover:border-white transition-colors flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-2xl font-bold">{name}</h3>
      </div>
      <div className="mb-6">
        <span className="text-4xl font-bold">₹{price}</span>
        <span className="text-gray-500">/per head</span>
      </div>
      <ul className="space-y-4 flex-grow">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center gap-4">
            <Check className="w-5 h-5 text-amber-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full mt-8 bg-gym-darker border border-gym-darker text-gym-light py-3 rounded-full font-bold hover:bg-gym-accent hover:text-black transition-colors">
        Choose Plan
      </button>
    </div>
  );
}

export default MembershipPlan;
