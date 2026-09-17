import type { Screen } from '../App';
import BottomNav from '../components/BottomNav';
import { USER, SCHEDULES } from '../data/mockData';

type Props = { navigate: (s: Screen) => void };

const MENU_ITEMS = [
  { label: 'Edit Profile',       icon: '👤', action: 'edit' },
  { label: 'My Preferences',     icon: '⚙️',  action: 'settings' },
  { label: 'AI Preferences',     icon: '🤖', action: 'ai' },
  { label: 'Notifications',      icon: '🔔', action: 'notifications' },
  { label: 'Privacy Policy',     icon: '🔒', action: 'privacy' },
  { label: 'Help & Support',     icon: '💬', action: 'help' },
  { label: 'Language',           icon: '🌐', action: 'language' },
];

export default function ProfileScreen({ navigate }: Props) {
  const totalSchedules = SCHEDULES.length;
  const today = SCHEDULES.filter((s) => s.date === 'Tuesday, Oct 24, 2026').length;

  return (
    <div className="min-h-screen pb-24" style={{ background: '#F4F5FF' }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-6" style={{ background: 'linear-gradient(160deg,#1B1F4B 0%,#3D45C0 100%)' }}>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-white">Profile</h1>
          <button
            onClick={() => navigate('settings')}
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.15)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="white" strokeWidth="2"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="white" strokeWidth="1.5"/></svg>
          </button>
        </div>

        {/* Avatar + info */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl text-white" style={{ background: '#5B67FA' }}>
            {USER.initials}
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">{USER.name}</h2>
            <p className="text-white/60 text-sm">{USER.email}</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-5 -mt-3">
        <div className="bg-white rounded-2xl p-4 grid grid-cols-3 gap-2" style={{ boxShadow: '0 4px 20px rgba(91,103,250,0.08)' }}>
          {[
            { label: 'Total Events', value: totalSchedules },
            { label: 'Today', value: today },
            { label: 'AI Tips Used', value: 12 },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-xl font-bold" style={{ color: '#1B1F4B' }}>{s.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Menu */}
      <div className="px-5 mt-5">
        <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 12px rgba(91,103,250,0.06)' }}>
          {MENU_ITEMS.map((item, i) => (
            <button
              key={item.label}
              onClick={() => {
                if (item.action === 'settings') navigate('settings');
                if (item.action === 'notifications') navigate('notifications');
              }}
              className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-gray-50 transition-colors"
              style={{ borderBottom: i < MENU_ITEMS.length - 1 ? '1px solid #F4F5FF' : 'none' }}
            >
              <div className="flex items-center gap-3">
                <span className="text-base">{item.icon}</span>
                <span className="text-sm font-medium" style={{ color: '#1B1F4B' }}>{item.label}</span>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          ))}
        </div>

        {/* Sign out */}
        <button
          onClick={() => navigate('login')}
          className="w-full mt-4 py-3.5 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 border"
          style={{ borderColor: '#FEE2E2', color: '#EF4444', background: '#FFF5F5' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Sign Out
        </button>
      </div>

      <BottomNav current="profile" navigate={navigate} />
    </div>
  );
}
