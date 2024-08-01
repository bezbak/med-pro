import BlockCollection from '../ui/BlockCollection';
import Block from '../ui/Block';
import Link from 'next/link';
import Image from 'next/image';
import DoctorsSlider from '../ui/DoctorsSlider';
import ArrowTopRightIcon from '@/assets/images/home/ArrowTopRightIcon.svg';

const Doctors = () => {
    return (
        <section id="doctors">
            <BlockCollection>
                <Block className="!bg-[#9CC8FC] w-full pt-9 pb-8 text-white">
                    <div className="mb-7 px-9">
                        <div className="flex items-center justify-between mb-7">
                            <h2 className="text-[44px] leading-tight font-semibold">
                                Узнайте о наших врачах
                            </h2>
                            <Link
                                href={'#'}
                                className="border-[#FFAEAD] bg-white border-[5px] rounded-full p-2 flex items-center justify-center"
                            >
                                <Image
                                    src={ArrowTopRightIcon}
                                    alt="arrow_top"
                                    width={20}
                                    height={20}
                                ></Image>
                            </Link>
                        </div>
                        <h3 className="text-[36px] leading-tight">
                            <span className="font-semibold">Med-Pro </span>-
                            доступ к качественной медицине онлайн без очередей.
                        </h3>
                    </div>
                    <DoctorsSlider />
                </Block>
            </BlockCollection>
        </section>
    );
};

export default Doctors;
