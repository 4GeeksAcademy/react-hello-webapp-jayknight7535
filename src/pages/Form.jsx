// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const Form = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  return (
    <div>
    <form 
      onSubmit={(ev) => {
			ev.preventDefault();}}>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">full name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe"/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="502 Fakeplace"/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Phone number</label>
        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="(012) 345-6789 "/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
    </form>
						<button className="btn btn-primary">add new contact</button>
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
