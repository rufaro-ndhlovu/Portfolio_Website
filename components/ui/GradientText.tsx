type Props = {
  children: React.ReactNode;
};

export default function GradientText({ children }: Props) {
  return (
    <>
      <span
        className="bg-clip-text text-transparent"
        style={{ backgroundImage: "var(--grad-primary)" }}
      >
        {children}
      </span>
    </>
  );
}
