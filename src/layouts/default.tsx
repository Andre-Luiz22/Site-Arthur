import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <main className="">{children}</main>
      <footer className="w-full flex items-center justify-center py-3 gap-2">
        <div className="flex flex-col items-center">
          <span className="text-default-600">EE Laurita de Melo Moreira</span>
          <span className="text-default-600 text-xs">
            Arthur Brandão e André Luiz
          </span>
        </div>
        <p>&copy;</p>
        <p className="text-primary">2024</p>
      </footer>
    </div>
  );
}
