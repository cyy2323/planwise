import type { Screen } from '../App';
import BottomNav from '../components/BottomNav';
import { SCHEDULES, USER, CATEGORY_COLORS } from '../data/mockData';

type Props = { navigate: (s: Screen) => void; setSelectedId: (id: string) => void };

export default function HomeScreen({ navigate, setSelectedId }: Props) {
  const today = SCHEDULES.filter((s) => s.date === 'Tuesday, Oct 24, 2026');
  const aiItem = today.find((s) => s.aiRecommended);

  return (
    <div className="min-h-screen pb-24" style={{ background: '#F4F5FF' }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-5" style={{ background: 'linear-gradient(160deg, #1B1F4B 0%, #3D45C0 100%)' }}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-white/60 text-sm">Good morning 👋</p>
            <h1 className="text-xl font-bold text-white mt-0.5">Hi, {USER.name.split(' ')[0]}!</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('notifications')}
              className="w-10 h-10 rounded-xl flex items-center justify-center relative"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill="white"/>
              </svg>
              <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-400 border border-white" />
            </button>
            <button
              onClick={() => navigate('profile')}
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm"
              style={{ background: '#5B67FA', color: 'white' }}
            >
              {USER.initials}
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Tasks Today', value: today.length, icon: '📋' },
            { label: 'Completed', value: 2, icon: '✅' },
            { label: 'AI Tips', value: 3, icon: '🤖' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl p-3 text-center" style={{ background: 'rgba(255,255,255,0.12)' }}>
              <div className="text-lg mb-1">{stat.icon}</div>
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-white/50 text-[10px] font-medium mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 mt-5 flex flex-col gap-4">
        {/* AI Recommendation banner */}
        {aiItem && (
          <div
            className="rounded-2xl p-4 cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #5B67FA 100%)' }}
            onClick={() => { setSelectedId(aiItem.id); navigate('schedule-detail'); }}
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L13.09 8.26L19 6L15.74 11.09L22 12L15.74 12.91L19 18L13.09 15.74L12 22L10.91 15.74L5 18L8.26 12.91L2 12L8.26 11.09L5 6L10.91 8.26L12 2Z" fill="white"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white/70 text-[10px] font-semibold uppercase tracking-widest">AI Recommendation</span>
                </div>
                <p className="text-white font-semibold text-sm">{aiItem.title}</p>
                <p className="text-white/70 text-xs mt-0.5">{aiItem.startTime} – {aiItem.endTime} · Based on your peak focus time</p>
              </div>
              <button onClick={() => navigate('ai-assistant')} className="text-white/60 mt-0.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        )}

        {/* Today's schedule */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="font-bold text-base" style={{ color: '#1B1F4B' }}>Today's Schedule</h2>
              <p className="text-xs text-gray-400">Tuesday, Oct 24, 2026</p>
            </div>
            <button onClick={() => navigate('schedules')} className="text-xs font-semibold" style={{ color: '#5B67FA' }}>
              See All
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {today.map((item) => {
              const colors = CATEGORY_COLORS[item.category];
              return (
                <button
                  key={item.id}
                  onClick={() => { setSelectedId(item.id); navigate('schedule-detail'); }}
                  className="w-full bg-white rounded-2xl p-4 flex items-start gap-3 text-left transition-all hover:shadow-md"
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
                      <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#9CA3AF"/></svg>
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

        {/* AI Assistant shortcut */}
        <button
          onClick={() => navigate('ai-assistant')}
          className="w-full rounded-2xl p-4 flex items-center gap-3 bg-white border"
          style={{ borderColor: '#E8EAFF', boxShadow: '0 2px 12px rgba(91,103,250,0.06)' }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#5B67FA,#7C3AED)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L13.09 8.26L19 6L15.74 11.09L22 12L15.74 12.91L19 18L13.09 15.74L12 22L10.91 15.74L5 18L8.26 12.91L2 12L8.26 11.09L5 6L10.91 8.26L12 2Z" fill="white"/></svg>
          </div>
          <div className="flex-1 text-left">
            <p className="font-semibold text-sm" style={{ color: '#1B1F4B' }}>Ask AI Assistant</p>
            <p className="text-xs text-gray-400">Get smart schedule suggestions</p>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#5B67FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <BottomNav current="home" navigate={navigate} />
    </div>
  );
}
