import MaxWitdhWrapper from "@/components/Wrapper/MaxWitdhWrapper";
import {
  PaintbrushVertical,
  Star,
  BadgePercent,
  Smartphone,
  Check,
  ChevronRight,
} from "lucide-react";
import phoneImg from "@/public/assets/phone-template.png";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="">
      <section>
        <MaxWitdhWrapper>
          <div className="flex flex-col justify-center items-center gap-16">
            <div className="text-center text-wrap flex flex-col gap-4 mt-10">
              <h1 className="text-3xl lg:text-5xl text-black">
                Aestheticifier
              </h1>
              <p className="md:px-40">
                <span className="mr-1 p-1 rounded-xl text-2xl font-bold">
                  aestheticify ✨
                </span>
                your phone case with premium stickers of your choice, And get
                delivered them at your door steps.
              </p>
            </div>
  
            <Link className="bg-black px-3 py-2 rounded-lg flex items-center text-white"  href={"/design"}>
              Design
              <ChevronRight color="white" className="size-5" />
            </Link>
  
            <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 items-center mt-3">
              <div className="flex justify-center gap-12 items-center">
                <div className="relative">
                  <Image width={150} src={phoneImg} alt="hello" />
                </div>
  
                <div className="relative">
                  <Image width={200} src={phoneImg} alt="hello" />
                </div>
              </div>
            </div>
          </div>
        </MaxWitdhWrapper>
      </section>
    </div>
  );  
}
