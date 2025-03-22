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
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../features/todo/apiSlice";

function Todos1() {
  const { data: todos, isLoading, error } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      await addTodo({ id: Date.now(), title: newTodo, completed: false }).unwrap();
      setNewTodo("");
    }
  };

  const handleUpdateTodo = async (todo) => {
    await updateTodo({
      id: todo.id,
      title: todo.title + " (updated)",
      completed: !todo.completed,
    }).unwrap();
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo({ id }).unwrap();
  };

  if (isLoading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading todos</p>;

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-lg mt-5">
      <h1 className="text-2xl font-bold text-center mb-4">Todos</h1>

      {/* Input & Add Button */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul className="space-y-3">
        {todos?.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-white p-3 rounded-md shadow-md"
          >
            <span
              className={`flex-1 ${todo.completed ? "line-through text-gray-500" : ""}`}
            >
              {todo.title}
            </span>
            <button
              onClick={() => handleUpdateTodo(todo)}
              className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
            >
              Update
            </button>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos1;
