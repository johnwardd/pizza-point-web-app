import Image from "next/image";
import NavLinks from "./ui/nav-links";
import pizzaLogo from "@/public/images/pizzalogo.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="m-8 flex flex-col items-center gap-5 md:gap-8 lg:gap-10">
        <Image priority src={pizzaLogo} alt="Logo" />
        <NavLinks />
        <p className="text-4xl md:text-7xl lg:text-8xl">pizza</p>
      </div>
    </main>
  );
}
