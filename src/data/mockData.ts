export const USER = {
  name: 'Bernice Grace',
  email: 'bernicegrace@email.com',
  initials: 'BG',
};

export type Schedule = {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  date: string;
  category: 'work' | 'health' | 'personal' | 'social' | 'errand';
  location?: string;
  description?: string;
  aiRecommended?: boolean;
};

export const SCHEDULES: Schedule[] = [
  {
    id: '1',
    title: 'Morning Training',
    startTime: '06:00 AM',
    endTime: '07:30 AM',
    date: 'Tuesday, Oct 24, 2026',
    category: 'health',
    location: 'Downtown Gym',
    description: 'Cardio and strength training session.',
  },
  {
    id: '2',
    title: 'Deep Work: Code Refactoring',
    startTime: '09:00 AM',
    endTime: '12:00 PM',
    date: 'Tuesday, Oct 24, 2026',
    category: 'work',
    location: 'Home Office',
    description: 'Focus session for refactoring the PlanWise backend API.',
    aiRecommended: true,
  },
  {
    id: '3',
    title: 'Sprint Dev Session',
    startTime: '01:00 PM',
    endTime: '03:00 PM',
    date: 'Tuesday, Oct 24, 2026',
    category: 'work',
    location: 'Home Office',
    description: 'Implementing new feature for the upcoming sprint.',
  },
  {
    id: '4',
    title: 'Doctor Appointment',
    startTime: '04:30 PM',
    endTime: '05:30 PM',
    date: 'Tuesday, Oct 24, 2026',
    category: 'health',
    location: 'City Medical Center',
    description: 'Annual check-up.',
  },
  {
    id: '5',
    title: 'Grocery Shopping',
    startTime: '06:00 PM',
    endTime: '07:00 PM',
    date: 'Tuesday, Oct 24, 2026',
    category: 'errand',
    location: 'Whole Foods Market',
  },
  {
    id: '6',
    title: 'Lunch with Sarah',
    startTime: '12:00 PM',
    endTime: '01:00 PM',
    date: 'Wednesday, Oct 25, 2026',
    category: 'social',
    location: 'The Leaf Cafe',
  },
  {
    id: '7',
    title: 'Product Review Meeting',
    startTime: '02:00 PM',
    endTime: '03:30 PM',
    date: 'Wednesday, Oct 25, 2026',
    category: 'work',
    location: 'Conference Room B',
    aiRecommended: true,
  },
  {
    id: '8',
    title: 'Study: Algorithms',
    startTime: '07:00 PM',
    endTime: '09:00 PM',
    date: 'Wednesday, Oct 25, 2026',
    category: 'personal',
    description: 'Going through advanced algorithm problems.',
  },
  {
    id: '9',
    title: 'Team Meeting',
    startTime: '10:00 AM',
    endTime: '11:00 AM',
    date: 'Thursday, Oct 26, 2026',
    category: 'work',
    location: 'Zoom',
  },
  {
    id: '10',
    title: 'Yoga Session',
    startTime: '06:00 AM',
    endTime: '07:00 AM',
    date: 'Thursday, Oct 26, 2026',
    category: 'health',
    location: 'Zen Studio',
  },
];

export const NOTIFICATIONS = [
  {
    id: '1',
    type: 'ai',
    title: 'AI Suggestion',
    message: 'Your productivity peaks at 9–11 AM. Deep Work: Code Refactoring has been scheduled for you.',
    time: '2 min ago',
    read: false,
  },
  {
    id: '2',
    type: 'reminder',
    title: 'Upcoming Event',
    message: 'Doctor Appointment starts in 1 hour at City Medical Center.',
    time: '30 min ago',
    read: false,
  },
  {
    id: '3',
    type: 'reminder',
    title: 'Daily Summary',
    message: 'You have 5 tasks scheduled for today. Good luck, Bernice!',
    time: '2 hr ago',
    read: true,
  },
  {
    id: '4',
    type: 'ai',
    title: 'Smart Recommendation',
    message: 'Based on your schedule, consider a 15-min break between your 3 PM and 4:30 PM events.',
    time: '4 hr ago',
    read: true,
  },
  {
    id: '5',
    type: 'update',
    title: 'Schedule Updated',
    message: 'Team Meeting rescheduled to Thursday, Oct 26 at 10:00 AM.',
    time: 'Yesterday',
    read: true,
  },
];

export const AI_MESSAGES = [
  {
    id: '1',
    role: 'assistant' as const,
    message: "Good morning, Bernice! I've analyzed your calendar for this week. I suggest moving your Deep Work session earlier to 9 AM when your focus is at peak. Want me to apply this change?",
    time: '09:02 AM',
  },
  {
    id: '2',
    role: 'user' as const,
    message: 'Yes, please reschedule it to 9 AM.',
    time: '09:05 AM',
  },
  {
    id: '3',
    role: 'assistant' as const,
    message: "Done! I've rescheduled Deep Work: Code Refactoring to 9:00 AM – 12:00 PM. I also noticed you have a Doctor Appointment at 4:30 PM — want me to set a reminder 1 hour before?",
    time: '09:05 AM',
  },
  {
    id: '4',
    role: 'user' as const,
    message: 'Sure, set a reminder for that.',
    time: '09:06 AM',
  },
  {
    id: '5',
    role: 'assistant' as const,
    message: "Reminder set for 3:30 PM. Is there anything else I can help you plan today?",
    time: '09:06 AM',
  },
];

export const CATEGORY_COLORS: Record<Schedule['category'], { bg: string; text: string; dot: string }> = {
  work:     { bg: 'bg-blue-50',   text: 'text-blue-600',   dot: 'bg-blue-500' },
  health:   { bg: 'bg-green-50',  text: 'text-green-600',  dot: 'bg-green-500' },
  personal: { bg: 'bg-purple-50', text: 'text-purple-600', dot: 'bg-purple-500' },
  social:   { bg: 'bg-orange-50', text: 'text-orange-600', dot: 'bg-orange-500' },
  errand:   { bg: 'bg-yellow-50', text: 'text-yellow-600', dot: 'bg-yellow-500' },
};
