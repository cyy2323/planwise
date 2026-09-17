import { useState } from 'react';
import type { Screen } from '../App';
import BottomNav from '../components/BottomNav';
import { SCHEDULES, CATEGORY_COLORS } from '../data/mockData';

type Props = { navigate: (s: Screen) => void; setSelectedId: (id: string) => void };

const RECENT = ['Deep Work', 'Doctor', 'Morning Training', 'Grocery'];

export default function SearchScreen({ navigate, setSelectedId }: Props) {
  const [query, setQuery] = useState('');
  const results = query.length > 1
    ? SCHEDULES.filter((s) => s.title.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="min-h-screen pb-24" style={{ background: '#F4F5FF' }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-4 bg-white border-b" style={{ borderColor: '#E8EAFF' }}>
        <h1 className="text-xl font-bold mb-4" style={{ color: '#1B1F4B' }}>Search Schedule</h1>
        <div className="relative">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="absolute left-3.5 top-1/2 -translate-y-1/2">
            <path d="M21 21L16.65 16.65M19 11C19 15.42 15.42 19 11 19C6.58 19 3 15.42 3 11C3 6.58 6.58 3 11 3C15.42 3 19 6.58 19 11Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Try "Deep Work" or "Doctor"'
            className="w-full pl-10 pr-10 py-3 rounded-xl text-sm border outline-none"
            style={{ borderColor: '#5B67FA', background: 'white', color: '#1B1F4B' }}
          />
          {query && (
            <button onClick={() => setQuery('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          )}
        </div>
      </div>

      <div className="px-5 mt-4">
        {query.length === 0 ? (
          <>
            {/* Recent searches */}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Recent Searches</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {RECENT.map((r) => (
                <button
                  key={r}
                  onClick={() => setQuery(r)}
                  className="px-4 py-2 rounded-full text-xs font-medium bg-white border flex items-center gap-1.5"
                  style={{ borderColor: '#E8EAFF', color: '#6B7280' }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  {r}
                </button>
              ))}
            </div>

            {/* Categories */}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Browse by Category</p>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { cat: 'Work',     emoji: '💼', color: '#EFF6FF', text: '#2563EB' },
                { cat: 'Health',   emoji: '🏃', color: '#F0FDF4', text: '#16A34A' },
                { cat: 'Personal', emoji: '📚', color: '#F5F3FF', text: '#7C3AED' },
                { cat: 'Social',   emoji: '☕',  color: '#FFF7ED', text: '#C2410C' },
                { cat: 'Errand',   emoji: '🛒', color: '#FEFCE8', text: '#A16207' },
                { cat: 'All',      emoji: '✨', color: '#EEF0FF', text: '#5B67FA' },
              ].map(({ cat, emoji, color, text }) => (
                <button
                  key={cat}
                  onClick={() => setQuery(cat === 'All' ? '' : cat)}
                  className="rounded-2xl p-3.5 flex items-center gap-2.5 text-left"
                  style={{ background: color }}
                >
                  <span className="text-xl">{emoji}</span>
                  <span className="text-sm font-semibold" style={{ color }}>{cat}</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="text-xs font-semibold text-gray-400 mb-3">
              {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
            </p>
            <div className="flex flex-col gap-2.5">
              {results.length === 0 ? (
                <div className="flex flex-col items-center py-16 text-gray-400">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mb-3 opacity-30"><path d="M21 21L16.65 16.65M19 11C19 15.42 15.42 19 11 19C6.58 19 3 15.42 3 11C3 6.58 6.58 3 11 3C15.42 3 19 6.58 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  <p className="text-sm font-medium">No results found</p>
                  <p className="text-xs mt-1">Try a different keyword</p>
                </div>
              ) : results.map((item) => {
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
                      <p className="font-semibold text-sm" style={{ color: '#1B1F4B' }}>{item.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.date} · {item.startTime}</p>
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize flex-shrink-0 ${colors.bg} ${colors.text}`}>
                      {item.category}
                    </span>
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      <BottomNav current="schedules" navigate={navigate} />
    </div>
  );
}
