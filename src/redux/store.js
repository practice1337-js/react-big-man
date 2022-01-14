import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {todosReducer} from "./reducers/todosReducer";
import thunk from "redux-thunk";

export const store = createStore(todosReducer, applyMiddleware(thunk));
export const TodosProvider = (props) => (
    <Provider store={store}>
        { props.children }
    </Provider>
);