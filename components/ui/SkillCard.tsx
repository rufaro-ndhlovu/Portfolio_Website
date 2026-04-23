type Props = {
  children: React.ReactNode;
  title: string;
};

export default function SkillCard({ children, title }: Props) {
  return (
    <div
      className="border rounded-lg p-4 w-auto"
      style={{
        backgroundColor: "var(--color-bg-2)",
        borderTop: "4px solid var(--color-orange)",
      }}
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      {children}
    </div>
  );
}
