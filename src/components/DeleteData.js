import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

export default function DeleteModal({
  open,
  handleClose,
  dataDelete,
  fetchAllUser,
}) {
  const handleSubmit = async () => {
    try {
      let res = await axios.delete(
        `https://6531ff574d4c2e3f333d78e7.mockapi.io/Films/${dataDelete}`
      );
      if (res && res.status === 200) {
        alert("Xóa thành công");
        handleClose();
        fetchAllUser();
      }
    } catch (error) {
      console.log("Error deleting user", error);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Modal"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete Films ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleSubmit} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
