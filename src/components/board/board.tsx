import { CellValue } from '../../types/game';
import Nucleus from '../nucleus/nucleus';

interface BoardProps {
  Nucleuses: (CellValue | null)[];
  onNucleusClick: (index: number) => void;
  winner: string | null;
}

const Board = ({ Nucleuses, onNucleusClick, winner }: BoardProps) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', width: 270 }}>
    {Nucleuses.map((value, i) => (
      <Nucleus
        key={i}
        value={value}
        onClick={() => onNucleusClick(i)}
        disabled={!!value || !!winner}
      />
    ))}
  </div>
);

export default Board;
