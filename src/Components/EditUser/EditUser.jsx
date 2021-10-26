import { Modal } from "@mui/material";
import "./EditUser.scss";

export default function EditUser({ event }) {
  return (
    <div className="EditUser-Container">
      {console.log("User Edit")}
      <> {console.log(event)}</>
      <Modal></Modal>
    </div>
  );
}
