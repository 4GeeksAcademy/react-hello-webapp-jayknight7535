import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ContactCard } from "../components/Contact-card.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
   
  return (
      <Link to="/edit">
        <button className="btn btn-primary">Back home</button>
      </Link>
)}; 