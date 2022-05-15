import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react'

export default function InputPopUp(props){
  const {title, children, openPopup, setOpenPopup} = props;

  return (
    <Dialog open={openPopup}>
        <DialogTitle>
        </DialogTitle>
        <DialogContent>
            <div>
                {children}
            </div>
        </DialogContent>
    </Dialog>
  )
}
