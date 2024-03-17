const Sidebar = ({ wantToCookItems, currentlyCooking, handlePrepareClick}) => {

    return (
        <div className="border-2 rounded-xl">
            {/* want to cook section  */}
            <div className="flex items-center justify-center p-4">
                <h1 className="text-2xl font-semibold pb-2 border-b-2 w-[350px] text-center">Want to cook: {wantToCookItems.length}</h1>
            </div>
            <div className="mb-4">
                <div className="flex gap-2 w-96 ml-10 text-[#878787]">
                    <h3 className="w-3/6">Name</h3>
                    <h3 className="w-[80px]">Time</h3>
                    <h3 className="w-3/6 pl-4">Calories</h3>
                </div>
            </div>
            
            {wantToCookItems.map((item, index) => (
                    <div key={index} className="p-4 flex gap-3 items-center bg-[#28282808] mb-8">
                        <h3 className="1/11">{index + 1}</h3>
                        <h3 className="w-[170px]">{item.recipe_name}</h3>
                        <h3 className="w-[70px]">{item.preparing_time}</h3>
                        <h3 className="w-[100px] ml-4">{item.calories}</h3>
                        <button onClick={() => handlePrepareClick(item, item.recipe_id)} className="w-3/11 py-3 px-3 text-base font-medium bg-[#0BE58A] rounded-[10px]" >Preparing</button>
                    </div>))}
            {/* currently cooking section  */}
            <div>
                <div className="flex items-center justify-center p-4">
                    <h1 className="text-2xl font-semibold pb-2 border-b-2 w-[350px] text-center">Currently cooking: {currentlyCooking.length}</h1>
                </div>
                <div className="mb-4">
                    <div className="flex gap-2  ml-10 text-[#878787]">
                        <h3 className="w-3/6">Name</h3>
                        <h3 className="w-3/6 ml-10">Time</h3>
                        <h3 className="w-3/6">Calories</h3>
                    </div>
                </div>
                {
                    currentlyCooking.map((item, index) => (
                        <div key={index} className="p-4 flex gap-3 items-center bg-[#28282808] mb-8">
                            <h3 className="1/11">{index + 1}</h3>
                            <h3 className="w-[330px]">{item.recipe_name}</h3>
                            <h3 className="w-3/6">{item.preparing_time}</h3>
                            <h3 className="w-3/6">{item.calories}</h3>
                        </div>
                    ))
                        
                }
            </div>
        </div>
    );
};

export default Sidebar;