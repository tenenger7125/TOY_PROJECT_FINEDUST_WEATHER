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

const Button = ({ color = 'white', isBorder, children }) => {
  return (
    <SLayout isBorder={isBorder} color={colorSchema[color].color} backgroundColor={colorSchema[color].backgroundColor}>
      {children}
    </SLayout>
  );
};

export default Button;