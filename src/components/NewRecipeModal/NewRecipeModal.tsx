import {Button, Form, Input, InputGroup, Modal} from "react-daisyui";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectIsVisible, toggleModal} from "./modalSlice";

const NewRecipeModal = () => {
    const dispatch = useAppDispatch();
    const isVisible = useAppSelector(selectIsVisible);

    return (
        <Modal responsive open={isVisible}>
            <Button
                size="sm"
                shape="circle"
                className="btn-primary absolute right-2 top-2"
                onClick={() => dispatch(toggleModal())}
            >
                ✕
            </Button>
            <Modal.Header className="font-bold">
                Add a new recipe!
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Label className="font-bold" title="Title" />
                    <Input type="text" placeholder="Some bread..." bordered />

                    <Form.Label className="font-bold" title="Author" />
                    <Input type="text" placeholder="Some baker..." bordered />

                    <Form.Label className="font-bold" title="Description" />
                    <Input type="text" placeholder="Some stuff about bread..." bordered />
                </Form>
            </Modal.Body>

            <Modal.Actions>
                <Button className="btn-primary" onClick={() => dispatch(toggleModal())}>Create!</Button>
            </Modal.Actions>
        </Modal>
    );
}

export default NewRecipeModal;