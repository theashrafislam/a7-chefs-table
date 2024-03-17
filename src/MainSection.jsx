import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";
import Recipes from "./Recipes";
import Sidebar from "./Sidebar";
const MainSection = ({ recipesItem }) => {
    // console.log(recipesItem)
    const [wantToCook, setWantToCook] = useState([]);
    // console.log(wantToCook);
    const handleWantToCook = (recipe) => {
        // console.log(recipe)
        const isExist = wantToCook.find(item => item.recipe_id === recipe.recipe_id);
        // console.log(isExist);
        if (!isExist) {
            setWantToCook([...wantToCook, recipe]);
        }
        else {
            toast.error('Recipe already exists');
        }
        // setWantToCook([])
    }

    const [currentlyCooking, setCurrentlyCooking] = useState([]);
    // const [currentlyId, setCurrentlyId] = useState([]);
    const handlePrepareClick =(item, id) => {
        setCurrentlyCooking([...currentlyCooking, item]);
        // setCurrentlyId(id)
        const forRemove = wantToCook.filter(item => item.recipe_id !== id);
        // console.log(wantToCook, id)
        setWantToCook(forRemove);

    }

    return (
        <div>
            <div className="text-center my-28">
                <h1 className="text-4xl font-semibold mb-6">Our Recipes</h1>
                <p className="text-base text-[#150B2B99] leading-6">Dive into our collection of delectable recipes, ranging from comforting classics to innovative creations,<br /> perfect for every occasion and palate.</p>
            </div>
            <div className="flex gap-8 mb-20">
                <div className="w-2/3 grid grid-cols-2 gap-5">
                    {
                        recipesItem.map((recipes, index) => <Recipes key={index} recipe={recipes} handleWantToCook={handleWantToCook}></Recipes>)
                    }
                </div>

                <div className="w-1/3">
                    <Sidebar currentlyCooking={currentlyCooking} setCurrentlyCooking={setCurrentlyCooking} handlePrepareClick={handlePrepareClick} wantToCookItems={wantToCook}></Sidebar>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainSection;