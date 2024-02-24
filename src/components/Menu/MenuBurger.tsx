type MenuBurgerProps = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuBurger = ({ openModal, setOpenModal }: MenuBurgerProps) => {
  return (
    <button
      onClick={() => setOpenModal(!openModal)}
      className="ipad:hidden flex flex-col gap-1 relative"
    >
      <div
        className={` ${
          openModal ? "absolute" : ""
        } sm:h-[5px] sm:w-[20px] w-3 h-[3px] bg-white self-end rounded-md`}
      ></div>
      <div
        className={` ${
          openModal ? "hidden" : ""
        } sm:h-[5px] sm:w-[30px] w-5 h-[3px] bg-white self-end rounded-md`}
      ></div>
      <div
        className={` ${
          openModal ? " absolute" : ""
        } sm:h-[5px] sm:w-[20px] w-3 h-[3px] bg-white self-end rounded-md`}
      ></div>
    </button>
  );
};
