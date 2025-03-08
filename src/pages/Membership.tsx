import { Crown, Dumbbell } from 'lucide-react';
import MembershipPlan from '../components/MembershipPlan';
import Navigation from '@/components/Navigation';

const plans = [
    {
      name: 'Monthly',
      price: 1500,
      features: ['Access to gym equipment', 'Locker room access', 'All premium access for full month'],
      icon: <Dumbbell className="w-6 h-6 text-amber-500" />
    },
    {
      name: 'Half-Yearly',
      price: 4800,
      features: ['All Basic features', 'Personal trainer consultation', 'Nutrition guidance'],
      icon: <Crown className="w-6 h-6 text-amber-500" />
    },
    {
      name: 'Yearly',
      price: 7200,
      features: ['All Premium features', 'Private training sessions'],
      icon: <Crown className="w-6 h-6 text-amber-500" />
    }
];

export default function Membership() {
    return (
      <div className='min-h-screen w-screen bg-gym-darker'>
        <div>
          <Navigation />
        </div>
        <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gym-light text-center mb-4">Membership Plans</h2>
          <p className="text-center text-gym-accent mb-12">Choose the perfect plan for your fitness journey</p>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <MembershipPlan key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>
      </div>
    )
}
