import "./RightPanel.scss";
import List from "@mui/material/List";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import Item from "../Item/Item";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { CircularProgress, TextField } from "@mui/material";
import UploadImageFile from "../UploadImageFile/UploadImageFile";
import EditUser from "../EditUser/EditUser";
const axios = require("axios");

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
const formStyle = {
  gap: 2,
};

export default function RightPanel() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [first_name_Error, setFirstname_Error] = useState(false);
  const [last_name_Error, setLastname_Error] = useState(false);
  const [email_Error, setEmail_Error] = useState(false);
  const [modelOpen, setModalOpen] = useState(false);
  const [editModelOpen, setEditModelOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users/1");
        setUsers([...users, response.data]);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  const EditUserHandler = e => {
    console.log("User Edit");
    console.log(e);
  };
  const DeleteUserHandler = id => {
    const newUsersData = users.filter(users => users.data.id !== id);
    setUsers([...newUsersData]);
  };
  const AddNameToListHandler = async e => {
    e.preventDefault();
    setFirstname_Error(false);
    setLastname_Error(false);
    setEmail_Error(false);
    if (first_name === "") setFirstname_Error(true);
    if (last_name === "") setLastname_Error(true);
    if (email === "") setEmail_Error(true);
    if (!first_name_Error || !last_name_Error || !email_Error) {
      setLoading(true);
      const data = {
        first_name,
        last_name,
        email,
        avatar,
      };
      var res;
      try {
        const response = await axios.post("https://reqres.in/api/users", data);

        res = { ...response };
        setTimeout(() => {
          setUsers([...users, res]);
          handleModalClose();
        }, 300);
        users.map(user => console.log({ user }));
        setLoading(false);
      } catch (err) {
        console.log("error while sending data to API or receiving", err);
      }
    } else {
      console.log("Form not submitted");
    }
  };

  return (
    <div className="Right-Panel-Container">
      <List sx={{ width: "100%" }}>
        {users.map((user, index) => (
          <Item
            key={index}
            user={user}
            EditUserHandler={EditUserHandler}
            DeleteUserHandler={DeleteUserHandler}
          />
        ))}
      </List>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "absolute", bottom: "0" }}
        onClick={handleModalOpen}
      >
        <AddIcon />
        <Modal
          open={modelOpen}
          onClose={handleModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form
              method="post"
              noValidate
              autoComplete="off"
              sx={formStyle}
              onSubmit={AddNameToListHandler}
            >
              <TextField
                label="First Name"
                placeholder="Enter Your First name..."
                variant="outlined"
                color={first_name_Error ? "error" : "secondary"}
                onChange={e => setFirstname(e.target.value)}
                fullWidth
                sx={{ mb: "1rem" }}
                required
                error={first_name_Error}
              />
              <TextField
                label="Last Name"
                placeholder="Enter Your Last name..."
                variant="outlined"
                color={last_name_Error ? "error" : "secondary"}
                onChange={e => setLastname(e.target.value)}
                fullWidth
                required
                sx={{ mb: "1rem" }}
                error={last_name_Error}
              />
              <TextField
                label="Email Address"
                variant="outlined"
                placeholder="Enter Your Email Address..."
                color={email_Error ? "error" : "secondary"}
                type="email"
                onChange={e => setEmail(e.target.value)}
                required
                sx={{ mb: "1rem" }}
                fullWidth
                error={email_Error}
              />
              <UploadImageFile imageFile={avatar} setImageFile={setAvatar} />

              <br />
              <Button
                variant="contained"
                color={
                  first_name_Error || last_name_Error || email_Error
                    ? "error"
                    : "info"
                }
                type="submit"
                sx={{ alignContent: "center" }}
                fullWidth
              >
                {loading ? (
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress
                      size={20}
                      sx={{
                        color: "white",
                        marginRight: "1rem",
                      }}
                    />
                  </Box>
                ) : (
                  <>Submit</>
                )}
              </Button>
            </form>
          </Box>
        </Modal>
      </Fab>
    </div>
  );
}
