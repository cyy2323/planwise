import { useState } from 'react';
import type { ReactElement } from 'react';
import type { Screen } from '../App';
import BottomNav from '../components/BottomNav';
import { NOTIFICATIONS } from '../data/mockData';

type Props = { navigate: (s: Screen) => void };

const TYPE_ICONS: Record<string, ReactElement> = {
  ai: (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#7C3AED,#5B67FA)' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L13.09 8.26L19 6L15.74 11.09L22 12L15.74 12.91L19 18L13.09 15.74L12 22L10.91 15.74L5 18L8.26 12.91L2 12L8.26 11.09L5 6L10.91 8.26L12 2Z" fill="white"/></svg>
    </div>
  ),
  reminder: (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#EEF0FF' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill="#5B67FA"/></svg>
    </div>
  ),
  update: (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#F0FDF4' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/><polyline points="22 4 12 14.01 9 11.01" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
  ),
};

export default function NotificationsScreen({ navigate }: Props) {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const markAllRead = () => setNotifications((n) => n.map((i) => ({ ...i, read: true })));
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen pb-24" style={{ background: '#F4F5FF' }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-4 bg-white border-b" style={{ borderColor: '#E8EAFF' }}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold" style={{ color: '#1B1F4B' }}>Notifications</h1>
            {unreadCount > 0 && (
              <p className="text-xs text-gray-400 mt-0.5">{unreadCount} unread</p>
            )}
          </div>
          {unreadCount > 0 && (
            <button onClick={markAllRead} className="text-xs font-semibold" style={{ color: '#5B67FA' }}>
              Mark all read
            </button>
          )}
        </div>
      </div>

      <div className="px-5 mt-4 flex flex-col gap-2">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="bg-white rounded-2xl p-4 flex items-start gap-3 relative"
            style={{ boxShadow: '0 2px 12px rgba(91,103,250,0.06)', opacity: notif.read ? 0.75 : 1 }}
          >
            {TYPE_ICONS[notif.type]}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold" style={{ color: '#1B1F4B' }}>{notif.title}</p>
                <span className="text-[10px] text-gray-400 flex-shrink-0 mt-0.5">{notif.time}</span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{notif.message}</p>
            </div>
            {!notif.read && (
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full" style={{ background: '#5B67FA' }} />
            )}
          </div>
        ))}
      </div>

      <BottomNav current="notifications" navigate={navigate} />
    </div>
  );
}
