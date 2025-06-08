import { useEffect, useState } from 'react';
import { CellValue, Match } from '../../types/game';
import Board from '../board/board';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import Button from '../custom-button/button';
import './game-field.css';

const GameField = () => {
  const navigate = useNavigate();
  const gamer_1 = useSelector((state: RootState) => state.MainSlice.gamer_1);
  const gamer_2 = useSelector((state: RootState) => state.MainSlice.gamer_2);
  const gamers = [gamer_1, gamer_2];
  const figures: Record<string, CellValue> = {
    [gamers[0]]: 'X',
    [gamers[1]]: 'O',
  };

  const [winner, setWinner] = useState<string | null>(null);
  const [activeGamer, setActiveGamer] = useState(gamers[0]);
  const [Nucleuses, setNucleuses] = useState<(CellValue | null)[]>(
    Array(9).fill(null),
  );

  const [history, setHistory] = useState<Match[]>(() => {
    const saved = localStorage.getItem('history');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (!gamer_1.trim() || !gamer_2.trim()) {
      navigate('/');
    }
  }, [gamer_1, gamer_2, navigate]);

  const updateGamer = () => {
    setActiveGamer((prev) => (prev === gamers[0] ? gamers[1] : gamers[0]));
  };

  const handleRestart = () => {
    setNucleuses(Array(9).fill(null));
    setWinner(null);
    setActiveGamer(gamers[0]);
  };

  const getGamerByFigure = (figure: CellValue) => {
    return Object.entries(figures).find(([f]) => f === figure)?.[0] ?? null;
  };

  const checkWinner = (Nucleuses: (CellValue | null)[]) => {
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winCombos) {
      if (
        Nucleuses[a] &&
        Nucleuses[a] === Nucleuses[b] &&
        Nucleuses[b] === Nucleuses[c]
      ) {
        return Nucleuses[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (Nucleuses[index] || winner) return;
    const newNucleuses = [...Nucleuses];
    newNucleuses[index] = figures[activeGamer];
    setNucleuses(newNucleuses);

    const winnerSymbol = checkWinner(newNucleuses);
    if (winnerSymbol) {
      const winnerName = getGamerByFigure(winnerSymbol);
      setWinner(winnerName);

      const newMatch: Match = {
        players: { X: gamers[0], O: gamers[1] },
        field: newNucleuses,
        date: new Date().toLocaleString(),
        winner: winnerName,
      };

      const updated = [...history, newMatch];
      setHistory(updated);
      localStorage.setItem('history', JSON.stringify(updated));
    } else {
      updateGamer();
    }
  };
  return (
    <div className="game-container">
      <div className="header">
        <span className="game-title">Крестики-нолики</span>
        <p className="status">Ходит: {activeGamer}</p>
      </div>
      <Board
        Nucleuses={Nucleuses}
        onNucleusClick={handleClick}
        winner={winner}
      />
      {winner && <h2>Победитель: {winner}</h2>}
      <div className="buttons">
        <Button handleClick={() => navigate('/history')} title="История" />
        <Button handleClick={handleRestart} title="Играть заново" />
      </div>
    </div>
  );
};

export default GameField;
