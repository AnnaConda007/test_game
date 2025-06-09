import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GameField from './components/game-field/game-field';
import History from './components/history/history';
import GamersInputs from './components/gamers-inputs/gamers-inputs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GamersInputs />} />
        <Route path="/game" element={<GameField />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
