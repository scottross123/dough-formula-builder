import MagnifierIcon from "./MagnifierIcon";

const Search = () => {
    return (
        <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
            <span className="left-0 flex items-center pr-3">
                <MagnifierIcon color={"#8C001D"}/>
            </span>

            <input type="search" name="name" placeholder="Search..."
                   className="w-4/5 py-2 border-b-2 border-red outline-none" />
        </div>
    )
}

export default Search;