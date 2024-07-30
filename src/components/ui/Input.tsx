import React from "react";

type Props = { className?: string; placeholder: string };

const Input = ({ className, placeholder }: Props) => {
  return <input type="text" placeholder={placeholder} className={`border text-[20px] border-black rounded-full px-5 py-4 placeholder:text-black ${className}`} />;
};

const TextArea = ({ className, placeholder }: Props) => {
  return <textarea placeholder={placeholder} className={`border text-[20px] border-black rounded-3xl px-5 py-4 placeholder:text-black ${className}`}></textarea>;
};

export { Input, TextArea };
