import AboutSection from "@/components/home/about-section";
import Banner from "@/components/home/banner";
import HowWeWork from "@/components/home/how-we-work";
import ServiceSection from "@/components/home/service-section";


export default function Home() {
  return (
    <main>
      <Banner />
      <HowWeWork />
      <AboutSection />
      <ServiceSection />
    </main>
  );
}
