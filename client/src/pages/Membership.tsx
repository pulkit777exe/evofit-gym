import { Crown, Dumbbell } from 'lucide-react';
import MembershipPlan from '../components/MembershipPlan';
import Navigation from '@/components/Navigation';

const plans = [
    {
      name: 'Basic',
      price: 29.99,
      features: ['Access to gym equipment', '2 group classes/month', 'Locker room access'],
      icon: <Dumbbell className="w-6 h-6 text-amber-500" />
    },
    {
      name: 'Premium',
      price: 59.99,
      features: ['All Basic features', 'Unlimited group classes', 'Personal trainer consultation', 'Nutrition guidance'],
      icon: <Crown className="w-6 h-6 text-amber-500" />
    },
    {
      name: 'Elite',
      price: 99.99,
      features: ['All Premium features', '24/7 gym access', 'Private training sessions', 'Spa access', 'Recovery room'],
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
