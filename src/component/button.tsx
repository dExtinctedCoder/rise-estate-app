interface ButtonProps {
  text: string;
  className?: string;
  icon?: JSX.Element;
}

const Button = ({ text, className, icon }: ButtonProps) => {
  return (
    <button
      className={`bg-[#8BC83F] whitespace-nowrap flex items-center justify-center gap-x-2 text-white rounded-xl py-4 px-20 text-center font-bold tracking-[0.48px] ${className}`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
