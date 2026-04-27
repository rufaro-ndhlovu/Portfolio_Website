type Props = {
  children: React.ReactNode;
  title: string;
};

export default function SkillCard({ children, title }: Props) {
  return (
    <div className="skillCard rounded-lg p-4">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      {children}
    </div>
  );
}
