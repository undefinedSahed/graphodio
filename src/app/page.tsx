import AboutSection from "@/components/home/about-section";
import Banner from "@/components/home/banner";
import CreativePortfolio from "@/components/home/creative-portfolio";
import HowWeWork from "@/components/home/how-we-work";
import LatestBlogs from "@/components/home/latest-blogs";
import ServiceSection from "@/components/home/service-section";
import WhyChooseUs from "@/components/home/why-choose-us";
import ClientTestimonial from "@/components/shared/client-testimonial";
import CTASection from "@/components/shared/cta-section";


export default function Home() {
  return (
    <main>
      <Banner />
      <HowWeWork />
      <AboutSection />
      <ServiceSection />
      <WhyChooseUs />
      <CreativePortfolio />
      <CTASection />
      <ClientTestimonial />
      <LatestBlogs />
    </main>
  );
}
