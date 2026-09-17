import type { ReactElement } from 'react';
import type { Screen } from '../App';

type Props = {
  current: Screen;
  navigate: (s: Screen) => void;
};

const navItems: { screen: Screen; label: string; icon: ReactElement; activeIcon: ReactElement }[] = [
  {
    screen: 'home',
    label: 'Home',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    activeIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" fill="#5B67FA" stroke="#5B67FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    screen: 'schedules',
    label: 'Schedule',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="3" stroke="#9CA3AF" strokeWidth="1.8"/>
        <path d="M8 2V6M16 2V6M3 10H21" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M7 14H9M11 14H13M15 14H17M7 17H9M11 17H13" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    activeIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="3" fill="#5B67FA"/>
        <path d="M8 2V6M16 2V6M3 10H21" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M7 14H9M11 14H13M15 14H17M7 17H9M11 17H13" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    screen: 'add-event',
    label: 'Add',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#9CA3AF" strokeWidth="1.8"/>
        <path d="M12 8V16M8 12H16" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    activeIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="#5B67FA"/>
        <path d="M12 8V16M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    screen: 'notifications',
    label: 'Alerts',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    activeIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill="#5B67FA" stroke="#5B67FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    screen: 'profile',
    label: 'Profile',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#9CA3AF" strokeWidth="1.8"/>
        <path d="M4 20C4 17.2 7.58 15 12 15C16.42 15 20 17.2 20 20" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    activeIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" fill="#5B67FA" stroke="#5B67FA" strokeWidth="1.5"/>
        <path d="M4 20C4 17.2 7.58 15 12 15C16.42 15 20 17.2 20 20" stroke="#5B67FA" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function BottomNav({ current, navigate }: Props) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 flex items-center justify-around px-2 py-2 pb-3" style={{ boxShadow: '0 -4px 20px rgba(91,103,250,0.08)' }}>
      {navItems.map((item) => {
        const isActive = current === item.screen;
        return (
          <button
            key={item.screen}
            onClick={() => navigate(item.screen)}
            className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all"
          >
            {item.screen === 'add-event' ? (
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center -mt-6 shadow-lg" style={{ background: 'linear-gradient(135deg, #5B67FA 0%, #7C3AED 100%)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
            ) : (
              isActive ? item.activeIcon : item.icon
            )}
            {item.screen !== 'add-event' && (
              <span className="text-[10px] font-medium" style={{ color: isActive ? '#5B67FA' : '#9CA3AF' }}>
                {item.label}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}
