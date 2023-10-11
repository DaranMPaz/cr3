export default function Padding({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center px-12 md:px-24 py-12 md:py-[240px] w-full relative mx-auto">
      {children}
    </div>
  );
}