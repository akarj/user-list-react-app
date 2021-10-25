import "./RightPanel.scss";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function RightPanel() {
  return (
    <div className="Right-Panel-Container">
      <List sx={{ width: "100%", ml: "2rem" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: "2.5rem" }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
