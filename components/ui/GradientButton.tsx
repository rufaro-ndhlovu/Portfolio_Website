type Props = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function GradientButton({ children, onClick }: Props) {
  return (
    <>
      <button
        className="btn-gradient inline-flex items-center justify-center px-4 py-3 rounded-full font-medium text-black"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
