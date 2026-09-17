import { useState, useRef, useEffect } from 'react';
import type { Screen } from '../App';
import { AI_MESSAGES } from '../data/mockData';

type Props = { navigate: (s: Screen) => void };

type Message = { id: string; role: 'user' | 'assistant'; message: string; time: string };

const AI_SUGGESTIONS = [
  'Reschedule my afternoon events',
  'Find free time tomorrow',
  'Optimize my weekly schedule',
  'Add a focus block for coding',
];

export default function AIAssistantScreen({ navigate }: Props) {
  const [messages, setMessages] = useState<Message[]>(AI_MESSAGES);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const now = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const userMsg: Message = { id: Date.now().toString(), role: 'user', message: text, time: now };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        message: "I've noted your request and analyzed your current schedule. Based on your patterns, I recommend keeping your deep work blocks in the morning and social/errand tasks in the afternoon. Want me to apply this optimization?",
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((m) => [...m, reply]);
      setTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#F4F5FF' }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-4 bg-white border-b flex-shrink-0" style={{ borderColor: '#E8EAFF' }}>
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('home')} className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#F4F5FF' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#1B1F4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#5B67FA,#7C3AED)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L13.09 8.26L19 6L15.74 11.09L22 12L15.74 12.91L19 18L13.09 15.74L12 22L10.91 15.74L5 18L8.26 12.91L2 12L8.26 11.09L5 6L10.91 8.26L12 2Z" fill="white"/></svg>
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: '#1B1F4B' }}>AI Assistant</p>
              <p className="text-[10px] text-green-500 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Online
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            {msg.role === 'assistant' && (
              <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 self-end" style={{ background: 'linear-gradient(135deg,#5B67FA,#7C3AED)' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 2L13.09 8.26L19 6L15.74 11.09L22 12L15.74 12.91L19 18L13.09 15.74L12 22L10.91 15.74L5 18L8.26 12.91L2 12L8.26 11.09L5 6L10.91 8.26L12 2Z" fill="white"/></svg>
              </div>
            )}
            <div className={`max-w-[75%] flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div
                className="px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
                style={
                  msg.role === 'user'
                    ? { background: 'linear-gradient(135deg,#5B67FA,#7C3AED)', color: 'white', borderBottomRightRadius: '4px' }
                    : { background: 'white', color: '#1B1F4B', borderBottomLeftRadius: '4px', boxShadow: '0 2px 8px rgba(91,103,250,0.08)' }
                }
              >
                {msg.message}
              </div>
              <span className="text-[10px] text-gray-400">{msg.time}</span>
            </div>
          </div>
        ))}

        {typing && (
          <div className="flex gap-2.5">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#5B67FA,#7C3AED)' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 2L13.09 8.26L19 6L15.74 11.09L22 12L15.74 12.91L19 18L13.09 15.74L12 22L10.91 15.74L5 18L8.26 12.91L2 12L8.26 11.09L5 6L10.91 8.26L12 2Z" fill="white"/></svg>
            </div>
            <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-1.5" style={{ borderBottomLeftRadius: '4px', boxShadow: '0 2px 8px rgba(91,103,250,0.08)' }}>
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-2 h-2 rounded-full" style={{ background: '#5B67FA', animation: `bounce 1s ease-in-out ${i * 0.15}s infinite` }} />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick suggestions */}
      {input.length === 0 && (
        <div className="px-5 pb-2 flex gap-2 overflow-x-auto flex-shrink-0">
          {AI_SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border whitespace-nowrap"
              style={{ borderColor: '#5B67FA', color: '#5B67FA', background: '#EEF0FF' }}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="px-5 py-3 bg-white border-t flex-shrink-0 flex items-center gap-3" style={{ borderColor: '#E8EAFF' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send(input)}
          placeholder="Ask me to plan your day..."
          className="flex-1 px-4 py-2.5 rounded-xl text-sm border outline-none"
          style={{ borderColor: '#E8EAFF', background: '#F4F5FF', color: '#1B1F4B' }}
        />
        <button
          onClick={() => send(input)}
          disabled={!input.trim()}
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-40"
          style={{ background: 'linear-gradient(135deg,#5B67FA,#7C3AED)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}
