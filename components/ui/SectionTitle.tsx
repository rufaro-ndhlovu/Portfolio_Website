type Props = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
  return (
    <>
      <div className="text">
        <h2>{children}</h2>
      </div>
    </>
  );
}
