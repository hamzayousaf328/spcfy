import "./Navbar.scss"
import AddIcon from '@mui/icons-material/Add';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PopUp from "../popup/PopUp";
import DataForm from "../../pages/DataForm/DataForm";
import InputPopUp from "../popup/InputPopUp";
import InputForm from "../../pages/DataForm/inputForm";


import { useState } from "react";


const Navbar = (props) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupInput, setOpenPopupInput] = useState(false);
  const [primer, setPrimer] = useState(true);

  return (
    <>
    <div className="navbar">
      <div className="wrapper">
        <button className="createRun" onClick = { ()=> setOpenPopup(true)}>
            <AddIcon className="icon"/>
            <span>
                create run
            </span>
            
        </button>
        <div>
          <div className="items">
            <div className="item">
              <LanguageIcon className="icon"/>
              En
            </div>
            <div className="item">
              <HelpOutlineIcon className="icon"/>
            </div>
            <div className="item">
              <NotificationsNoneIcon className="icon"/>
            </div>
            <div className="item">
              <span>
                {props.email}
              </span>
              <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <PopUp openPopup = {openPopup}
        setOpenPopup = {setOpenPopup}
        >
        <DataForm dataOpenClose = {setOpenPopup} inputOpenClose = {setOpenPopupInput} primerFlag = {setPrimer}/>
    </PopUp>
    <InputPopUp openPopup = {openPopupInput}
        setOpenPopup = {setOpenPopupInput}
        
        
        >
        <InputForm inputOpenClose = {setOpenPopupInput} primerVisible = {primer}/>
    </InputPopUp>    
    </>
  )
}

export default Navbar