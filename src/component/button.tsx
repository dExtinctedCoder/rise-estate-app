interface ButtonProps {
  text: string;
  className: string;
}

const Button = ({ text, className }: ButtonProps) => {
  return (
    <button
      className={`bg-[#8BC83F] text-white rounded-xl py-4 px-20 text-center font-bold tracking-[0.48px] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
