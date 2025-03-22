// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// export const jsonPlaceholderapi=createApi({
//     reducerPath:"jsonPlaceholderapi",
//     baseQuery : fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com"}),
//     endpoints:(builder)=>({
//         getTodos:builder.query({
//             query:()=>"/todos?_limit=5",
//             providesTags:["Todos"],
//         }),
//         addTodo:builder.mutation({
//             query:(newTodo)=>({
//                 url:'/todos',
//                 method:"POST",
//                 body:newTodo,
//             }),
//             invalidatesTags:["Todos"]
//         }),
//         updateTodo:builder.mutation({
//             query:({id,...updatedTodo})=>({
//                 url:`/todos/${id}`,
//                 method:"PUT",
//                 body:updatedTodo,
//             }),
//             invalidatesTags:["Todos"]
//         }),
//         deleteTodo:builder.mutation({
//             query:(id)=>({
//                 url:`/todos/${id}`,
//                 method:'DELETE',
//                 body:deleteTodo,
//             }),
//             invalidatesTags:["Todos"]
//         })
//     }),
// });

// export const {
//     useGetTodosQuery,
//     useAddTodoMutation,
//     useUpdateTodoMutation,
//     useDeleteTodoMutation,
//     }=jsonPlaceholderapi;
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const jsonPlaceholderapi = createApi({
//   reducerPath: "jsonPlaceholderapi",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
//   endpoints: (builder) => ({
//     // Fetch todos
//     getTodos: builder.query({
//       query: () => "/todos?_limit=5",
//       providesTags: ["Todos"],
//     }),

//     // Add a new todo
//     addTodo: builder.mutation({
//       query: (newTodo) => ({
//         url: "/todos",
//         method: "POST",
//         body: newTodo,
//       }),
//       invalidatesTags: ["Todos"],
//     }),

//     // Update an existing todo
//     updateTodo: builder.mutation({
//       query: ({ id, ...updatedTodo }) => ({
//         url: `/todos/${id}`,
//         method: "PUT",
//         body: updatedTodo,
//       }),
//       invalidatesTags: ["Todos"],
//     }),

//     // Delete a todo
//     deleteTodo: builder.mutation({
//       query: (id) => ({
//         url: `/todos/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Todos"],
//     }),
//   }),
// });

// export const {
//   useGetTodosQuery,
//   useAddTodoMutation,
//   useUpdateTodoMutation,
//   useDeleteTodoMutation,
// } = jsonPlaceholderapi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonPlaceholderapi = createApi({
  reducerPath: "jsonPlaceholderapi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (builder) => ({
    // Fetch multiple todos
    getTodos: builder.query({
      query: () => "/todos?_limit=5",
      providesTags: ["Todos"],
    }),

    // Fetch a single todo (needed for adding todos lazily)
    getTodo: builder.query({
      query: (id) => `/todos/${id}`,
    }),

    // Add a new todo
    addTodo: builder.mutation({
      query: (newTodo) => ({
        url: "/todos",
        method: "POST",
        body: newTodo,
      }),
      invalidatesTags: ["Todos"],
    }),

    // Update an existing todo
    updateTodo: builder.mutation({
      query: ({ id, ...updatedTodo }) => ({
        url: `/todos/${id}`,
        method: "PUT",
        body: updatedTodo,
      }),
      invalidatesTags: ["Todos"],
    }),

    // Delete a todo
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useLazyGetTodoQuery,  // ✅ Added this for fetching a single todo
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = jsonPlaceholderapi;
