import { useEffect } from "react";
import AddTodo from "./components/AddTodo";
import { collection, getDocs } from "firebase/firestore";
import { fillTodo } from "./utils/TodoSlice";
import { database } from "./utils/firebase";
import { useDispatch } from "react-redux";
import TodoList from "./components/TodoList";

function App() {
  const dispatch = useDispatch();
  const getTodos = async () => {
    let arr = [];
    const querySnapshot = await getDocs(collection(database, "todos"));
    querySnapshot.forEach((doc) => {
      arr.push({ id: doc.id, ...doc.data() });
    });
    console.log(arr);
    dispatch(fillTodo(arr));
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <div className="bg-gray-900 shadow-lg m-auto mt-11 mb-7 w-6/12 p-6 h-45  border-gray-600 border-2 rounded-md text-white">
        <h1 className="text-center text-3xl font-bold">Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
