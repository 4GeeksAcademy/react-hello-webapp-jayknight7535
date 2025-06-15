import { EditableText, EditableNumber }from "../components/editablecontent";
// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const EditContact = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  return (
    <div> 
      
      <div>
        <Link to="/">
          <button className="btn btn-primary">Back home</button>
        </Link>
      </div>
    </div>
  );
};