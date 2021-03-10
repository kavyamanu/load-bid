import "./button.scss"

interface ButtonProps {
  className:string;
  onClick?:()=>void;
  type?: 'submit' | 'reset' | 'button';
}

export const Button: React.FC<ButtonProps> = ({children, className, onClick, type}) => {
  return (
    <button className={className} onClick ={onClick} type={type}>
      {children}
    </button>
  );
}

