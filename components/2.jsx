import Image from "next/image";
export default function Two() {
    return (
        <div className="flex flex-col items-center w-full max-w-[840px] h-auto bg-green-500 rounded-2xl p-4">
            <div className="flex flex-col items-center text-center">
                <h1 className="font-bold text-lg md:text-xl">
                    Monetize your influencer status: Earn money adding real value to your true followers!
                </h1>
                <div className="text-lg mt-2 md:text-xl">
                    Let VYB the money now!! It&apos;s here and you can withdraw it periodically.
                </div>
            </div>

            <div className="flex flex-col items-center mt-3">
                <Image 
                    src="/assets/start/2.png" 
                    alt="Monetization Illustration" 
                    className="h-auto max-h-[300px] w-full object-contain" 
                    width={280}
                    height={300}
                />
            </div>
        </div>
    );
}
