import Intro from './Intro.jsx';
import Spell from './Spell.jsx';
import FindSound from './FindSound.jsx';
import FindLetter from './FindLetter.jsx';
import PickPicture from './PickPicture.jsx';
import Trace from './Trace.jsx';
import { Story, StoryOrder } from './Story.jsx';
import { ChooseText, Reading, Sort } from './Reading.jsx';
import { Count, MakeCount, Position, Sequence, Shapes } from './MathGames.jsx';
import {
  Arith, ClockGame, CompareGroups, CompareNumbers, CountTens, LengthCompare, Measure, ReadNumber, Split, TensUnits, Weekday,
} from './MathGames2.jsx';

export const GAMES = {
  intro: Intro,
  spell: Spell,
  findSound: FindSound,
  findLetter: FindLetter,
  pickPicture: PickPicture,
  trace: Trace,
  story: Story,
  storyOrder: StoryOrder,
  reading: Reading,
  chooseText: ChooseText,
  sort: Sort,
  count: Count,
  makeCount: MakeCount,
  sequence: Sequence,
  position: Position,
  shapes: Shapes,
  compareGroups: CompareGroups,
  compareNumbers: CompareNumbers,
  arith: Arith,
  split: Split,
  countTens: CountTens,
  readNumber: ReadNumber,
  tensUnits: TensUnits,
  lengthCompare: LengthCompare,
  measure: Measure,
  weekday: Weekday,
  clock: ClockGame,
};
