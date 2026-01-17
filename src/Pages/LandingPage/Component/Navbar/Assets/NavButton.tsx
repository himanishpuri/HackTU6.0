interface NavButtonProps {
  className?: string;

  text: string;

  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export default function NavButton({
  className,
  text,
  onClick,
}: Readonly<NavButtonProps>) {
  return (
    <button
      className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium  hover:scale-110 transition-all cursor-pointer dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
