import { Hero } from "react-daisyui"
import IconButton from "../../../components/IconButton";
import {MdDeleteOutline, MdOutlineIosShare, MdOutlinePrint, MdSaveAlt} from "react-icons/all";
import {setDeleteRecipeId} from "../../../components/AppModals/modalSlice";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {selectRecipe} from "../state/editRecipeSelectors";

const Header = () => {
    const { title, id } = useAppSelector(state => selectRecipe(state))!;
    const dispatch = useAppDispatch();

    return (
        <Hero className="mb-2">
            <Hero.Content className="w-full justify-between">
                <h1 className="text-6xl text-primary">{title}</h1>

                <div className="flex gap-4 items-end">
                    <IconButton
                        icon={<MdSaveAlt />}
                        tooltipText='Save'
                        link={`save`}
                        size='sm'
                    />
                    <IconButton
                        icon={<MdOutlineIosShare />}
                        tooltipText='Share'
                        link={`share`}
                        size='sm'
                    />
                    <IconButton
                        icon={<MdOutlinePrint />}
                        tooltipText='Print'
                        link={`print`}
                        size='sm'
                    />
                    <IconButton
                        icon={<MdDeleteOutline />}
                        tooltipText='Delete'
                        handleClick={() => dispatch(setDeleteRecipeId(id))}
                        size='sm'
                    />
                </div>
            </Hero.Content>
        </Hero>
    )
}

export default Header;