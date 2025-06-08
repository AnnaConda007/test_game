import { useState, useEffect } from 'react';
import { Match } from '../../types/game';
import Board from '../board/board';
import { useNavigate } from 'react-router-dom';
import './history.css';
const History = () => {
  const [history, setHistory] = useState<Match[]>([]);
  const [selectedMatchIndex, setSelectedMatchIndex] = useState<number | null>(
    null,
  );
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('history');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const selectedMatch =
    selectedMatchIndex !== null ? history[selectedMatchIndex] : null;
  return (
    <div className="history-container">
      <h2>История матчей</h2>
      <button onClick={() => navigate('/game')}>Сыграть заново</button>

      <ul className="history-list">
        {history.map((match, i) => (
          <li key={i}>
            <button
              type="button"
              className={selectedMatchIndex === i ? 'selected' : ''}
              onClick={() => setSelectedMatchIndex(i)}
            >
              {match.date} — {match.players.X} (X) vs {match.players.O} (O) —
              Победитель: {match.winner}
            </button>
          </li>
        ))}
      </ul>

      {selectedMatch && (
        <div className="selected-match">
          <h3>Матч от {selectedMatch.date}</h3>
          <p>
            Игроки: {selectedMatch.players.X} (X) vs {selectedMatch.players.O}{' '}
            (O)
          </p>
          <p>Победитель: {selectedMatch.winner}</p>
          <div className="board-container">
            <Board
              Nucleuses={selectedMatch.field}
              onNucleusClick={() => {}}
              winner={selectedMatch.winner}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
