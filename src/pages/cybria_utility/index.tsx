import Layout from "@/components/layout";

function index() {
  const PurpleToBlackGradient =
    "text-transparent bg-clip-text bg-gradient-to-b from-[#5C1D70] to-[#2F073C]";
  return (
    <Layout>
      <div className=" min-h-[100vh] min-w-screen grid place-items-center">
        <ul className=" flex flex-col gap-6 mt-6 mx-16 font-bold text-xl tablet:text-4xl tablet:leading-[45.96px] text-left tablet:text-center">
          {CybriaUtility.map((util) => (
            <li className={`${PurpleToBlackGradient}`}>{util}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default index;

const CybriaUtility = [
  "Payment Gateway for individuals and business",
  "Defi DAPPs",
  "BTC L2",
];
