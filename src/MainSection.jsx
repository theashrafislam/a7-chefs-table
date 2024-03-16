
import Recipes from "./Recipes";
import Sidebar from "./Sidebar";
const MainSection = () => {
    return (
        <div>
            <div className="text-center my-28">
                <h1 className="text-4xl font-semibold mb-6">Our Recipes</h1>
                <p className="text-base text-[#150B2B99] leading-6">Dive into our collection of delectable recipes, ranging from comforting classics to innovative creations,<br /> perfect for every occasion and palate.</p>
            </div>
            <div className="flex gap-8 mb-20">
                <div className="w-2/3">
                    <Recipes></Recipes>
                </div>

                <div className="w-1/3">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default MainSection;