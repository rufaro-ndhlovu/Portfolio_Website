type Props = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
  return (
    <>
      <div className="font-bold text-2xl leading-[1.2]">
        <h2>{children}</h2>
      </div>
    </>
  );
}
