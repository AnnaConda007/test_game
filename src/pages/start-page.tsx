import { useDispatch } from 'react-redux';
import InputComponent from '../components/custom-input.tsx/input';
import { setGamer1, setGamer2 } from '../redux/mainSlice';
import { useNavigate } from 'react-router-dom';
import './start-page.css';
import Button from '../components/custom-button/button';
const StartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="start-page">
      <InputComponent onChangeFunc={(v) => dispatch(setGamer1(v))} />
      <InputComponent onChangeFunc={(v) => dispatch(setGamer2(v))} />
      <Button handleClick={() => navigate('/game')} title={'Играть'}></Button>
    </div>
  );
};

export default StartPage;
