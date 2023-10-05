import { Inter } from "next/font/google";
import Layout from "../../components/layout"; 
import Image from "next/image";
import imgref from "@/components/imgref";
import PurpleishButton2 from "@/components/purpleishButton2";

const inter = Inter({ subsets: ["latin"] });

const why = () => {
    return (
    <Layout>
      <div className="lg:mt-8 ">
      <section className=" flex flex-col items-center lg:justify-between lg:flex-row gap-y-10 py-6 px-6 ">
        {/* Left Side */}
        <div className=" mt-8 lg:mt-16 flex-1 ">
          <h1 className="font-bold  text-transparent bg-clip-text bg-gradient-to-b from-[#5C1D70] to-[#2F073C]">
             <span className="text-[64px] leading-[73.54px]">
                Why use nBTC?
            </span> 
          </h1>
          <p className="leading-7 font-light text-2xl [&:not(:first-child)]:mt-6">
            The nBTC Foundation is an active participant in the nBTC
            community, both directly and indirectly, supporting the
            development, implementation, and maintenance of nBTC
            through grant, seed, and investment programs. We collaborate
            with service providers like nBTC Labs and its subsidiaries,
            contributing to the growth of nBTC in various ways.
          </p>
        </div>
        {/* Right Side */}
        <div className="relative">
          <div className="absolute inset-0 h-full w-full blur-3xl z-[-99]"></div>
          <div className="lg:w-[800px] flex flex-1 items-center justify-center">
            <div className="flex rounded-2xl">
              <Image
                className="rounded-xl"
                width="548"
                height="548"
                src={imgref.polygonshape}
                alt="imgref"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#1E1E1E] mt-[52px] mb-[58px] flex flex-col px-[2.5%]">
        <h1 className="text-[white] font-normal text-[30px] leading-[57.45px] flex flex-col items-center gap-[11px] mt-[58px]">
            Get a quick overview for
        </h1>
        <div className="justify-center mt-8 flex flex-col   md:flex-row lg:flex-row  md:space-x-4 lg:space-x-8">
          <PurpleishButton2  
            line1Text="Individuals" 
            line2Text="Learn more" 
          />
          <PurpleishButton2  
            line1Text="Businesses" 
            line2Text="Learn more" 
          />
          <PurpleishButton2  
            line1Text="Developers" 
            line2Text="Learn more" 
          />
        </div>
      </div>
    </div>
    </Layout>
  );
};


export default why;
