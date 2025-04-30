import Footer from "@/components/Footer";
import NavBar from "@/components/shared/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <NavBar />
      {children}
      <Footer/>
    </div>
  );
}
