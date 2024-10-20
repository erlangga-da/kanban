interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: string;
}

export default function Button({
  label,
  onClick,
  icon,
  disabled = false,
  fullWidth = false,
  style = "bg-[--main-purple] text-[--white] hover:bg-[--main-purple-hover]",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${fullWidth ? "w-full justify-center" : "w-fit"} ${
        disabled ? "opacity-25 cursor-not-allowed" : ""
      } ${style} duration-300 px-6 py-3.5 flex gap-2 items-center rounded-full font-semibold text-sm`}
    >
      {icon}
      {label}
    </button>
  );
}
