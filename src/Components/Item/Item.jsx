import "./Item.scss";
import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton, Modal, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/system";
import UploadImageFile from "../UploadImageFile/UploadImageFile";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Item({ user, EditUserHandler, DeleteUserHandler }) {
  const [EditUserModelOpen, setEditUserModelOpen] = React.useState(false);
  const [first_name, setFirstname] = useState(user.data.first_name);
  const [last_name, setLastname] = useState(user.data.last_name);
  const [email, setEmail] = useState(user.data.email);
  const id = user.data.id;
  const [avatar, setAvatar] = useState(user.data.avatar);

  const EditUserHandlerr = user => {
    setEditUserModelOpen(true);
  };

  const EditUserFormSubmitHandler = async e => {
    e.preventDefault();

    const data = {
      first_name,
      last_name,
      email,
      avatar,
      id,
    };
    setTimeout(() => {
      console.log(data);
      setEditUserModelOpen(false);
      EditUserHandler(data);
    }, 300);
  };
  return (
    <div className="item-container">
      {/* {console.log(user, "list")} */}
      <ListItem
        key={`user in List : ${user.data.id}`}
        secondaryAction={
          <>
            <IconButton
              edge="end"
              aria-label="edit"
              sx={{ mr: "1rem" }}
              onClick={() => EditUserHandlerr(user)}
            >
              <EditIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => DeleteUserHandler(user.data.id)}
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
          </>
        }
        disablePadding
      >
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt={`Avatar n°${user.data.id}`} src={user.data.avatar} />
          </ListItemAvatar>
          <ListItemText
            id={user.data.id}
            primary={`${user.data.first_name} ${user.data.last_name}`}
            secondary={
              <>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="aliceblue"
                >
                  {user.data.email}
                </Typography>
              </>
            }
          />
        </ListItemButton>
      </ListItem>
      <Divider variant="inset" component="li" color="white" />

      <Modal
        open={EditUserModelOpen}
        onClose={() => setEditUserModelOpen(false)}
        aria-labelledby="Edit Modal"
        aria-describedby="This modal is for the edit of the user"
        sx={{ backgroundColor: "White" }}
        color="primary"
      >
        <Box sx={style}>
          <form
            method="post"
            noValidate
            autoComplete="off"
            // sx={formStyle}
            onSubmit={EditUserFormSubmitHandler}
          >
            <TextField
              className="textField"
              label="First Name"
              placeholder={user.data.first_name}
              variant="outlined"
              color="secondary"
              onChange={e => setFirstname(e.target.value)}
              fullWidth
              sx={{ mb: "1rem" }}
              required
            />
            <TextField
              label="Last Name"
              placeholder={user.data.last_name}
              variant="outlined"
              color="secondary"
              onChange={e => setLastname(e.target.value)}
              fullWidth
              required
              sx={{ mb: "1rem" }}
            />
            <TextField
              label="Email Address"
              variant="outlined"
              placeholder={user.data.email}
              color="secondary"
              type="email"
              onChange={e => setEmail(e.target.value)}
              required
              sx={{ mb: "1rem" }}
              fullWidth
            />
            <UploadImageFile imageFile={avatar} setImageFile={setAvatar} />

            <br />
            <Button
              variant="contained"
              type="submit"
              sx={{ alignContent: "center" }}
              fullWidth
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
