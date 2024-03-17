import { IoIosSearch } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
const Navbar = () => {
    return (
        <div className="grid grid-cols-3 justify-between items-center py-8">
            <div>
                <h2 className="text-[#150B2B] text-3xl font-bold">Recipe Calories</h2>
            </div>
            <div className="flex gap-16 text-base text-[#150B2BB3]">
                <p>Home</p>
                <p>Recipes</p>
                <p>About</p>
                <p>Search</p>
            </div>
            <div className="flex gap-3 items-center justify-end">
                <div className="w-3/5 flex items-center bg-[#150b2b0d] py-3 px-6 rounded-[50px]">
                    <span className="text-2xl">< IoIosSearch /></span>
                    <input className="text-lg p-1 w-full bg-[#F3F3F4]" type="text" name="" id="" placeholder="Search" />
                </div>
                <div className="">
                    <div className="bg-[#0BE58A] w-16 h-16 rounded-full flex justify-center items-center"><span className="text-5xl"><RiAccountCircleLine /></span></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;