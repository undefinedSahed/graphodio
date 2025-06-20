import AboutCompany from "@/components/about/about-company";
import AboutService from "@/components/about/about-service";
import ReasonForChoosing from "@/components/about/reason-choosing";
import Stats from "@/components/about/stats";
import CommonBanner from "@/components/shared/common_banner";


export default function Home() {
    return (
        <main className="">
            <CommonBanner title='About Us' />
            <AboutCompany />
            <ReasonForChoosing />
            <AboutService />
            <Stats />
        </main>
    );
}
