import {Button, Form, Input, InputGroup, Modal, Textarea} from "react-daisyui";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import { selectIsCreateVisible, toggleCreateRecipeModal } from "./modalSlice";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Recipe } from "../../features/recipe/types";
import { v4 as uuidv4 } from "uuid";
import { useAddRecipeMutation } from "../../api/recipesApi";
import {useNavigate} from "react-router";

const CreateRecipeModal = () => {
    const dispatch = useAppDispatch();
    const isCreateVisible: boolean = useAppSelector(selectIsCreateVisible);
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [addRecipe, { isLoading }] = useAddRecipeMutation();
    const navigate = useNavigate();

    const handleClick = async () => {
        const newRecipe: Recipe = {
            id: uuidv4(),
            title: title,
            description: description,
            author: author,
            tags: [],
            yields: {
                unitWeight: 0,
                unitQuantity: 0,
                wasteFactor: 0,
            },
            process: {
                mix: {
                    method: "improved",
                },
                ddt: 0,
                bulkFermentationTime: 0,
                preshape: {
                    time: 0,
                    shape: ""
                },
                finalProof: {
                    time: 0,
                    temp: 0
                },
                shape: "",
                bake: [
                    {
                        id: uuidv4(),
                        time: 0,
                        temp: 0
                    }
                ]
            },
            formula: {
                flours: [
                    {
                        id: uuidv4(),
                        name: "Flour",
                        ratio: 1
                    }
                ],
                ingredients: []
            },
        }

        try {
            await addRecipe(newRecipe);
        } catch {
            alert("thats awkward")
        }
        dispatch(toggleCreateRecipeModal());
        navigate(`/recipes/${newRecipe.id}`, { replace: true });
    }

    return (
        <Modal responsive open={isCreateVisible}>
            <Button
                size="sm"
                shape="circle"
                className="btn-primary absolute right-2 top-2"
                onClick={() => dispatch(toggleCreateRecipeModal())}
            >
                ✕
            </Button>
            <Modal.Header className="font-bold">
                Add a new recipe!
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Label className="font-bold" title="Title" />
                    <Input
                        type="text"
                        placeholder="Some bread..."
                        bordered
                        color="primary"
                        value={title}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                    />

                    <Form.Label className="font-bold" title="Author" />
                    <Input
                        type="text"
                        placeholder="Some baker..."
                        bordered
                        color="primary"
                        value={author}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)}
                    />

                    <Form.Label className="font-bold" title="Description" />
                    <Textarea
                        placeholder="Some stuff about bread..."
                        bordered
                        color="primary"
                        value={description}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                    />
                </Form>
            </Modal.Body>

            <Modal.Actions>
                <Button className="btn-primary" loading={isLoading} onClick={handleClick}>Create!</Button>
            </Modal.Actions>
        </Modal>
    );
}

export default CreateRecipeModal;