import { Inter } from "next/font/google";
import Layout from "../../components/layout"; 
import Image from "next/image";
import imgref from "@/components/imgref";
import PurpleishButton2 from "@/components/purpleishButton2";
import Card from "@/components/Card";
import GetQuickOV from "@/components/getquickoverview";


const inter = Inter({ subsets: ["latin"] });

const why: React.FC = () => {
  const cardData = [
    {
      id: 1,
      image: "software.svg",
      title: "Software Development",
      description:
        "Creating diverse software types, including smart contracts,dApps, subnets, APIs, utilities, upgrades, bridges, and wallet software. We also support others in these endeavors.",
    },
    {
      id: 2,
      image: "nodeops.svg",
      title: "Node Operation",
      description:
        "Staking tokens and managing nodes/validators to ensure blockchain networks integrity and security.",
    },
    {
      id: 3,
      image: "content.svg",
      title: "Content Creation",
      description:
        "Producing written, video, and other content disseminated across websites, social media platforms, and more.",
    },
    {
      id: 4,
      image: "community.svg",
      title: "Community Support",
      description:
        "Serving as a resource for the community in numerous capacities.",
    },
    {
      id: 5,
      image: "nonprofit.svg",
      title: "Nonprofit Status and Revenue Generation",
      description:
        "The nBTC Foundation operates as a nonprofit organization. While some activities may generate revenue or investment returns, these funds are reinvested in the nBTC community and used to compensate our service providers.",
    },
    {
      id: 6,
      image: "tokentransactions.svg",
      title: "Token Transactions and Activities",
      description:
        "We, along with our associates, engage in transactions involving nBTC tokens and other cryptoassets associated with the nBTC public blockchain. These transactions may encompass private sales, open market exchanges, DeFi protocols, and other means. Some transactions may involve preferential pricing based on volume.",
    },
    {
      id: 7,
      image: "legal.svg",
      title: "Legal Disclaimer",
      description:
        "nBTC Foundation provides no explicit or implied representations, warranties, or guarantees regarding the nBTC public blockchain or any of our Software, Content, and Activities. We are not liable for any actions, proceedings, claims, damages, expenses, or liabilities arising from the use or interaction with our offerings.",
    },
  ];
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
                development, implementation, and maintenance of nBTC through
                grant, seed, and investment programs. We collaborate with
                service providers like nBTC Labs and its subsidiaries,
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
          <GetQuickOV ShowBiz ShowDev ShowIndi />

          <section className="mt-[52px] mb-[58px] flex flex-col px-[2.5%]">
            <header className="text-center mx-auto mb-6 lg:px-20">
              <h2 className="center-justify-text font-normal text-[30px] leading-[57.45px] flex flex-col items-center gap-[11px] mt-[58px]">
                Whether utilized for personal or business objectives, nBTC
                tokens provide numerous advantages as the foremost stable,
                easily tradable, and highly reliable.
              </h2>
            </header>

            {/* <div className="card-container"> */}
            <section className="flex flex-col min-h-screen px-[2.5%] items-center">
              {/* <div className="grid grid-cols-1 p-[15px] tablet:grid-cols-2 gap-[25px]"> */}
              <div className=" mt-[25px] mx-auto flex flex-wrap justify-center items-center gap-8">
                {cardData.map((card) => (
                  <Card
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    image={card.image}
                    description={card.description}
                  />
                ))}
              </div>
            </section>
            {/* </div> */}
          </section>
        </div>
      </Layout>
    );
};


export default why;
