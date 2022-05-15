import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import DraftsIcon from '@mui/icons-material/Drafts';
import ReportIcon from '@mui/icons-material/Report';
import BarChartIcon from '@mui/icons-material/BarChart';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import {Link} from 'react-router-dom'

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className="logo">spcfy.io</span>
        </div>
        <hr/>
        <div className='center'>
            <ul>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>
                        Dashboard
                    </span>
                </li>
                <li>
                    <DraftsIcon className="icon"/>
                    <span>
                        Drafts
                    </span>
                </li>
                <p className="title">Workspace</p>
                <li>
                    <BlurOnIcon className="icon"/>
                    <span>
                        Runs
                    </span>
                </li>
                <li>
                    <BarChartIcon className="icon"/>
                    <span>
                        Visualizations
                    </span>
                </li>
                <li>
                    <ReportIcon className="icon"/>
                    <span>
                        Reports
                    </span>
                </li>
                <p className="title">User</p>
                <li>
                    <PermIdentityIcon className="icon"/>
                    <span>
                        Profile
                    </span>
                </li>
                <li>
                    <Link to='/'>
                        <LogoutIcon className="icon"/>
                        <span>
                            Logout
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar