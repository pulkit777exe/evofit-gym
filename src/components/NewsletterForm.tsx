import React, { useState } from 'react';
import { Send } from 'lucide-react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setEmail('');
    // In production, you would send this to your API
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:border-gym-light"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gym-light text-gym-dark rounded-lg font-semibold hover:bg-gym-accent transition-colors flex items-center gap-2"
        >
          Subscribe <Send className="w-4 h-4" />
        </button>
      </div>
      {status === 'success' && (
        <p className="mt-2 text-green-500">Thanks for subscribing!</p>
      )}
    </form>
  );
};

export default NewsletterForm;