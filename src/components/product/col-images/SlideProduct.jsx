import { useRef, useState, useEffect } from "react";
import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";

export default ({
  ARRAY_IMG_SMALL = [],
  ARRAY_IMGS = [],
  isOpenModal = false,
  handleOpenModal = () => {},
  handleCloseModal = null,
  ...props
}) => {
  const btnSlider = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    isOpenModal && btnSlider.current.classList.remove("md:hidden");
  }, [isOpenModal]);

  const handleClickNext = () => {
    // forma bluuweb
    // if(index === ARRAY_IMGS.length - 1) return setIndex(0)
    // setIndex(index  + 1)
    setIndex(
      index === ARRAY_IMGS.length - 1
        ? index - ARRAY_IMGS.length + 1
        : index + 1
    );
  };

  const handleClickPrev = () => {
    // forma bluuweb
    // if(index === 0) return setIndex(ARRAY_IMGS.length - 1)
    // setIndex(index - 1)
    setIndex(index === 0 ? index + ARRAY_IMGS.length - 1 : index - 1);
  };
  return (
    <section {...props}>
      {isOpenModal && (
        <button
          onClick={handleCloseModal}
          className="text-right text-2xl font-bold md:col-span-4"
        >
          X
        </button>
      )}
      <div className="relative col-span-4">
        <img
          onClick={handleOpenModal}
          src={ARRAY_IMGS[index]}
          alt=""
          className="aspect-[16/13] w-full md:aspect-[16/17] md:cursor-pointer md:rounded-md"
        />
        <div
          ref={btnSlider}
          className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4 md:hidden"
        >
          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-white"
            onClick={handleClickPrev}
          >
            <PrevIcon />
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-white"
            onClick={handleClickNext}
          >
            <NextIcon />
          </button>
        </div>
      </div>

      {ARRAY_IMG_SMALL.map((smallImg, i) => (
        <div onClick={() => {setIndex(i)}} key={smallImg} className="relative rounded-md overflow-hidden cursor-pointer">
          <img
            src={smallImg}
            alt=""
            className="hidden md:block md:rounded-md"
          />
          <span className={`absolute top-0 hover:bg-[rgba(255,255,255,0.5)] h-full w-full ${i === index && 'bg-[rgba(255,255,255,0.5)]'}`}></span>
        </div>
      ))}
    </section>
  );
};
