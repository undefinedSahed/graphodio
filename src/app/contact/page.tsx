import ContactPage from "@/components/contact/contact";
import CommonBanner from "@/components/shared/common_banner";


export default function Home() {
    return (
        <main>
            <CommonBanner title='Contact Us' />
            <ContactPage />
        </main>
    );
}
