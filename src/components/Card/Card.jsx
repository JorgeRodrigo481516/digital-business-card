import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

export default function Card() {
  return (
    <div className="w-[19.5rem]">
      <div className="flex flex-col gap-6 rounded-lg bg-[hsl(231,12%,12%)]">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}
