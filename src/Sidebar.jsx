const Sidebar = ({ wantToCook }) => {
    console.log(wantToCook)
    return (
        <div className="border-2 rounded-xl">
            {/* want to cook section  */}
            <div className="flex items-center justify-center p-4">
                <h1 className="text-2xl font-semibold pb-2 border-b-2 w-[350px] text-center">Want to cook: {wantToCook.length}</h1>
            </div>
            <div className="mb-4">
                <div className="flex gap-2 w-96 ml-10 text-[#878787]">
                    <h3 className="w-3/6">Name</h3>
                    <h3 className="w-[100px]">Time</h3>
                    <h3 className="w-3/6 pl-4">Calories</h3>
                </div>
            </div>
            {
                wantToCook.map((item, index) => (
                    // console.log(item)

                    <div key={index} className="p-4 flex gap-3 items-center bg-[#28282808] mb-8">
                        <h3 className="1/11">{index + 1}</h3>
                        <h3 className="w-[170px]">{item.recipe_name}</h3>
                        <h3 className="w-2/11">{item.preparing_time}</h3>
                        <h3 className="w-2/11 ml-4">{item.calories}</h3>
                        <button className="w-3/11 py-3 px-3 text-base font-medium bg-[#0BE58A] rounded-[10px]">Preparing</button>
                    </div>
                ))
            }
            {/* currently cooking section  */}
            <div>
                <div className="flex items-center justify-center p-4">
                    <h1 className="text-2xl font-semibold pb-2 border-b-2 w-[350px] text-center">Currently cooking: 02</h1>
                </div>
                <div className="mb-4">
                    <div className="flex gap-2  ml-10 text-[#878787]">
                        <h3 className="w-3/6">Name</h3>
                        <h3 className="w-3/6 ml-10">Time</h3>
                        <h3 className="w-3/6">Calories</h3>
                    </div>
                </div>
                <div className="p-4 flex gap-3 items-center bg-[#28282808] mb-8">
                    <h3 className="1/11">1</h3>
                    <h3 className="w-[330px]">i am ashraful islam. i afgfgfasm 20 year s old </h3>
                    <h3 className="w-3/6">20 minutes</h3>
                    <h3 className="w-3/6">400 calories</h3>

                </div>

                <div className="p-4 flex gap-3 items-center bg-[#28282808] mb-8">
                    <h3 className="1/11">1</h3>
                    <h3 className="w-[330px]">i am ashraful islam. i afgfgfasm 20 year s old </h3>
                    <h3 className="w-3/6">20 minutes</h3>
                    <h3 className="w-3/6">400 calories</h3>

                </div>

            </div>
        </div>
    );
};

export default Sidebar;