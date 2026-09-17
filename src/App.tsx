import { useState } from 'react';
import type { ReactElement } from 'react';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import SchedulesScreen from './screens/SchedulesScreen';
import AddEventScreen from './screens/AddEventScreen';
import ScheduleDetailScreen from './screens/ScheduleDetailScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import AIAssistantScreen from './screens/AIAssistantScreen';

export type Screen =
  | 'splash'
  | 'login'
  | 'register'
  | 'home'
  | 'schedules'
  | 'add-event'
  | 'schedule-detail'
  | 'search'
  | 'profile'
  | 'settings'
  | 'notifications'
  | 'ai-assistant';

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash');
  const [selectedId, setSelectedId] = useState<string>('2');

  const navigate = (s: Screen) => setScreen(s);

  const screens: Record<Screen, ReactElement> = {
    splash:          <SplashScreen navigate={navigate} />,
    login:           <LoginScreen navigate={navigate} />,
    register:        <RegisterScreen navigate={navigate} />,
    home:            <HomeScreen navigate={navigate} setSelectedId={setSelectedId} />,
    schedules:       <SchedulesScreen navigate={navigate} setSelectedId={setSelectedId} />,
    'add-event':     <AddEventScreen navigate={navigate} />,
    'schedule-detail': <ScheduleDetailScreen navigate={navigate} selectedId={selectedId} />,
    search:          <SearchScreen navigate={navigate} setSelectedId={setSelectedId} />,
    profile:         <ProfileScreen navigate={navigate} />,
    settings:        <SettingsScreen navigate={navigate} />,
    notifications:   <NotificationsScreen navigate={navigate} />,
    'ai-assistant':  <AIAssistantScreen navigate={navigate} />,
  };

  return (
    <div className="screen-enter" key={screen}>
      {screens[screen]}
    </div>
  );
}
