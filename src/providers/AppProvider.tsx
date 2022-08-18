import {store} from "../store/store";
import { Provider } from "react-redux";

type AppProviderProps = {
    children: JSX.Element,
}

export const AppProvider = (props: AppProviderProps) => {
    const { children } = props;

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}