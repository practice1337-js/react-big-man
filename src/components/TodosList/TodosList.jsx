import {connect} from "react-redux";
import {removeTodo, resetTodos, getPlanets} from "../../redux/actions/todosActions";
import {AddTodo} from "./AddTodo/AddTodo";

const TodosListComp = ({ todos, resetTodos, removeTodo, getPlanets }) => {
    return (
        <>
            <h2>Todos</h2>
            <AddTodo />
            <ul>
                {
                    todos && todos.map(todo => (
                        <li key={todo.id}>
                            <span>{ todo.name }</span>{" "}
                            <button onClick={() => removeTodo(todo.id)}>delete</button>
                        </li>
                    ))
                }
            </ul>
            <div>
                <button onClick={resetTodos}>reset</button>{" "}
                <button onClick={getPlanets}>get planets</button>{" "}
            </div>
        </>
    )
}

export const TodosList = connect(
    state => state,
    { resetTodos, removeTodo, getPlanets }
)(TodosListComp);