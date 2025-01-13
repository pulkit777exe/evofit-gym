import NewsletterForm from './NewsletterForm';
import NewsletterBenefits from './NewsletterBenefits';

const Newsletter = () => {
  return (
    <section className="py-20 px-4 w-full bg-gym-dark text-gym-light">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Fitness Community</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and stay updated with the latest fitness tips,
          exclusive membership offers, and training schedules.
        </p>
        <div className="flex justify-center">
          <NewsletterForm />
        </div>
        <NewsletterBenefits />
      </div>
    </section>
  );
};

export default Newsletter;