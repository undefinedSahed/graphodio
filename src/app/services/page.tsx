import HowWeWork from "@/components/home/how-we-work";
import ServiceSection from "@/components/home/service-section";
import ClientTestimonial from "@/components/shared/client-testimonial";
import CommonBanner from "@/components/shared/common_banner";
import CTASection from "@/components/shared/cta-section";


export default function Home() {
    return (
        <main>
            <CommonBanner title='Services' />
            <ServiceSection />
            <HowWeWork />
            <CTASection />
            <ClientTestimonial />
        </main>
    );
}
