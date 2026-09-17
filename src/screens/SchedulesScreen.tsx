import { useState } from 'react';
import type { Screen } from '../App';
import BottomNav from '../components/BottomNav';
import { SCHEDULES, CATEGORY_COLORS } from '../data/mockData';

type Props = { navigate: (s: Screen) => void; setSelectedId: (id: string) => void };
type Tab = 'All' | 'Today' | 'Upcoming' | 'Past';

const TABS: Tab[] = ['All', 'Today', 'Upcoming', 'Past'];

const TAB_DATES: Record<Tab, string | null> = {
  All: null,
  Today: 'Tuesday, Oct 24, 2026',
  Upcoming: 'Wednesday, Oct 25, 2026',
  Past: '__past__',
};

export default function SchedulesScreen({ navigate, setSelectedId }: Props) {
  const [tab, setTab] = useState<Tab>('All');
  const [search, setSearch] = useState('');

  const filtered = SCHEDULES.filter((s) => {
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase());
    if (tab === 'All') return matchSearch;
    if (tab === 'Today') return s.date === TAB_DATES.Today && matchSearch;
    if (tab === 'Upcoming') return s.date !== 'Tuesday, Oct 24, 2026' && matchSearch;
    return false;
  });

  // Group by date
  const grouped = filtered.reduce<Record<string, typeof SCHEDULES>>((acc, s) => {
    if (!acc[s.date]) acc[s.date] = [];
    acc[s.date].push(s);
    return acc;
  }, {});

  return (
    <div className="min-h-screen pb-24" style={{ background: '#F4F5FF' }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-4 bg-white border-b" style={{ borderColor: '#E8EAFF' }}>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold" style={{ color: '#1B1F4B' }}>All Schedules</h1>
          <button
            onClick={() => navigate('add-event')}
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: '#5B67FA' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="absolute left-3.5 top-1/2 -translate-y-1/2">
            <path d="M21 21L16.65 16.65M19 11C19 15.42 15.42 19 11 19C6.58 19 3 15.42 3 11C3 6.58 6.58 3 11 3C15.42 3 19 6.58 19 11Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search schedules..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border outline-none"
            style={{ borderColor: '#E8EAFF', background: '#F4F5FF', color: '#1B1F4B' }}
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
              style={
                tab === t
                  ? { background: '#5B67FA', color: 'white' }
                  : { background: '#F4F5FF', color: '#6B7280' }
              }
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="px-5 mt-4 flex flex-col gap-5">
        {Object.entries(grouped).map(([date, items]) => (
          <div key={date}>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{date}</p>
            <div className="flex flex-col gap-2.5">
              {items.map((item) => {
                const colors = CATEGORY_COLORS[item.category];
                return (
                  <button
                    key={item.id}
                    onClick={() => { setSelectedId(item.id); navigate('schedule-detail'); }}
                    className="w-full bg-white rounded-2xl p-4 flex items-start gap-3 text-left"
                    style={{ boxShadow: '0 2px 12px rgba(91,103,250,0.06)' }}
                  >
                    <div className={`w-1 rounded-full self-stretch ${colors.dot}`} style={{ minWidth: '4px' }} />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold text-sm" style={{ color: '#1B1F4B' }}>{item.title}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{item.startTime} – {item.endTime}</p>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize flex-shrink-0 ${colors.bg} ${colors.text}`}>
                          {item.category}
                        </span>
                      </div>
                      {item.location && (
                        <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#9CA3AF"/></svg>
                          {item.location}
                        </p>
                      )}
                      {item.aiRecommended && (
                        <div className="flex items-center gap-1 mt-1.5">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 2L13.09 8.26L19 6L15.74 11.09L22 12L15.74 12.91L19 18L13.09 15.74L12 22L10.91 15.74L5 18L8.26 12.91L2 12L8.26 11.09L5 6L10.91 8.26L12 2Z" fill="#7C3AED"/></svg>
                          <span className="text-[10px] font-medium" style={{ color: '#7C3AED' }}>AI Recommended</span>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center py-16 text-gray-400">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mb-3 opacity-30"><rect x="3" y="4" width="18" height="17" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M3 9H21M8 2V6M16 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <p className="text-sm font-medium">No schedules found</p>
          </div>
        )}
      </div>

      <BottomNav current="schedules" navigate={navigate} />
    </div>
  );
}
