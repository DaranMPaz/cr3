export default function BoxedSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-theme-gray-900 px-12 md:px-24 py-12 flex flex-col gap-12 md:flex-row justify-between items-center mx-auto">
      {children}
    </div>
  );
}