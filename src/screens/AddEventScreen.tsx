import { useState } from 'react';
import type { Screen } from '../App';

type Props = { navigate: (s: Screen) => void };

const CATEGORIES = ['Work', 'Health', 'Personal', 'Social', 'Errand'];

export default function AddEventScreen({ navigate }: Props) {
  const [form, setForm] = useState({
    title: '',
    date: '2026-10-24',
    startTime: '09:00',
    endTime: '10:00',
    location: '',
    category: 'Work',
    description: '',
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const inputClass = "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all";
  const inputStyle = { borderColor: '#E8EAFF', background: 'white', color: '#1B1F4B' };

  return (
    <div className="min-h-screen" style={{ background: '#F4F5FF' }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-4 bg-white border-b" style={{ borderColor: '#E8EAFF' }}>
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('schedules')} className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#F4F5FF' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#1B1F4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <h1 className="text-xl font-bold" style={{ color: '#1B1F4B' }}>Add New Event</h1>
        </div>
      </div>

      <div className="px-5 py-5 flex flex-col gap-4 max-w-lg mx-auto">
        {/* Title */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Event Name</label>
          <input
            placeholder="e.g. Team Standup Meeting"
            value={form.title}
            onChange={update('title')}
            className={inputClass}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = '#5B67FA')}
            onBlur={(e) => (e.target.style.borderColor = '#E8EAFF')}
          />
        </div>

        {/* Date */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Date</label>
          <input
            type="date"
            value={form.date}
            onChange={update('date')}
            className={inputClass}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = '#5B67FA')}
            onBlur={(e) => (e.target.style.borderColor = '#E8EAFF')}
          />
        </div>

        {/* Times */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Start Time</label>
            <input
              type="time"
              value={form.startTime}
              onChange={update('startTime')}
              className={inputClass}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = '#5B67FA')}
              onBlur={(e) => (e.target.style.borderColor = '#E8EAFF')}
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">End Time</label>
            <input
              type="time"
              value={form.endTime}
              onChange={update('endTime')}
              className={inputClass}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = '#5B67FA')}
              onBlur={(e) => (e.target.style.borderColor = '#E8EAFF')}
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">Category</label>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setForm((f) => ({ ...f, category: cat }))}
                className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
                style={
                  form.category === cat
                    ? { background: '#5B67FA', color: 'white' }
                    : { background: 'white', color: '#6B7280', border: '1px solid #E8EAFF' }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Location (optional)</label>
          <input
            placeholder="e.g. Conference Room B"
            value={form.location}
            onChange={update('location')}
            className={inputClass}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = '#5B67FA')}
            onBlur={(e) => (e.target.style.borderColor = '#E8EAFF')}
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Description (optional)</label>
          <textarea
            placeholder="Add a note about this event..."
            value={form.description}
            onChange={update('description')}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = '#5B67FA')}
            onBlur={(e) => (e.target.style.borderColor = '#E8EAFF')}
          />
        </div>

        {/* AI suggestion prompt */}
        <div className="rounded-2xl p-4 flex items-start gap-3" style={{ background: '#EEF0FF' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-shrink-0"><path d="M12 2L13.09 8.26L19 6L15.74 11.09L22 12L15.74 12.91L19 18L13.09 15.74L12 22L10.91 15.74L5 18L8.26 12.91L2 12L8.26 11.09L5 6L10.91 8.26L12 2Z" fill="#5B67FA"/></svg>
          <div>
            <p className="text-xs font-semibold" style={{ color: '#5B67FA' }}>AI will optimize your schedule</p>
            <p className="text-xs text-gray-500 mt-0.5">PlanWise will suggest the best time slot based on your habits and existing schedule.</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pb-6">
          <button
            onClick={() => navigate('schedules')}
            className="flex-1 py-3.5 rounded-xl text-sm font-semibold border"
            style={{ borderColor: '#E8EAFF', color: '#6B7280', background: 'white' }}
          >
            Cancel
          </button>
          <button
            onClick={() => navigate('schedules')}
            className="flex-1 py-3.5 rounded-xl text-white text-sm font-semibold"
            style={{ background: 'linear-gradient(135deg,#5B67FA 0%,#7C3AED 100%)', boxShadow: '0 4px 15px rgba(91,103,250,0.35)' }}
          >
            Save Event
          </button>
        </div>
      </div>
    </div>
  );
}
