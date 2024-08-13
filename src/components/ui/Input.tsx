import React from 'react';

type Props = { className?: string; placeholder: string };

const Input = ({ className, placeholder }: Props) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`border text-[20px] border-black rounded-full px-5 py-4 placeholder:text-black ${className}`}
    />
  );
};

const TextArea = ({ className, placeholder }: Props) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`border text-[20px] border-black rounded-3xl px-5 py-4 placeholder:text-black ${className}`}
    ></textarea>
  );
};

const FooterInput = ({placeholder,title}:{placeholder:string,title:string}) => {
  return (
    <label className="block relative border-2 outline-none rounded-xl pt-6 px-3 py-[9px]">
      <div className="font-light absolute text-[10px] text-[#808080] top-[9px] left-3 ">
        {title}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="font-light bg-transparent placeholder:text-white text-white outline-none"
      />
    </label>
  );
};

export { Input, TextArea, FooterInput };
