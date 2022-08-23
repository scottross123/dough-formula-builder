import { BiErrorAlt } from "react-icons/Bi";

const NotFound = () => {
    return (
        <main className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl text-red mb-4">Page not found...</h1>
            <BiErrorAlt color="#8C001D" fontSize="6rem" />
        </main>
    );
}

export default NotFound;