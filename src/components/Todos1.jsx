// // import React, { useState } from 'react'
// // import { useGetTodosQuery ,useAddTodoMutation,
// //     useUpdateTodoMutation,
// //     useDeleteTodoMutation,} from '../features/todo/apiSlice'
// // function Todos1() {
// //     const{data:todos ,isLoading,error}= useGetTodosQuery();
// //     if (isLoading) return <p>Loading....</p>;
// //     if (error) return <p>Error loading todos</p>

// //     const [addTodo] = useAddTodoMutation();
// //   const [updateTodo] = useUpdateTodoMutation();
// //   const [deleteTodo] = useDeleteTodoMutation();
// //     const [newTodo,setNewTodo]=useState('');

// //     const handleAddTodo = async ()=>{
// //         if(newTodo.trim()){
// //             await addTodo({title:newTodo,completed: false});
// //             setNewTodo("");
// //         }
// //     };
// //     const handleUpdateTodo = async (todo) => {
// //         await updateTodo({ id: todo.id, title: todo.title + " (updated)", completed: !todo.completed });
// //       };
// //     const handleDeleteTodo=async (id)=>{
// //         await deleteTodo(id);
// //     };
    


// //   return (
// //     <div>
// //       <h1>Todos</h1>
// //       <input   type='text'
// //        value={newTodo} 
// //       onChange={(e)=>setNewTodo(e.target.value)}
// //       placeholder='enter new todo'
// //        />
// //        <button onClick={handleAddTodo}>Add Todo</button>
// //       <ul>
// //         {todos.map(todo => (
// //           <li key={todo.id} style={{display:"flex", gap:"10px"}}   >
// //             <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}> 
// //             {todo.title}
// //             </span>
// //             <button onClick={()=>handleUpdateTodo(todo)}>Update</button>
// //             <button onClick={()=>handleDeleteTodo(todo.id)}>Delete</button>
// //             </li>
// //         ))}
// //       </ul>
// //     </div>
// //   )
// // }

// // export default Todos1
// import React, { useState } from "react";
// import {
//   useGetTodosQuery,
//   useAddTodoMutation,
//   useUpdateTodoMutation,
//   useDeleteTodoMutation,
// } from "../features/todo/apiSlice";

// function Todos1() {
//   const { data: todos, isLoading, error } = useGetTodosQuery();
//   const [addTodo] = useAddTodoMutation();
//   const [updateTodo] = useUpdateTodoMutation();
//   const [deleteTodo] = useDeleteTodoMutation();

//   const [newTodo, setNewTodo] = useState("");

//   // Handle adding a todo
//   const handleAddTodo = async () => {
//     if (newTodo.trim()) {
//       await addTodo({ title: newTodo, completed: false });
//       setNewTodo(""); // Clear input
//     }
//   };

//   // Handle updating a todo
//   const handleUpdateTodo = async (todo) => {
//     await updateTodo({ id: todo.id, title: todo.title + " (updated)", completed: !todo.completed });
//   };

//   // Handle deleting a todo
//   const handleDeleteTodo = async (id) => {
//     await deleteTodo(id);
//   };

//   if (isLoading) return <p>Loading....</p>;
//   if (error) return <p>Error loading todos</p>;

//   return (
//     <div>
//       <h1>Todos</h1>

//       {/* Add Todo Input */}
//       <input
//         type="text" className="text-black"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//         placeholder="Enter new todo"
//       />
//       <button onClick={handleAddTodo}>Add Todo</button>

//       <ul>
//         {todos?.map((todo) => (
//           <li key={todo.id} style={{ display: "flex", gap: "10px" }}>
//             <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
//               {todo.title}
//             </span>
//             <button onClick={() => handleUpdateTodo(todo)}>Update</button>
//             <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Todos1;
// import React, { useState } from "react";
// import {
//   useGetTodosQuery,
//   useAddTodoMutation,
//   useUpdateTodoMutation,
//   useDeleteTodoMutation,
// } from "../features/todo/apiSlice";

// function Todos1() {
//   const { data: todos, isLoading, error } = useGetTodosQuery();
//   const [addTodo] = useAddTodoMutation();
//   const [updateTodo] = useUpdateTodoMutation();
//   const [deleteTodo] = useDeleteTodoMutation();
//   const [newTodo, setNewTodo] = useState("");

//   // ✅ Debugging: Check if data is loading
//   console.log("Todos:", todos);

//   // Handle adding a todo
//   const handleAddTodo = async () => {
//     if (newTodo.trim()) {
//       try {
//         console.log("Adding todo:", newTodo);
//         await addTodo({ id: Date.now(), title: newTodo, completed: false }).unwrap();
//         setNewTodo("");
//       } catch (err) {
//         console.error("Failed to add todo:", err);
//       }
//     }
//   };

//   // Handle updating a todo
//   const handleUpdateTodo = async (todo) => {
//     try {
//       console.log("Updating todo:", todo);
//       await updateTodo({
//         id: todo.id,
//         title: todo.title + " (updated)",
//         completed: !todo.completed,
//       }).unwrap();
//     } catch (err) {
//       console.error("Failed to update todo:", err);
//     }
//   };

//   // Handle deleting a todo
//   const handleDeleteTodo = async (id) => {
//     try {
//       console.log("Deleting todo with ID:", id);
//       await deleteTodo({ id }).unwrap(); // ✅ Pass id as object
//     } catch (err) {
//       console.error("Failed to delete todo:", err);
//     }
//   };

//   if (isLoading) return <p>Loading....</p>;
//   if (error) return <p>Error loading todos</p>;

//   return (
//     <div>
//       <h1>Todos</h1>

//       {/* Add Todo Input */}
//       <input
//         type="text"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//         placeholder="Enter new todo"
//       />
//       <button onClick={handleAddTodo}>Add Todo</button>

//       <ul>
//         {todos?.map((todo) => (
//           <li key={todo.id} style={{ display: "flex", gap: "10px" }}>
//             <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
//               {todo.title}
//             </span>
//             <button onClick={() => handleUpdateTodo(todo)}>Update</button>
//             <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Todos1;
import React, { useState } from "react";
import { useGetTodosQuery, useLazyGetTodoQuery } from "../features/todo/apiSlice";

function Todos1() {
  const { isLoading, error } = useGetTodosQuery();
  const [getTodo] = useLazyGetTodoQuery(); 
  const [todos, setTodos] = useState([]); 
  const [todoId, setTodoId] = useState(1); 
  const [editId, setEditId] = useState(null); 
  const [editText, setEditText] = useState(""); 

  // Fetch and add a single todo
  const handleAddTodo = async () => {
    try {
      const { data } = await getTodo(todoId);
      if (data) {
        setTodos((prevTodos) => [...prevTodos, data]);
        setTodoId(todoId + 1);
      }
    } catch (err) {
      console.error("Failed to fetch todo:", err);
    }
  };

  // Remove a todo
  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Enable editing mode
  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.title);
  };

  // Save the edited todo
  const handleSave = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: editText } : todo
      )
    );
    setEditId(null);
  };

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading todos</p>;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Todos</h1>

        {/* Add Todo Button */}
        <button
          onClick={handleAddTodo}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-all"
        >
          Add Todo
        </button>

        {/* Todos List */}
        <ul className="mt-4 space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-200 p-3 rounded-md shadow-sm"
            >
              {editId === todo.id ? (
                <input
                  type="text"
                  className="flex-1 px-2 py-1 border text-black rounded-md"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                <span className="text-gray-800">{todo.title}</span>
              )}

              <div className="flex gap-2">
                {editId === todo.id ? (
                  <button
                    onClick={() => handleSave(todo.id)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md transition-all"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(todo)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md transition-all"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-all"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todos1;
