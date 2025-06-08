import { CellValue } from '../../types/game';
import './nucleus.css';

interface NucleusProps {
  value: CellValue | null;
  onClick: () => void;
  disabled: boolean;
}

const Nucleus = ({ value, onClick, disabled }: NucleusProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      onClick={disabled ? undefined : onClick}
      onKeyDown={handleKeyDown}
      className={`nucleus ${disabled ? 'disabled' : ''} ${value === 'O' ? 'value-o' : ''}`}
    >
      {value}
    </div>
  );
};

export default Nucleus;
