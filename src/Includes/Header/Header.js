import Banner from "../Header/Banner/Banner";
import "./Header.css"
import logo from "../../Images/logo3.jpeg"
function Header (props){
    return (
        <tr height="15%" >
        <td >
           <table border="1" width="100%" height="100%">
                <tr>
                     <td width="15%">

                        <img src={logo} /> 
                     </td>
                    <Banner cName={props.compName} fullName={props.fname}/>
                 </tr>
        </table>
    </td>

    </tr>
    );
}

export default Header;