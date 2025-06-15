import { Link } from "react-router-dom";


export const ContactCard = (contact,showDelete, onDelete) => {
const deleteC = async () => {
    const resp = await fetch(
      `https://playground.4geeks.com/contact/agendas/jayknight/contacts/${contact.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (resp.ok) {
      dispatch({
        type: "delete_contact",
        id: conact.id,
      });
      nav("/");
    }
  };
  return(
    <div class="card mb-3">
     <div className="container">
      <div className="row">
        <div class="col">
     <img src="" className="img-fluid rounded-start" alt="..."/>
        </div>
        <div class="col-md-8">
          <div>{contact?.name ? contact.name: "need to add name"}</div>
          <div><i class="fa-solid fa-location-dot"></i> {contact?.adresss ? contact.adress: "no adress given"}</div>
          <div><i class="fa-solid fa-phone"></i> {contact?.phone ? contact.phone: "no phone number given"}</div>
          <div><i class="fa-solid fa-envelope"></i> {contact?.email ? contact.email: "no email given"}</div>
        </div>
        <div className="col justify content end">
          <Link to="/edit">
            <button className="btn btn"><i class="fa-solid fa-pen-fancy"></i></button>
          </Link>
          <button type="button" class="btn btn"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
     </div>
    </div>
  )
}