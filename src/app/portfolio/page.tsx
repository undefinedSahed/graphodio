import PortfolioGrid from "@/components/services/portfolio-grid";
import CommonBanner from "@/components/shared/common_banner";


export default function Home() {
    return (
        <main>
            <CommonBanner title='Portfolio' />
            <PortfolioGrid />
        </main>
    );
}
