import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReportIcon from '@mui/icons-material/Report';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';

const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="top">
           <span className="logo">Eco-Nation</span>
        </div>
        <hr/>

       <div className="center">
           <ul>
               <p className="title">MAIN</p>
               <li>
                   <DashboardIcon className="icon"/>
                   <span>Dashboard</span>
               </li>
               <p className="title">LISTS</p>

               <li>
                   <PersonIcon className="icon"/>
                   <span>Users</span>
               </li>

               <li>
                   <DeleteIcon className="icon"/>
                   <span>E-waste Bins</span>
               </li>

               <li>
                   <LocalShippingIcon className="icon"/>
                   <span>Collectors</span>
               </li>

               <p className="title">USEFUL</p>

               <li>
                   <ReportIcon className="icon"/>
                   <span>Reports</span>
               </li>

               <li>
                   <AnalyticsIcon className="icon"/>
                   <span>Statistics</span>
               </li>

               <p className="title">SERVICES</p>

               <li>
                   <SettingsIcon className="icon"/>
                   <span>Setting</span>
               </li>

               <li>
                   <AccountCircleIcon className="icon"/>
                   <span>Profile</span>
               </li>

               <li>
                   <MessageIcon className="icon"/>
                   <span>Messages</span>
               </li>
           </ul>
           <div className="bottom"></div>
    </div>
    </div>
  );
};

export default Sidebar;
