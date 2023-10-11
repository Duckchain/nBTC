type WhiteCardProps = {
  header: string;
  description: string;
  hideTitle?: boolean;
};

function WhiteCard({ header, description, hideTitle }: WhiteCardProps) {
  return (
    <div className=" bg-white shadow-lg py-[31.5px] px-5 max-w-[288px] text-center">
      {hideTitle ? null : <h3 className=" text-[#611F76] font-medium text-xl">{header}</h3>}
      <p className=" mt-6 text-[#611F76] text-opacity-70 font-normal text-base">
        {description}
      </p>
    </div>
  );
}

export default WhiteCard;
