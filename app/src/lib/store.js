import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const KEY = 'hocvui.v1';
const empty = { profiles: [], current: null, progress: {}, settings: { sessionMinutes: 15 } };

function load() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY));
    return s ? { ...empty, ...s, settings: { ...empty.settings, ...s.settings } } : empty;
  } catch {
    return empty;
  }
}

export const StoreCtx = createContext(null);
export const useStore = () => useContext(StoreCtx);

export function useStoreState() {
  const [state, setState] = useState(load);
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* bỏ qua nếu không lưu được */
    }
  }, [state]);

  const addProfile = useCallback((name, avatar) => {
    const id = 'p' + Date.now();
    setState((s) => ({ ...s, profiles: [...s.profiles, { id, name, avatar }], current: id }));
  }, []);
  const selectProfile = useCallback((id) => setState((s) => ({ ...s, current: id })), []);
  const removeProfile = useCallback(
    (id) =>
      setState((s) => {
        const progress = { ...s.progress };
        delete progress[id];
        const unlocks = { ...(s.unlocks || {}) };
        delete unlocks[id];
        return { ...s, profiles: s.profiles.filter((p) => p.id !== id), current: s.current === id ? null : s.current, progress, unlocks };
      }),
    [],
  );
  const recordLesson = useCallback((lessonId, stars, mistakes) => {
    setState((s) => {
      const pid = s.current;
      const mine = s.progress[pid] || {};
      const old = mine[lessonId] || { stars: 0, plays: 0 };
      const rec = {
        stars: Math.max(old.stars, stars),
        plays: old.plays + 1,
        lastStars: stars,
        lastMistakes: mistakes,
        last: new Date().toISOString(),
      };
      return { ...s, progress: { ...s.progress, [pid]: { ...mine, [lessonId]: rec } } };
    });
  }, []);
  const resetProgress = useCallback((pid) => setState((s) => ({ ...s, progress: { ...s.progress, [pid]: {} } })), []);
  const setSetting = useCallback((k, v) => setState((s) => ({ ...s, settings: { ...s.settings, [k]: v } })), []);
  /** Bố mẹ mở sẵn các bài đến bài thứ idx (0-based) của một môn cho bé pid. */
  const setUnlock = useCallback(
    (pid, subjectId, idx) =>
      setState((s) => {
        const mine = { ...(s.unlocks?.[pid] || {}), [subjectId]: idx };
        return { ...s, unlocks: { ...(s.unlocks || {}), [pid]: mine } };
      }),
    [],
  );

  const profile = state.profiles.find((p) => p.id === state.current) || null;
  const myProgress = (profile && state.progress[profile.id]) || {};
  const myUnlocks = (profile && state.unlocks?.[profile.id]) || {};
  const totalStars = Object.values(myProgress).reduce((n, r) => n + (r.stars || 0), 0);

  return { state, profile, myProgress, myUnlocks, totalStars, addProfile, selectProfile, removeProfile, recordLesson, resetProgress, setSetting, setUnlock };
}

export { MASCOT_STAGES, mascotFor, mascotSay } from './mascot.js';
