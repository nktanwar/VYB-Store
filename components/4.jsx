import Image from "next/image";


export default function Four() {
    return (
        <div className="flex flex-col items-center w-full max-w-[840px] h-auto bg-yellow-500 rounded-2xl">
            <div className="flex flex-col items-center text-center">
                <h1 className="font-bold text-lg">
                    Build & customize your store front.
                </h1>
                <div className="text-sm mt-2">
                    Simply fill in the details to build your digital store. Once done, start selling your products to your audience!
                </div>
            </div>

            <div className="flex flex-col items-center mt-2">
                <Image 
                    src="/assets/start/4.png" 
                    alt="Store Customization Illustration" 
                    className="h-auto max-h-[300px] w-full object-contain" 
                    width={300}
                    height={300}
                />
            </div>
        </div>
    );
}
