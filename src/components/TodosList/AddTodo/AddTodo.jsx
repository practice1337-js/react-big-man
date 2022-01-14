import {connect} from "react-redux";
import {addTodo} from "../../../redux/actions/todosActions";
import {useState} from "react";

const AddTodoComponent = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();
        if (inputValue.length > 0) {
            addTodo(inputValue);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={formSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}/>
        </form>
    )
}

export const AddTodo = connect(
    state => state,
    { addTodo }
)(AddTodoComponent)