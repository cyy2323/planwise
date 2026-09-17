import { useState } from 'react';
import type { Screen } from '../App';

type Props = { navigate: (s: Screen) => void };

export default function RegisterScreen({ navigate }: Props) {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const fields: { key: keyof typeof form; label: string; type: string; placeholder: string }[] = [
    { key: 'name',     label: 'Full Name',        type: 'text',     placeholder: 'Bernice Grace' },
    { key: 'email',    label: 'Email Address',     type: 'email',    placeholder: 'bernicegrace@email.com' },
    { key: 'password', label: 'Password',          type: 'password', placeholder: '••••••••' },
    { key: 'confirm',  label: 'Confirm Password',  type: 'password', placeholder: '••••••••' },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6" style={{ background: '#F4F5FF' }}>
      <div className="w-full max-w-sm">
        <button onClick={() => navigate('login')} className="flex items-center gap-2 text-sm text-gray-500 mb-8 hover:text-gray-700">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back
        </button>

        <h1 className="text-2xl font-bold mb-1" style={{ color: '#1B1F4B' }}>Create Account</h1>
        <p className="text-sm text-gray-500 mb-8">Join PlanWise and start planning smarter.</p>

        <div className="flex flex-col gap-4">
          {fields.map(({ key, label, type, placeholder }) => (
            <div key={key}>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">{label}</label>
              <input
                type={type}
                placeholder={placeholder}
                value={form[key]}
                onChange={update(key)}
                className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                style={{ borderColor: '#E8EAFF', background: 'white', color: '#1B1F4B' }}
                onFocus={(e) => (e.target.style.borderColor = '#5B67FA')}
                onBlur={(e) => (e.target.style.borderColor = '#E8EAFF')}
              />
            </div>
          ))}

          <button
            onClick={() => navigate('home')}
            className="w-full py-3.5 rounded-xl text-white font-semibold text-sm mt-2 transition-all active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg, #5B67FA 0%, #7C3AED 100%)', boxShadow: '0 4px 15px rgba(91,103,250,0.35)' }}
          >
            Register Now
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Already have an account?{' '}
          <button onClick={() => navigate('login')} className="font-semibold" style={{ color: '#5B67FA' }}>
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}
