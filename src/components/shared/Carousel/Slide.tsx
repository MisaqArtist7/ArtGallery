"use client";

import Image from "next/image";
import Link from "next/link";

type SlideProps = {
  src: string;
  title: string;
  btnText?: string;
  btnHref?: string;
};

export default function Slide({ src, title, btnText, btnHref }: SlideProps) {
  return (
    <div className="relative h-[575px] w-full flex-col-center">
      <Image src={src} alt={title} fill className="object-cover blur-[0.3px]" />
      <div className="flex-col-center z-10 gap-4">
        <h1 className="text-white text-6xl font-semibold flex-row-center text-center">{title}</h1>
        {btnText && btnHref && <Link href={btnHref} className="btn">{btnText}</Link>}
      </div>
    </div>
  );
}
