import GetQuickOV from "@/components/getquickoverview";
import imgref from "@/components/imgref";
import Layout from "@/components/layout";
import PurpleishButton from "@/components/purpleishButton";
import PurpleishButton2 from "@/components/purpleishButton2";
import WhiteCard from "@/components/whitecard";
import Image from "next/image";

function Business() {
  const WhitecardArr = [
    {
      header: "Low fees, Ultra efficiency",
      description:
        "The network fee for a typical nBTC transaction is nominal, often less than a penny. Converting nBTC into fiat currency incurs costs significantly lower than credit card processing.",
    },
    {
      header: "No chargebacks, Guaranteed Security",
      description:
        "nBTC transactions provide inherent fraud protection. Unlike credit cards, there are no surprise voids, refunds, or chargebacks, ensuring a seamless experience for merchants",
    },
    {
      header: "Attract new customers",
      description:
        "A growing number of patrons prefer nBTC as a payment method. Merchants who offer this option tend to draw in more customers actively seeking out businesses that accept nBTC",
    },
    {
      header: "Free marketing and Press coverage",
      description:
        "By accepting nBTC, merchants gain exposure through free listings in directories, expanding their customer base. Additionally, embracing this trend can generate positive press and publicity for their business.",
    },
  ];

  return (
    <Layout>
      <section className=" flex flex-col tablet:flex-row min-h-screen px-[2.5%] justify-center tablet:justify-between tablet:items-center">
        <div className=" tablet:w-[60%] flex flex-col gap-10">
          <h1 className="font-bold text-[50px] tablet:text-[64px] leading-[60px] tablet:leading-[73.54px] text-transparent bg-clip-text bg-gradient-to-b from-[#5C1D70] to-[#2F073C]">
            nBTC <span className=" font-normal"> for Businesses</span>
          </h1>
          <PurpleishButton>
            <h2 className="text-left font-medium text-xl">
              Experience the Future of Money Transfer
            </h2>
            <p className=" mt-6 text-left font-light text-base">
              With nBTC, sending money becomes a seamless global affair.
              Operating 24/7, 365 days a year, nBTC enables you to transfer
              funds to anyone, anywhere in the world. You're in control, without
              the need for third-party approval or permission.
            </p>
          </PurpleishButton>
        </div>
        <aside>
          <Image
            src={imgref.polygonshape}
            alt="nBTC logo"
            className=" hidden tablet:inline-block"
          />
        </aside>
      </section>

      <section className="mt-[10vh] flex flex-col gap-[25px] min-h-screen px-[2.5%] items-center text-center">
        <h2 className=" text-[#611F76] font-bold text-3xl">
          Benefits for Businesses
        </h2>
        <p className=" text-[#1E1E1E] font-normal text-2xl">
          nBTC tokens offer a range of valuable advantages.
        </p>
        <div className=" mt-[25px] mx-auto flex flex-wrap justify-center items-center gap-8">
          {WhitecardArr.map((things, index) => (
            <WhiteCard
              key={index}
              header={things.header}
              description={things.description}
            />
          ))}
        </div>
        <div className="mt-[80px]">
          <PurpleishButton children={"Get Started with nBTC"} />
        </div>
      </section>
      <GetQuickOV ShowDev ShowIndi />
    </Layout>
  );
}

export default Business;
