

const Carousel = () => {


  return (
    <div className="flex relative flex-col w-full h-full">
      <div className="slides-container relative overflow-hidden flex flex-1">
        <div className="slides-inner relative w-full h-full overflow-hidden">
          <div className="slide absolute flex items-center justify-center h-full w-full">
            1
          </div>
          <div className="slide absolute flex items-center justify-center h-full w-full">
            2
          </div>
          <div className="slide absolute flex items-center justify-center h-full w-full">
            3
          </div>
          <div className="slide absolute flex items-center justify-center h-full w-full">
            4
          </div>
          <div className="slide absolute flex items-center justify-center h-full w-full">
            5
          </div>
          <div className="slide absolute flex items-center justify-center h-full w-full">
            6
          </div>
          <div className="slide absolute flex items-center justify-center h-full w-full">
            7
          </div>
          <div className="slide absolute flex items-center justify-center h-full w-full">
            8
          </div>
          <div className="slide absolute flex items-center justify-center h-full w-full">
            9
          </div>
          <div className="slide absolute flex items-center justify-center h-full w-full">
            10
          </div>
        </div>
      </div>

      <div className="controls p-2 flex items-center justify-center h-16 min-h-16">
        <button id="prevButton" className=" py-2 px-6">
          Prev
        </button>
        <button id="nextButton" className=" py-2 px-6">
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
