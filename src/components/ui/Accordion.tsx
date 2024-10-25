"use client";
import { IQuestion } from "@/types/types";
import Image from "next/image";
import React, { useState } from "react";
import arrow from "@/assets/images/home/ArrowBottom.svg";

const Accordion = ({ question }: { question: IQuestion }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pb-[18px] border-b-[#FFAEAD] border-b-2">
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="flex justify-between items-center py-3 w-full"
      >
        <div className="text-[26px] max-sm:text-[14px] font-align-left leading-tight font-semibold">
          {question.question}
        </div>
        <div className="border-[#FFAEAD] bg-white border-[5px] rounded-full w-10 h-10 flex items-center justify-center">
          <Image
            src={arrow}
            alt="arrow"
            width={15}
            height={15}
            className="duration-300"
            style={{ transform: `${isOpen ? "rotate(-180deg)" : ""}` }}
          />
        </div>
      </button>
      {isOpen && (
        <div className="text-[26px] leading-tight max-sm:text-[14px]">{question.answer} </div>
      )}
    </div>
  );
};

export default Accordion;
