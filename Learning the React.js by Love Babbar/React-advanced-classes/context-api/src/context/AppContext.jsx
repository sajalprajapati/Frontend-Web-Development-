import { createContext, useState } from "react";
import { baseUrl } from "../baseURL";

// Step 1: Create a "storage room" (common storage space)
// `AppContext` is the label for this storage room where shared data will be stored.
export const AppContext = createContext();

// Step 2: Define the "manager" of the storage room (AppContextProvider)
// This manager decides what items should go into the storage room and how they will be shared.
export  default function AppContextProvider({ children }) {
  // Step 3: Define state variables (the items to be stored in the storage room).
  // These are the variables that components in the app may need to share or modify.
  const [loading, setLoading] = useState(false); // Indicates if data is being loaded
  const [posts, setPosts] = useState([]);       // Stores posts fetched from an API
  const [page, setPage] = useState(1);          // Tracks the current page
  const [totalPages, setTotalPages] = useState(null); // Total number of pages for pagination

  // Step 4: Package these variables into an object called `value`.
  // This is the "wrapped package" of all the shared items that will be delivered to children components.
 
 
 
   //data filling is to be done:
   // base url to use "https://codehelp-apis.vercel.app/api/get-blog"


   async function fetchBlogPosts(page=1) 
   {
     setLoading(true);
     
     let url = `${baseUrl}?page=${page}`;
     console.log("printing the final URL");



     try
     {
        const results=await fetch (url);
        const data=await results.json();
        console.log(data);


        setPage(data.page);
        setPosts(data.posts);
        setTotalPages(data.totalPages);
     }

     catch(error)
     {
        console.log("Code Fat gya hai");
        setPage(1);
        setPosts([]);
        setTotalPages(null);
     }


     setLoading(false);
   }



   function handlePageChange(page)
   {
    setPage(page);
    fetchBlogPosts(page);
   }
 
 
  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange
  };

  // Step 5: Use the `AppContext.Provider` to send (or "provide") the `value` object to all child components.
  // Child components wrapped inside this provider can now access and modify the `value` data using `useContext`.
  return (
    <AppContext.Provider value={value}>
      {children} {/* Passes the shared data to all child components */}
    </AppContext.Provider>
  );
}

/*
WHY USE CONTEXT API FOR SHARING API STATE?

The Context API is ideal for managing **global state**—data that multiple components in your app need access to, like API results, user authentication, or theme settings. Instead of passing props through multiple levels of components (prop drilling), Context allows you to share data directly with components that need it, improving code simplicity and maintainability.

For API states like `loading`, `posts`, `page`, and `totalPages`, the Context API works well because:
1. **Centralized Management**: It keeps all related state variables in one place.
2. **Global Availability**: Any component in the app can access or update this state without needing props to pass through intermediate components.
3. **Scalability**: Makes your code cleaner as your app grows, especially when multiple components depend on the same state.

WHEN TO USE CUSTOM HOOKS OR `useEffect`?

- **Custom Hooks**: Use custom hooks for reusable logic that doesn’t require sharing state globally. For example:
  - Fetching data from an API (e.g., `useFetchPosts`).
  - Managing form validation (e.g., `useFormValidation`).
  - Custom hooks are great for isolating logic used across multiple components but not tied to a global state.

- **`useEffect`**: Use this for side effects in a specific component, such as:
  - Fetching data when a component loads.
  - Subscribing to or cleaning up events like resizing or WebSocket connections.
  - Managing DOM manipulations specific to a component.

In summary:
- Use the **Context API** for global state that many components rely on.
- Use **custom hooks** for reusable logic across components.
- Use **`useEffect`** for local side effects in a single component.
*/
