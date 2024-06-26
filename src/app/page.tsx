import Footers from "@/components/footers";
import Header from "@/components/header";
import Main from "@/components/main";
import Mobile from "@/components/mobile";

export default function Home() {
  return (
    <>
      <div className="relative hidden lg:block bg-bg-2">
        <Header />
        <Main />
        <Footers />
      </div>
      <div className="lg:hidden block bg-bg-blue">
        <Mobile />
      </div>
    </>
  );
}
