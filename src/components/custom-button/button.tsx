import './button.css';
interface ButtonProps {
  handleClick: () => void;
  title: string;
}
const Button = ({ handleClick, title }: ButtonProps) => {
  return <button onClick={handleClick}>{title}</button>;
};

export default Button;
