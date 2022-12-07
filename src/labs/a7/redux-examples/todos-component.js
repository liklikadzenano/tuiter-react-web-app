import React, {useState} from "react"; //importing useState to with local state
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle}
    from "./reducers/todos-reducer";

const Todos = () => {
    const todos
        = useSelector(state => state.todos);
    const [todo, setTodo] = useState({do: ''}); //creates local state variable of toDos
    // the below todoChangeHandler handles keyStroke changnes in input fields

    //get dispatcher to invoke reducer functions
    const dispatch = useDispatch();

    // handle checkbox click events
    const toggleTodoDone = (todo) => {
        dispatch(todoDoneToggle(todo))
    }


    //this is a delete clickhandler
    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index))
    }

    //handel click events of the button
    const createTodoClickHandler = () => {
        //call reducer function passing newToDo as playload in the action object
        dispatch(addTodo(todo))
    }


    const todoChangeHandler = (event) => {
        //gets data from the input field
        const doValue = event.target.value;
        //creates new neTodo which is a object instance
        const newTodo = {
            //sets the property
            do: doValue
        };
        //changes the local state of the variable.
        setTodo(newTodo);
    }

    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary w-25
                          float-end">
                        Create</button>

                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control  w-75"/>
                </li>

                {
                    todos.map((todo, index)  =>
                                  <li className="list-group-item">
                                      <button onClick={() =>
                                          deleteTodoClickHandler(index)}
                                              className="btn btn-danger
                      float-end ms-2">
                                          Delete
                                      </button>

                                      <input type="checkbox"
                                             checked={todo.done}
                                             onChange={() =>
                                                 toggleTodoDone(todo)}
                                             className="me-2"/>
                                      {todo.do}
                                  </li>
                    )
                }


            </ul>
        </>
    );
};
export default Todos;