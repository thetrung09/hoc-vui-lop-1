import { useMemo, useState } from 'react';
import { useStore } from '../lib/store.js';
import { SUBJECTS } from '../data/index.js';
import { hasRecorded, say } from '../lib/audio.js';
import { rand } from '../lib/util.js';
import { UI } from '../data/phrases.js';

/** Khoá bằng một phép tính mà bé lớp 1 chưa làm được. */
function Gate({ onPass, onBack }) {
  const q = useMemo(() => ({ a: rand(12, 39), b: rand(13, 29) }), []);
  const [v, setV] = useState('');
  const [err, setErr] = useState(false);
  return (
    <div className="screen parent gate">
      <h2>Dành cho bố mẹ</h2>
      <p>
        Hãy tính: <b>{q.a} × 2 + {q.b}</b> = ?
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (Number(v) === q.a * 2 + q.b) onPass();
          else setErr(true);
        }}
      >
        <input className="name-input" inputMode="numeric" value={v} onChange={(e) => setV(e.target.value)} autoFocus />
        <div className="result-actions">
          <button type="button" className="btn-big" onClick={onBack}>
            Quay lại
          </button>
          <button className="btn-big green">Vào</button>
        </div>
      </form>
      {err && <p className="err">Chưa đúng.</p>}
    </div>
  );
}

function fmt(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('vi-VN') + ' ' + d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
}

export default function ParentPage({ onBack }) {
  const store = useStore();
  const { state, setSetting, resetProgress, removeProfile, setUnlock } = store;
  const [ok, setOk] = useState(false);
  const [pid, setPid] = useState(state.current || state.profiles[0]?.id);
  if (!ok) return <Gate onPass={() => setOk(true)} onBack={onBack} />;

  const prog = state.progress[pid] || {};
  const prof = state.profiles.find((p) => p.id === pid);
  const recorded = hasRecorded(UI.welcome);

  return (
    <div className="screen parent">
      <header className="parent-head">
        <h2>👨‍👩‍👧 Trang bố mẹ</h2>
        <button className="btn-big" onClick={onBack}>
          ✖ Đóng
        </button>
      </header>

      <section>
        <h3>Bé</h3>
        <div className="row">
          {state.profiles.map((p) => (
            <button key={p.id} className={p.id === pid ? 'chip on' : 'chip'} onClick={() => setPid(p.id)}>
              {p.avatar} {p.name}
            </button>
          ))}
        </div>
      </section>

      {prof &&
        SUBJECTS.map((s) => (
          <section key={s.id}>
            <h3>
              {s.icon} {s.name}
            </h3>
            <div className="row">
              <span>Mở sẵn cho bé đến bài:</span>
              <select
                className="unlock-select"
                value={state.unlocks?.[pid]?.[s.id] ?? -1}
                onChange={(e) => setUnlock(pid, s.id, Number(e.target.value))}
              >
                <option value={-1}>Không (học lần lượt)</option>
                {s.lessons.map((l, i) =>
                  i === 0 ? null : (
                    <option key={l.id} value={i}>
                      {l.title}
                    </option>
                  ),
                )}
              </select>
            </div>
            <table className="prog">
              <thead>
                <tr>
                  <th>Bài</th>
                  <th>Sao cao nhất</th>
                  <th>Số lần chơi</th>
                  <th>Lần gần nhất: số lần sai</th>
                  <th>Chơi lúc</th>
                </tr>
              </thead>
              <tbody>
                {s.lessons.map((l) => {
                  const r = prog[l.id];
                  return (
                    <tr key={l.id}>
                      <td>{l.title}</td>
                      <td>{r ? '★'.repeat(r.stars) + '☆'.repeat(3 - r.stars) : '—'}</td>
                      <td>{r?.plays || 0}</td>
                      <td>{r ? r.lastMistakes : '—'}</td>
                      <td>{fmt(r?.last)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        ))}

      <section>
        <h3>Cài đặt</h3>
        <div className="row">
          <span>Nhắc bé nghỉ sau:</span>
          {[0, 10, 15, 20, 30].map((m) => (
            <button key={m} className={state.settings.sessionMinutes === m ? 'chip on' : 'chip'} onClick={() => setSetting('sessionMinutes', m)}>
              {m ? `${m} phút` : 'Không nhắc'}
            </button>
          ))}
        </div>
        <div className="row">
          <span>Giọng đọc: {recorded ? '✅ đang dùng file giọng HoaiMy tạo sẵn' : '⚠️ chưa có file giọng đọc, đang dùng giọng của trình duyệt'}</span>
          <button className="chip" onClick={() => say('Xin chào! Đây là giọng đọc của Học Vui Lớp Một.')}>
            🔊 Nghe thử
          </button>
        </div>
      </section>

      {prof && (
        <section>
          <h3>Dữ liệu của {prof.name}</h3>
          <div className="row">
            <button className="chip danger" onClick={() => confirm(`Xoá toàn bộ sao và tiến độ của ${prof.name}?`) && resetProgress(pid)}>
              Xoá tiến độ
            </button>
            <button
              className="chip danger"
              onClick={() => {
                if (confirm(`Xoá hồ sơ ${prof.name}? Không khôi phục được.`)) {
                  removeProfile(pid);
                  setPid(state.profiles.find((p) => p.id !== pid)?.id);
                }
              }}
            >
              Xoá hồ sơ
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
