import React from 'react';
import BlockCollection from '../ui/BlockCollection';
import Block from '../ui/Block';
import Accordion from '../ui/Accordion';
import { questions } from '@/data/data';


const Questions = () => {
    return (
        <section id="questions">
            <BlockCollection className="*:min-h-[600px] *:xl:min-h-[700px] mt-[60px]">
                <Block className="w-2/3 p-8 xl:p-16 ">
                    <h2 className="text-[40px] leading-tight font-semibold mb-5">
                        Как записаться на консутьтацию
                    </h2>
                    <div className="flex flex-col gap-8">
                        {questions.map((el) => (
                            <Accordion key={el.id} question={el} />
                        ))}
                    </div>
                </Block>
                <Block className="w-1/3 bg-questions-bg bg-cover bg-no-repeat bg-center"></Block>
            </BlockCollection>
        </section>
    );
};

export default Questions;
