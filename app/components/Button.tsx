interface ButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({ label, onClick, icon, disabled=false }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-fit bg-[--main-purple] duration-300 px-6 py-3.5 flex gap-2 items-center rounded-full text-[--white] font-bold text-sm ${disabled ? "opacity-25 cursor-not-allowed":"hover:bg-[--main-purple-hover]"}`}
    >
      {icon}
      {label}
    </button>
  );
}
