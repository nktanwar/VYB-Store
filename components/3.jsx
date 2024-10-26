import Image from "next/image";
export default function Three() {
    return (
        <div className="flex flex-col items-center w-full max-w-[840px] h-auto bg-blue-500 rounded-2xl">
            <div className="flex flex-col items-center text-center">
                <h1 className="font-bold text-lg">
                    Call audience to your store. Easily integrate links to content.
                </h1>
                <div className="text-lg mt-2">
                    After setting up your products, it&apos;s time to go public. Put your store link in your Instagram bio and let&apos;s make posts together!
                </div>
            </div>

            <div className="flex flex-col items-center mt-0">
                <Image 
                    src="/assets/start/3.png" 
                    alt="Monetization Illustration" 
                    className="h-auto max-h-[330px] w-full object-contain"
                    width={290}
                    height={330} 
                />
            </div>
        </div>
    );
}
