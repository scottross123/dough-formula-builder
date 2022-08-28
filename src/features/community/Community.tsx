import NewRecipes from "./components/NewRecipes";
import TopRecipes from "./components/TopRecipes";

const Community = () => {
    return (
        <div className="page flex-col items-center gap-8">
            <input type="text" placeholder="Search community recipes…" className="input input-bordered w-2/3"/>

            <div className="w-full h-1/2 flex justify-evenly">
                <NewRecipes />
                <TopRecipes />
            </div>
        </div>
    );
}

export default Community;