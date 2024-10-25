export function Mid() {
    return (
      <div className="flex flex-col md:flex-row justify-between h-auto md:h-[651px] w-full md:w-[1200px] p-4 md:p-0">
        {/* Left Section (Text and Buttons) */}
        <div className="flex flex-col items-center md:items-start">
          {/* Image 1 */}
          <div className="mt-4 md:ml-10">
            <img src="/words.png" alt="text" className="max-w-full" />
          </div>
  
          {/* Image 2 */}
          <div className="mt-10 md:ml-10">
            <img src="/words1.png" alt="text" className="max-w-full" />
          </div>
  
          {/* Buttons */}
          <div className="flex gap-5 mt-10 md:ml-10">
            {/* Demo Store Button */}
            <div
              className="w-[144px] h-[54px] flex justify-center items-center text-xl rounded-lg font-semibold"
              style={{ backgroundColor: "#00DC82" }}
            >
              <button>Demo Store</button>
            </div>
  
            {/* Join Waitlist Button */}
            <div
              className="w-[144px] h-[54px] flex justify-center items-center text-xl rounded-lg font-semibold border-2 border-transparent bg-clip-border"
              style={{
                borderImage: "linear-gradient(to right, #FF5D5D, #4794FF) 1",
              }}
            >
              <button className="w-full h-full text-transparent bg-clip-text bg-gradient-to-r from-[#FF5D5D] to-[#4794FF] rounded-lg">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
  
        {/* Right Section (Hero Image) */}
        <div className="mt-8 md:mt-0 md:ml-10 text-white w-full md:w-1/2 h-auto">
          <img
            src="/assets/Hero section/iamge.png"
            alt="hero-section"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }
  