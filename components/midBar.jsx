import Image from "next/image";
export default function Midbar() {
    return (
        <div >
            <div className=" bg-black sm:w-[1180px] w-full rounded-xl ">
                <div className="flex items-center justify-around h-[112px] text-white text-center  text-2xl font-extrabold  ">
                    <div>Travel</div>
                    <div>Digital</div>
                    <div>Brand</div>
                    <div>Merch</div>
                </div>
            </div>

            <div className="mt-8 sm::w-[1180px] sm:h-[1897px] ">

                <Image src="/mid.png" alt="img"
                    className="w-full h-auto  sm:w-[1180px] dm:h-[1897px] rounded-2xl"
                    width={1000}
                    height={1400}
                    layout="fixed"

                   
                />

            </div>


            <div className="mt-8 flex flex-col md:flex-row justify-between md:h-[748px] md:w-[1180px]">
                <div className="flex items-center">
                    <Image src="/assets/text3.png" alt="text"
                    width={500}
                    height={700}
                    />
                </div>
                <div className="">
                    <Image src="/assets/belowmid.png" alt="//img"
                        className="max-w-full h-auto md:h-[748px] md:w-[726px]"
                        width={700}
                        height={700}
                         />
                </div>

            </div>

        </div>


    );
}







