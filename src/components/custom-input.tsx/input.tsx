import { useState } from 'react';
import './input.css';
interface InputComponentProps {
  onChangeFunc: (value: string) => void;
}

const InputComponent = ({ onChangeFunc }: InputComponentProps) => {
  const [value, setValue] = useState('');
  const handleChange = (value: string) => {
    setValue(value);

    onChangeFunc(value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default InputComponent;
