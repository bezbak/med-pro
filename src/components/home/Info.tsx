import React from 'react';
import BlockCollection from '../ui/BlockCollection';
import Block from '../ui/Block';
import Link from 'next/link';
import { infoBlock } from '@/data/data';

type Props = {};

const Info = (props: Props) => {
    return (
        <section id="info">
            <BlockCollection className="*:min-h-[400px] *:xl:min-h-[570px]">
                <Block className="w-3/5 bg-info-bg text-white p-8 relative bg-cover bg-no-repeat">
                    <h2 className="text-[36px] leading-tight font-gilroy">
                        У нас работают только <br /> опытные специалисты{' '}
                    </h2>
                    <Link
                        href={'#'}
                        className="absolute bottom-9 right-11 px-8 py-4 rounded-full bg-[#9CC8FC]"
                    >
                        Записаться на консультацию
                    </Link>
                </Block>
                <Block className="w-2/5 text-white !bg-[#FFAEAD] px-7 py-10">
                    {infoBlock.map((info) => (
                        <div key={`info_${info.id}`}>
                            <p className="text-[90px] leading-tight font-extrabold">
                                {info.amount}
                            </p>
                            <p className="text-[32px] leading-tight font-extrabold">
                                {info.title}
                            </p>
                        </div>
                    ))}
                </Block>
            </BlockCollection>
        </section>
    );
};

export default Info;
