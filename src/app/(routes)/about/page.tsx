import HeroSection from "@/app/container/About-page/hero-section";
import StatisticSection from "@/app/container/About-page/statistics-section";
import ValuePropSection from "@/app/container/About-page/valueprop-section";
import ValueSection from "@/app/container/About-page/values-section";
import QualitySection from "@/app/container/About-page/quality-section";
import PartnerSection from "@/app/container/About-page/partners-section";
import InstagramSection from "@/app/container/About-page/instagram-section";

export default function About() {
    return (
        <main>
            <HeroSection />
            <StatisticSection />
            <ValuePropSection />
            <ValueSection />
            <QualitySection />
            <PartnerSection />
            <InstagramSection />
        </main>
    );
    }
