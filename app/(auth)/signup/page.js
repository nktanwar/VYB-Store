export default function Midbar() {
  return (
      <div className="w-full max-w-[1180px] mx-auto">
          {/* Top Bar */}
          <div className="bg-black rounded-xl">
              <div className="flex items-center justify-around h-[112px] text-white text-center text-2xl font-extrabold">
                  <div>Travel</div>
                  <div>Digital</div>
                  <div>Brand</div>
                  <div>Merch</div>
              </div>
          </div>

          {/* Main Image */}
          <div className="mt-8">
              <img
                  src="/mid.png"
                  alt="img"
                  className="w-full h-auto rounded-2xl"
              />
          </div>

          {/* Bottom Section */}
          <div className="mt-8 flex flex-col md:flex-row justify-between h-auto">
              {/* Left Text Image */}
              <div className="flex items-center mb-4 md:mb-0">
                  <img
                      src="assets/text3.png"
                      alt="text"
                      className="max-w-full h-auto"
                  />
              </div>
              {/* Right Bottom Image */}
              <div className="flex flex-col items-center md:items-start">
                  <img
                      src="/assets/belowmid.png"
                      alt="//img"
                      className="h-auto w-full max-w-[726px]"
                  />
              </div>
          </div>
      </div>
  );
}
