type Props = {
  children: React.ReactNode;
  href: string;
};

export default function GradientLink({ children, href }: Props) {
  return (
    <>
      <a
        className="btn-gradient inline-flex items-center justify-center px-4 py-3 rounded-full font-medium text-black"
        href={href}
      >
        {children}
      </a>
    </>
  );
}
