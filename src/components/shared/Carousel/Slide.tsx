"use client";
import Image from "next/image";
import Link from "next/link";

type SlideProps = {
  src: string;
  title: string;
  btnText?: string;
  btnHref?: string;
  p?: string;
};

export default function Slide({ src, title, btnText, btnHref, p }: SlideProps) {
  return (
    <div className="relative h-[575px] w-full flex-col-center">
      <Image src={src} alt={title} fill className="object-cover blur-[0.7px]" />
      <div className="flex-col-center z-10 gap-4">
        <h1 className="text-white text-6xl font-semibold flex-row-center text-center">{title}</h1>
        <p className="text-white text-center px-5">{p}</p>
        {btnText && btnHref && <Link href={btnHref} className="btn">{btnText}</Link>}
      </div>
    </div>
  );
}
