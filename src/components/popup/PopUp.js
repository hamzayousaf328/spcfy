import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react'

export default function PopUp(props){
  const {title, children, openPopup, setOpenPopup} = props;

  return (
    <Dialog open={openPopup}>
        <DialogContent>
            <div>
                {children}
            </div>
        </DialogContent>
    </Dialog>
  )
}
