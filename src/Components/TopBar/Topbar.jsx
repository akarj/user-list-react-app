import "./Topbar.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

export default function topbar() {
  return (
    <div className="topbar-container">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h5"
              component="h5"
              sx={{ flexGrow: 1 }}
              pl={3}
              //   fontFamily={`'Zen Antique Soft', serif`}
              //   fontFamily={`'Zen Antique Soft', serif`}
              fontWeight={400}
            >
              User List App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
