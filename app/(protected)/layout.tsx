import { Navbar } from "./_components/navbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-y-10 items-center justify-center py-10 bg-sky-500">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
