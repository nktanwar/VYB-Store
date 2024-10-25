import Carousel from "./Scrolldivs";

export default function HowToStart() {
    return (
        <div className="p-4">
            <div className="flex justify-center text-4xl text-custom-green font-bold">
                How To Get Started
            </div>
            <div className="mt-10 flex justify-center">
                {/* You might want to ensure your Carousel component is responsive too */}
                <div className="w-full max-w-screen-lg h-auto">
                    <Carousel />
                </div>
            </div>
        </div>
    );
}
