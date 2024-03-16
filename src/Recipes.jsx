import { LuClock3 } from "react-icons/lu";
import { AiOutlineFire } from "react-icons/ai";
const Recipes = ({ recipe, handleWantToCook}) => {
    // console.log(recipe)
    const {recipe_image, recipe_name, short_description, preparing_time, calories, ingredients} = recipe;
    return (
        <div>
            <div className="p-4 border-2 rounded-xl">
                <img className="rounded-xl mb-6 w-full h-fit" src={recipe_image} alt="" />
                <div className="pb-4 border-b-2">
                    <h1 className="text-xl font-semibold mb-4">{recipe_name}</h1>
                    <p className="text-base text-[#878787]">{short_description}</p>
                </div>
                <div className="py-6 border-b-2">
                    <h1 className="text-lg font-medium mb-4">Ingredients {ingredients.length}</h1>
                    <ul className="list-disc text-[#878787] ml-5 space-y-3">
                        <li>{ingredients[0]}</li>
                        <li>{ingredients[1]}</li>
                        <li>{ingredients[2]}</li>
                        <li>{ingredients[3]}</li>
                    </ul>
                </div>
                <div className="flex gap-10 my-6">
                    <p className="flex items-center gap-1 text-base text-[#282828CC]"><LuClock3 className="text-lg" />{preparing_time}</p>
                    <p className="flex items-center gap-1 text-base text-[#282828CC]"><AiOutlineFire className="text-xl" />{calories}</p>
                </div>
                <button onClick={() => handleWantToCook(recipe)} className="px-6 py-3 bg-[#0BE58A] text-[#150B2B] rounded-[50px] font-medium">Want to Cook</button>
            </div>
        </div>
    );
};

export default Recipes;