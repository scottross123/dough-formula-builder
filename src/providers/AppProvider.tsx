import {store} from "../store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

type AppProviderProps = {
    children: JSX.Element,
}

export const AppProvider = (props: AppProviderProps) => {
    const { children } = props;

    return (
        <Provider store={store}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </Provider>
    );
}