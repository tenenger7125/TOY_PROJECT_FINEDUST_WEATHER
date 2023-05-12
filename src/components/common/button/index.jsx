import { SLayout } from './Button.style';

const colorSchema = {
  white: {
    color: '#212529',
    backgroundColor: '#f8f9fa',
  },
  blue: {
    color: '#fff',
    backgroundColor: '#228be6',
  },
};

const Button = ({ type = 'button', color = 'white', isBorder, children, handleClick }) => {
  return (
    <SLayout
      type={type}
      isBorder={isBorder}
      color={colorSchema[color].color}
      backgroundColor={colorSchema[color].backgroundColor}
      onClick={e => {
        handleClick && handleClick(e);
      }}>
      {children}
    </SLayout>
  );
};

export default Button;
