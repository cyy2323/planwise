import { useState } from 'react';
import type { Screen } from '../App';

type Props = { navigate: (s: Screen) => void };

type ToggleSetting = { label: string; sub: string; key: string };

const GROUPS: { title: string; items: ToggleSetting[] }[] = [
  {
    title: 'Notifications',
    items: [
      { label: 'Push Notifications', sub: 'Receive alerts on your device', key: 'push' },
      { label: 'In-App Suggestions', sub: 'AI-powered tips while using the app', key: 'inapp' },
      { label: 'Email Digests', sub: 'Weekly summary to your email', key: 'email' },
    ],
  },
  {
    title: 'AI & Scheduling',
    items: [
      { label: 'AI Optimization', sub: 'Let AI automatically reschedule events', key: 'ai_opt' },
      { label: 'Smart Reminders', sub: 'Context-aware event reminders', key: 'smart' },
      { label: 'Theme Dark Mode', sub: 'Switch to dark appearance', key: 'dark' },
    ],
  },
  {
    title: 'Privacy',
    items: [
      { label: 'Data Analytics', sub: 'Help improve PlanWise with usage data', key: 'analytics' },
      { label: 'Personalization', sub: 'Use your data for better recommendations', key: 'personal' },
    ],
  },
];

export default function SettingsScreen({ navigate }: Props) {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    push: true, inapp: true, email: false,
    ai_opt: true, smart: true, dark: false,
    analytics: true, personal: true,
  });

  const toggle = (k: string) => setToggles((t) => ({ ...t, [k]: !t[k] }));

  return (
    <div className="min-h-screen" style={{ background: '#F4F5FF' }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-4 bg-white border-b" style={{ borderColor: '#E8EAFF' }}>
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('profile')} className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#F4F5FF' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#1B1F4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <h1 className="text-xl font-bold" style={{ color: '#1B1F4B' }}>Settings</h1>
        </div>
      </div>

      <div className="px-5 py-5 flex flex-col gap-5 max-w-lg mx-auto pb-10">
        {GROUPS.map((group) => (
          <div key={group.title}>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{group.title}</p>
            <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 12px rgba(91,103,250,0.06)' }}>
              {group.items.map((item, i) => (
                <div
                  key={item.key}
                  className="flex items-center justify-between px-4 py-3.5"
                  style={{ borderBottom: i < group.items.length - 1 ? '1px solid #F4F5FF' : 'none' }}
                >
                  <div>
                    <p className="text-sm font-medium" style={{ color: '#1B1F4B' }}>{item.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                  </div>
                  <button
                    onClick={() => toggle(item.key)}
                    className="relative w-11 h-6 rounded-full transition-colors flex-shrink-0"
                    style={{ background: toggles[item.key] ? '#5B67FA' : '#E5E7EB' }}
                  >
                    <div
                      className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all"
                      style={{ left: toggles[item.key] ? '22px' : '2px' }}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Version */}
        <p className="text-center text-xs text-gray-400 pb-6">PlanWise v2.4.1 · Made with AI ✨</p>
      </div>
    </div>
  );
}
