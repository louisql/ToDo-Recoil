import { selector } from "recoil";
import todoState from "../atoms/TodoState";

const totalTodos = selector({
    key: 'totalTodos',
    get: ({get}) => { //get property used to access any of my recoil state - passing an atom to this property
        const todoStateSelector = get(todoState);

        return todoStateSelector.length; //how many todos i hve in my todo state
    },
});

export default totalTodos;