import React from 'react';
import "./sidebar.css"
import logo from "../../assets/logo-small.png";
import {Dashboard,ExitToApp ,Assessment,People,AddShoppingCart,PieChart} from "@material-ui/icons"
const Sidebar = () => {
  return (
    <aside>
        <div className="sidebar">
            <h3>Menu</h3>
            <a className='active' href="#">
                <Dashboard/>
            </a>
            <a href="#">
                <PieChart/>
            </a>
            <a href="#">
                <AddShoppingCart/>
            </a>
            <a href="#">
                <People/>
            </a>
            <a href="#">
                <Assessment/>
            </a>
            <a href="#">
                <ExitToApp/>
            </a>
        </div>
    </aside>
  );
};

export default Sidebar;
