// import Testimonial from './Components/Testimonial';
import VideoSection from './components/VideoSection';
import Features from './components/Features';
import ImageBanner from './components/ImageBanner';
import { featuresData } from '@/data/data';
import Hero from '@/components/home/Hero';
import OurMission from '@/components/home/OurMission';
import Info from '@/components/home/Info';
import Doctors from '@/components/home/Doctors';
import Feedback from '@/components/home/Feedback';
import Questions from '@/components/home/Questions';


export default function Home() {
    return (
        <div className="*:mt-16 w-custom-1300 mx-auto font-gilroy">
            <Hero />
            <OurMission />
            <Info />
            <div className="container mx-auto h-custom-592 overflow-hidden bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        {/* <Testimonial /> */}
                    </div>
                    <div className="w-full h-full flex justify-center">
                        <VideoSection
                            videoUrl="/woman.png"
                            description="Видеоотзыв от Светланы"
                        />
                    </div>
                </div>
                <div className="mb-12">
                    <Features features={featuresData} />
                </div>
                <div className="mt-12">
                    <ImageBanner altText="Image description" />
                </div>
            </div>

            <Doctors />
            <Feedback />
            <Questions />
        </div>
    );
}
