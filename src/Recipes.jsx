import { LuClock3 } from "react-icons/lu";
import { AiOutlineFire } from "react-icons/ai";
const Recipes = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-5">
                <div className="p-4 border-2 rounded-xl">
                    <img className="rounded-xl mb-6 w-full" src="./img/easy_chocolate_cake_31070_16x9.jpg" alt="" />
                    <div className="pb-4 border-b-2">
                        <h1 className="text-xl font-semibold mb-4">Chicken Teriyaki</h1>
                        <p className="text-base text-[#878787]">Delicious Japanese-style grilled chicken wit Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolore!</p>
                    </div>
                    <div className="py-6 border-b-2">
                        <h1 className="text-lg font-medium mb-4">Ingredients: 22</h1>
                        <ul className="list-disc text-[#878787] ml-5 space-y-3">
                            <li>500g ground beef</li>
                            <li>500g ground beef</li>
                            <li>500g ground beef</li>
                        </ul>
                    </div>
                    <div className="flex gap-10 my-6">
                        <p className="flex items-center gap-1 text-base text-[#282828CC]"><LuClock3 className="text-lg" />30 minutes</p>
                        <p className="flex items-center gap-1 text-base text-[#282828CC]"><AiOutlineFire className="text-xl" />300 Calories</p>
                    </div>
                    <button className="px-6 py-3 bg-[#0BE58A] text-[#150B2B] rounded-[50px] font-medium">Want to Cook</button>
                </div>
                <div className="p-4 border-2 rounded-xl">
                    <img className="rounded-xl mb-6" src="./img/easy_chocolate_cake_31070_16x9.jpg" alt="" />
                    <div className="pb-4 border-b-2">
                        <h1 className="text-xl font-semibold mb-4">Chicken Teriyaki</h1>
                        <p className="text-base text-[#878787]">Delicious Japanese-style grilled chicken wit Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolore!</p>
                    </div>
                    <div className="py-6 border-b-2">
                        <h1 className="text-lg font-medium mb-4">Ingredients: 22</h1>
                        <ul className="list-disc text-[#878787] ml-5 space-y-3">
                            <li>500g ground beef</li>
                            <li>500g ground beef</li>
                            <li>500g ground beef</li>
                        </ul>
                    </div>
                    <div className="flex gap-10 my-6">
                        <p className="flex items-center gap-1 text-base text-[#282828CC]"><LuClock3 className="text-lg" />30 minutes</p>
                        <p className="flex items-center gap-1 text-base text-[#282828CC]"><AiOutlineFire className="text-xl" />300 Calories</p>
                    </div>
                    <button className="px-6 py-3 bg-[#0BE58A] text-[#150B2B] rounded-[50px] font-medium">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default Recipes;