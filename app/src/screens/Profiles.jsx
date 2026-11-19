import { useState } from 'react';
import { useStore } from '../lib/store.js';
import { say } from '../lib/audio.js';
import { UI } from '../data/phrases.js';
import { useOnce } from '../games/common.jsx';

const AVATARS = ['🐯', '🐼', '🐰', '🦊', '🐨', '🐸', '🦄', '🐙', '🐳', '🦁'];

export default function Profiles({ onOpenParent }) {
  const { state, selectProfile, addProfile } = useStore();
  const [adding, setAdding] = useState(state.profiles.length === 0);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState(AVATARS[0]);
  useOnce(() => {
    if (state.profiles.length) say(UI.whoAreYou);
  });

  return (
    <div className="screen profiles">
      <h1 className="app-title">🐥 Học Vui Lớp 1</h1>
      {!adding ? (
        <>
          <div className="profile-list">
            {state.profiles.map((p) => (
              <button key={p.id} className="profile-card" onClick={() => selectProfile(p.id)}>
                <span className="avatar">{p.avatar}</span>
                <span className="pname">{p.name}</span>
              </button>
            ))}
            <button className="profile-card add" onClick={() => setAdding(true)}>
              <span className="avatar">＋</span>
              <span className="pname">Thêm bé</span>
            </button>
          </div>
          <button className="parent-link" onClick={onOpenParent}>
            👨‍👩‍👧 Dành cho bố mẹ
          </button>
        </>
      ) : (
        <div className="add-profile">
          <p className="parent-note">Bố mẹ nhập tên và chọn hình cho bé:</p>
          <input className="name-input" value={name} maxLength={16} placeholder="Tên của bé" onChange={(e) => setName(e.target.value)} autoFocus />
          <div className="avatar-pick">
            {AVATARS.map((a) => (
              <button key={a} className={a === avatar ? 'av on' : 'av'} onClick={() => setAvatar(a)}>
                {a}
              </button>
            ))}
          </div>
          <div className="result-actions">
            {state.profiles.length > 0 && (
              <button className="btn-big" onClick={() => setAdding(false)}>
                Huỷ
              </button>
            )}
            <button className="btn-big green" disabled={!name.trim()} onClick={() => addProfile(name.trim(), avatar)}>
              ✔ Xong
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
