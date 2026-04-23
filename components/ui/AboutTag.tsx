type Props = {
  children: React.ReactNode;
  colour: "teal" | "orange" | "lavender";
};

export default function AboutTag({ children, colour }: Props) {
  return (
    <>
      <div
        className={`bg-[var(--color-${colour})] text-white font-bold py-2 px-5 rounded-pill`}
      >
        {children}
      </div>
    </>
  );
}
