type WhiteCardProps = {
  header: string;
  description: string;
};

function WhiteCard({ header, description }: WhiteCardProps) {
  return (
    <div className=" bg-white shadow-lg py-[61px] px-5 max-w-[288px] text-center">
      <h3 className=" text-[#611F76] font-medium text-xl">{header}</h3>
      <p className=" mt-6 text-[#611F76] text-opacity-70 font-normal text-base">
        {description}
      </p>
    </div>
  );
}

export default WhiteCard;
