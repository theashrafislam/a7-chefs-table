const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="bg-[url('./src/assets/image/banner-img.png')] bg-no-repeat bg-cover w-full h-[700px]">
                <div className="py-48 text-center text-[#FFFFFF]">
                    <h1 className="text-5xl font-bold text-center leading-[76px] mb-6">Discover an exceptional cooking <br />class tailored for you!</h1>
                    <p className="text-lg">Indulge in a personalized culinary journey with expert chefs, exploring diverse cuisines and mastering <br/>unique recipes for an unforgettable cooking class experience!</p>
                    <div className="mt-10 flex gap-10 justify-center items-center">
                        <button className="py-5 px-6 bg-[#0BE58A] text-[#150B2B] text-xl rounded-[50px] font-semibold hover:bg-transparent hover:text-white hover:border-2 hover:border-solid hover:border-white">Explore Now</button>
                        <button className="py-5 px-6 text-[#FFFFFF] text-xl rounded-[50px] font-semibold border-2 border-solid border-white hover:bg-[#0BE58A] hover:text-[#150B2B] hover:border-none">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;