import "./button.scss"

interface ButtonProps {
  className:string;
  onClick:()=>void
}

export const Button: React.FC<ButtonProps> = ({children, className, onClick}) => {
  return (
    <button className={className} onClick ={onClick}>
      {children}
    </button>
  );
}

