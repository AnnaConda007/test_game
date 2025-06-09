import { useDispatch } from 'react-redux';
import InputComponent from '../custom-input.tsx/input';
import { setGamer1, setGamer2 } from '../../redux/mainSlice';
import { useNavigate } from 'react-router-dom';
import './gamers-inputs.css';
import Button from '../custom-button/button';

const GamersInputs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="gamers-inputs">
      <InputComponent onChangeFunc={(v) => dispatch(setGamer1(v))} />
      <InputComponent onChangeFunc={(v) => dispatch(setGamer2(v))} />
      <Button handleClick={() => navigate('/game')} title={'Играть'}></Button>
    </div>
  );
};

export default GamersInputs;
