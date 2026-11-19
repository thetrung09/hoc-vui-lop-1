import { useMemo, useState } from 'react';
import { img, shuffle, wait } from '../lib/util.js';
import { sfx } from '../lib/audio.js';
import { LETTER_SAY, spellPrompt } from '../data/tiengviet.js';
import { unitSay } from '../data/vietnamese.js';
import { RoundDots, Speaker, useOnce } from './common.jsx';

/** Đánh vần / ghép chữ: chạm các thẻ chữ theo đúng thứ tự để ghép thành tiếng. */
export default function Spell({ act, api }) {
  const [k, setK] = useState(0);
  const item = act.items[k];
  return <SpellItem key={k} item={item} api={api} total={act.items.length} index={k} onNext={() => (k + 1 < act.items.length ? setK(k + 1) : api.done())} />;
}

function SpellItem({ item, api, total, index, onNext }) {
  const tiles = useMemo(() => shuffle([...item.parts, ...(item.extra || [])].map((t, i) => ({ t, id: i }))), [item]);
  const [placed, setPlaced] = useState([]);
  const [shake, setShake] = useState(null);
  const [complete, setComplete] = useState(false);
  useOnce(() => api.prompt(spellPrompt(item.word)));

  async function tap(tile) {
    if (complete || placed.includes(tile.id)) return;
    const need = item.parts[placed.length];
    if (tile.t === need) {
      sfx.tick();
      const next = [...placed, tile.id];
      setPlaced(next);
      if (next.length === item.parts.length) {
        setComplete(true);
        await wait(300);
        await api.say(item.spell);
        await api.good();
        await wait(400);
        onNext();
      } else {
        api.say(LETTER_SAY[tile.t] || unitSay(tile.t));
      }
    } else {
      setShake(tile.id);
      setTimeout(() => setShake(null), 500);
      api.bad();
    }
  }

  const placedTiles = placed.map((id) => tiles.find((x) => x.id === id));
  return (
    <div className="game spell">
      <RoundDots total={total} current={index} />
      <div className="spell-top">
        {item.img && <img className="spell-pic" src={img(item.img)} alt="" />}
        <div className="target-word">
          {item.word} <Speaker text={item.word} api={api} small />
        </div>
      </div>
      <div className={complete ? 'slots complete' : 'slots'}>
        {item.parts.map((_, i) => (
          <div key={i} className={placedTiles[i] ? 'slot filled' : 'slot'}>
            {placedTiles[i]?.t || ''}
          </div>
        ))}
      </div>
      {complete && <div className="spell-line">{item.spell.replaceAll(',', ' –')}</div>}
      <div className="tiles">
        {tiles.map((tile) => (
          <button
            key={tile.id}
            className={`tile ${placed.includes(tile.id) ? 'used' : ''} ${shake === tile.id ? 'shake' : ''}`}
            onClick={() => tap(tile)}
          >
            {tile.t}
          </button>
        ))}
      </div>
    </div>
  );
}
