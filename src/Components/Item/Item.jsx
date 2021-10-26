import "./Item.scss";
import * as React from "react";

import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function Item({ user, EditUserHandler, DeleteUserHandler }) {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <div className="item-container">
      <ListItem
        key={`user in List : ${user.data.id}`}
        secondaryAction={
          <>
            <IconButton
              edge="end"
              aria-label="edit"
              sx={{ mr: "1rem" }}
              onClick={EditUserHandler}
            >
              <EditIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={DeleteUserHandler}
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
    </div>
  );
}
