import "./Item.scss";
import * as React from "react";

import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Item({ user }) {
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
        key={`user in List : ${user.id}`}
        secondaryAction={
          <Checkbox
            edge="end"
            onChange={handleToggle(user.id)}
            checked={checked.indexOf(user.id) !== -1}
            inputProps={{ "aria-labelledby": user.id }}
          />
        }
        disablePadding
      >
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt={`Avatar n°${user.id}`} src={user.avatar} />
          </ListItemAvatar>
          <ListItemText
            id={user.id}
            primary={`${user.first_name} ${user.last_name}`}
            secondary={user.email}
          />
        </ListItemButton>
      </ListItem>
    </div>
  );
}
