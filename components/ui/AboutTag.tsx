type Props = {
  children: React.ReactNode;
  colour: "teal" | "orange" | "lavender";
};

export default function AboutTag({ children, colour }: Props) {
  const colorMap = {
    teal: "var(--color-teal)",
    orange: "var(--color-orange)",
    lavender: "var(--color-lavender)",
  };

  return (
    <>
      <div
        className="text-white text-xs py-1 px-2 rounded-full border"
        style={{
          backgroundColor: `color-mix(in srgb, ${colorMap[colour]} 15%, transparent)`,
          borderColor: colorMap[colour],
        }}
      >
        {children}
      </div>
    </>
  );
}
