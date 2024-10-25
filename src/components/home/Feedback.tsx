import React from 'react'
import BlockCollection from '../ui/BlockCollection'
import Block from '../ui/Block'
import { Input, TextArea } from '../ui/Input'

type Props = {}

const Feedback = (props: Props) => {
  return (
    <section id='feedback'>
                <BlockCollection className="*:min-h-[600px] *:xl:min-h-[700px] mt-[60px] max-sm:flex-col">
                    <Block className="w-1/2 bg-feedback-bg bg-cover bg-center bg-no-repeat max-sm:min-h-[400px] max-sm:max-w-[356px]"></Block>
                    <Block className="w-1/2 px-12 py-14 max-sm:px-4 max-sm:py-6 ">
                        <h2 className="max-sm:text-[24px] text-[36px] leading-tight font-semibold mb-[14px]">
                            Оставьте свои данные и мы с вами{' '}
                            <span className="text-[#9CC8FC]">свяжемся</span>
                        </h2>
                        <p className="max-sm:text-[18px] text-[20px] leading-tight mb-[34px]">
                            Если у вас есть вопросчы, предложения или вы
                            нуждетесь в помощь то свяжитесь с нами. Мы будем
                            рады вам помочь
                        </p>
                        <form className="flex flex-col gap-8">
                            <div className="flex flex-col gap-5">
                                <Input placeholder="Ваше имя" />
                                <Input placeholder="Ваш e-mail " />
                                <TextArea
                                    placeholder="Ваше cообщение"
                                    className="max-h-[120px] min-h-[120px]"
                                />
                            </div>
                            <button className="bg-[#9CC8FC] py-6 rounded-3xl text-white text-[22px]">
                                Отправить
                            </button>
                        </form>
                    </Block>
                </BlockCollection>
            </section>
  )
}

export default Feedback