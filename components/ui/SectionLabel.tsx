type Props = {
  children: React.ReactNode;
};

export default function SectionLabel({ children }: Props) {
  return (
    <>
      <div className="uppercase text-[var(--color-teal)] tracking-[0.18] text-xs">
        {children}
      </div>
    </>
  );
}
