import {atom} from "jotai";
import {atomWithStorage} from "jotai/utils";
import {dummyTodos} from "./utils";

export const todosAtom=atomWithStorage("todos",[...dummyTodos])
export const darkMode=atomWithStorage("darkMode",false)