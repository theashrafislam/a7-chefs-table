const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="bg-[url('./src/assets/image/banner-img.png')] bg-no-repeat bg-cover w-full h-[700px]">
                <div className="py-48 text-center text-[#FFFFFF]">
                    <h1 className="text-5xl font-bold text-center leading-[76px] mb-6">Discover an exceptional cooking <br />class tailored for you!</h1>
                    <p className="text-lg">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />problems to become an exceptionally well world-class Programmer.</p>
                    <div className="mt-10 flex gap-10 justify-center items-center">
                        <button className="py-5 px-6 bg-[#0BE58A] text-[#150B2B] text-xl rounded-[50px] font-semibold">Explore Now</button>
                        <button className="py-5 px-6 text-[#FFFFFF] text-xl rounded-[50px] font-semibold border-2 border-solid border-white">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;