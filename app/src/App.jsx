import { useEffect, useRef, useState } from 'react';
import { StoreCtx, mascotFor, useStoreState } from './lib/store.js';
import { say } from './lib/audio.js';
import { UI } from './data/phrases.js';
import { SUBJECTS } from './data/index.js';
import Profiles from './screens/Profiles.jsx';
import MapScreen from './screens/MapScreen.jsx';
import LessonPlayer from './screens/LessonPlayer.jsx';
import ParentPage from './screens/ParentPage.jsx';

export default function App() {
  const store = useStoreState();
  const [screen, setScreen] = useState('home'); // home | lesson | parent | rest
  const [subject, setSubject] = useState('tv');
  const [lesson, setLesson] = useState(null);
  const [run, setRun] = useState(0);
  const playMs = useRef(0);
  const lessonStart = useRef(0);

  // Lối tắt để kiểm tra: ?bai=<id bài> mở thẳng bài đó
  useEffect(() => {
    const id = new URLSearchParams(location.search).get('bai');
    const l = id && SUBJECTS.flatMap((s) => s.lessons).find((x) => x.id === id);
    if (l && store.profile) startLesson(l);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Đếm thời gian bé đang học để nhắc nghỉ
  function startLesson(l) {
    setLesson(l);
    setRun((r) => r + 1);
    lessonStart.current = Date.now();
    setScreen('lesson');
  }
  function endLesson(again) {
    playMs.current += Date.now() - lessonStart.current;
    const limit = store.state.settings.sessionMinutes;
    if (limit && playMs.current >= limit * 60000) {
      playMs.current = 0;
      setScreen('rest');
      return;
    }
    if (again) startLesson(lesson);
    else setScreen('home');
  }

  let body;
  if (screen === 'parent') body = <ParentPage onBack={() => setScreen('home')} />;
  else if (!store.profile) body = <Profiles onOpenParent={() => setScreen('parent')} />;
  else if (screen === 'lesson') body = <LessonPlayer key={run} lesson={lesson} onExit={endLesson} />;
  else if (screen === 'rest') body = <Rest onDone={() => setScreen('home')} />;
  else
    body = (
      <MapScreen
        key={store.profile.id}
        subject={subject}
        setSubject={setSubject}
        onPlay={startLesson}
        onOpenParent={() => setScreen('parent')}
        onSwitchProfile={() => store.selectProfile(null)}
      />
    );

  return <StoreCtx.Provider value={store}>{body}</StoreCtx.Provider>;
}

const REST_SECONDS = 180;
function Rest({ onDone }) {
  const [left, setLeft] = useState(REST_SECONDS);
  useEffect(() => {
    say(UI.rest);
    const t = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="screen rest">
      <div className="result-mascot float">😴</div>
      <h2>Nghỉ mắt một chút nhé!</h2>
      <p>Bé đứng dậy vươn vai, nhìn ra xa nào.</p>
      <div className="rest-timer">
        {Math.floor(left / 60)}:{String(left % 60).padStart(2, '0')}
      </div>
      <button className="btn-big green" disabled={left > 0} onClick={onDone}>
        Học tiếp
      </button>
    </div>
  );
}

export { mascotFor };
