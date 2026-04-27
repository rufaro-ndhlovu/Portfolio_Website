type Props = {
  children: React.ReactNode;
  title: string;
};

export default function SkillCard({ children, title }: Props) {
  return (
    <div className="skillCard bg-[var(--color-bg-2)] rounded-lg p-4 h-full">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}
