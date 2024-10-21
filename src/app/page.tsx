import { FaHome } from "react-icons/fa";
import HeroSection from "./components/Hero";
import { FloatingNav } from "./ui/FloatingNav";
import Grid from "./components/Grid";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{
          name: 'Home',
          link: '/',
          icon: <FaHome />
        }]}/>
        <HeroSection />
        <Grid />
      </div>
    </main>
  );
}