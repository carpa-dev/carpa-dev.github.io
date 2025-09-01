export function Header({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2 className={`text-center text-5xl font-bold py-9 ${className}`}>
      {title}
    </h2>
  );
}
