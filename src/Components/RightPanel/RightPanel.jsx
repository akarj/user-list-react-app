import "./RightPanel.scss";
import List from "@mui/material/List";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import ListItem from "@mui/material/ListItem";
import { useEffect, useState } from "react";
import Item from "../Item/Item";
const axios = require("axios");

export default function RightPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users/1");
        setUsers([...users, response.data.data]);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);
  const AddUserHandler = () => {
    console.log("User Added");
  };

  return (
    <div className="Right-Panel-Container">
      <List sx={{ width: "100%" }}>
        {users.map(user => (
          <Item key={user.id} user={user} />
        ))}
      </List>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "absolute", bottom: "0" }}
        onClick={AddUserHandler}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
