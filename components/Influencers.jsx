export default function Influencers() {
    return (
        <div className="p-4">
            <div className="flex justify-center text-4xl text-custom-green font-bold">
                Our Influencers
            </div>
            <div className="flex flex-wrap justify-center mt-8">
                {/** Use an array to map through influencer images for cleaner code */}
                {['1', '2', '3', '4'].map((num) => (
                    <div key={num} className="flex justify-center w-1/2 sm:w-1/4 md:w-1/5 p-2">
                        <img
                            src={`/assets/our influencers/${num}.png`}
                            alt={`Influencer ${num}`}
                            className="w-full h-auto rounded-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
