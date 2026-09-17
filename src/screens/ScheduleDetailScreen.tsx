import type { Screen } from '../App';
import { SCHEDULES, CATEGORY_COLORS } from '../data/mockData';

type Props = { navigate: (s: Screen) => void; selectedId: string };

export default function ScheduleDetailScreen({ navigate, selectedId }: Props) {
  const item = SCHEDULES.find((s) => s.id === selectedId) ?? SCHEDULES[1];
  const colors = CATEGORY_COLORS[item.category];

  return (
    <div className="min-h-screen" style={{ background: '#F4F5FF' }}>
      {/* Header with gradient */}
      <div className="px-5 pt-12 pb-8" style={{ background: 'linear-gradient(160deg, #1B1F4B 0%, #3D45C0 100%)' }}>
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('schedules')}
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.15)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <h2 className="text-base font-semibold text-white">Schedule Detail</h2>
          <button className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>

        <div>
          <span className={`text-[10px] font-semibold px-3 py-1 rounded-full capitalize ${colors.bg} ${colors.text}`}>
            {item.category}
          </span>
          <h1 className="text-2xl font-bold text-white mt-3 mb-1">{item.title}</h1>
          <p className="text-white/60 text-sm">{item.date}</p>
        </div>
      </div>

      {/* Detail card */}
      <div className="px-5 -mt-4">
        <div className="bg-white rounded-3xl p-5" style={{ boxShadow: '0 4px 20px rgba(91,103,250,0.1)' }}>
          {/* Time */}
          <div className="flex items-center gap-3 py-3 border-b" style={{ borderColor: '#F4F5FF' }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#EEF0FF' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#5B67FA" strokeWidth="2"/><path d="M12 7V12L15 15" stroke="#5B67FA" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Time</p>
              <p className="text-sm font-semibold" style={{ color: '#1B1F4B' }}>{item.startTime} – {item.endTime}</p>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-3 py-3 border-b" style={{ borderColor: '#F4F5FF' }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#EEF0FF' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="17" rx="3" stroke="#5B67FA" strokeWidth="2"/><path d="M3 9H21M8 2V6M16 2V6" stroke="#5B67FA" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Date</p>
              <p className="text-sm font-semibold" style={{ color: '#1B1F4B' }}>{item.date}</p>
            </div>
          </div>

          {/* Location */}
          {item.location && (
            <div className="flex items-center gap-3 py-3 border-b" style={{ borderColor: '#F4F5FF' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#EEF0FF' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#5B67FA"/></svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Location</p>
                <p className="text-sm font-semibold" style={{ color: '#1B1F4B' }}>{item.location}</p>
              </div>
            </div>
          )}

          {/* Description */}
          {item.description && (
            <div className="py-3">
              <p className="text-xs text-gray-400 font-medium mb-1.5">Description</p>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          )}

          {/* AI banner */}
          {item.aiRecommended && (
            <div className="mt-2 rounded-2xl p-3 flex items-center gap-2" style={{ background: 'linear-gradient(135deg,#F3EEFF,#EEF0FF)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L13.09 8.26L19 6L15.74 11.09L22 12L15.74 12.91L19 18L13.09 15.74L12 22L10.91 15.74L5 18L8.26 12.91L2 12L8.26 11.09L5 6L10.91 8.26L12 2Z" fill="#7C3AED"/></svg>
              <p className="text-xs font-medium" style={{ color: '#7C3AED' }}>AI Recommended · Scheduled during your peak focus window</p>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-4">
          <button
            className="flex-1 py-3.5 rounded-xl text-sm font-semibold border flex items-center justify-center gap-2"
            style={{ borderColor: '#E8EAFF', color: '#EF4444', background: 'white' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M8 6V4h8v2M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            Delete
          </button>
          <button
            className="flex-1 py-3.5 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2"
            style={{ background: 'linear-gradient(135deg,#5B67FA,#7C3AED)', boxShadow: '0 4px 15px rgba(91,103,250,0.3)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            Edit Event
          </button>
        </div>
      </div>
    </div>
  );
}
