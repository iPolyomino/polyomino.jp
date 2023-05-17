import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

const MessageDialog = ({ message, isOpen, handleClose }: { message: string, isOpen: boolean, handleClose: () => void }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-describedby="dialog-description"
    >
      <DialogContent>
        <DialogContentText id="dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default MessageDialog;
