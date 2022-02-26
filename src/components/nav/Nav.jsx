import {React,useState} from 'react';
import "./nav.css"
import logo from "../../assets/logo-small.png"
import { FormatListBulleted, NotificationsNone, Language, Settings, } from '@material-ui/icons';


const Nav = () => {
    const [status, setStatus] = useState(false);
 
    function openSide(){
        if(status==false){
            document.querySelector("aside").style.display="none"
            setStatus(true)
        }else{
            document.querySelector("aside").style.display="block"
            setStatus(false)
        }
    }
    
    return (
        <nav>
            <div className='topbar'>
                <div className="topbarWrapper">
                    <div className="topLeft">
                        <span className="logo">
                            <img src={logo} alt="" />
                            <FormatListBulleted className='close' onClick={openSide}/>
                        </span>
                    </div>
                    <div className="topRight">
                        <div className="topbarIconContainer" >
                            <NotificationsNone />
                        </div>
                        <div className="topbarIconContainer">
                            <Settings />
                        </div>
                        <img src={logo} alt="" className="topAvatar" />
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Nav;
