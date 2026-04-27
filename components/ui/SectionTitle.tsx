type Props = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
  return (
    <>
      <div className="font-bold font-display text-3xl leading-[1.2]">
        <h2>{children}</h2>
      </div>
    </>
  );
}
