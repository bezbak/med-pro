import Features from './components/Features'; 
import ImageBanner from './Components/ImageBanner';
import Hero from '@/components/home/Hero';
import OurMission from '@/components/home/OurMission';
import Info from '@/components/home/Info';
import Doctors from '@/components/home/Doctors';
import Feedback from '@/components/home/Feedback';
import Questions from '@/components/home/Questions';
import CombinedSection from './Components/CombinedSection';


export default function Home() {
    return (
        <div className="w-full conatiner  mx-auto font-gilroy">
            <Hero />
            <OurMission />
            <Info />
            <CombinedSection/>
            <Features />
            <ImageBanner />
            <Doctors />
            <Feedback />
            <Questions />
        </div>
    );
}
