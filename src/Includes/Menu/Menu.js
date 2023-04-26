import { Link } from "react-router-dom";
function Menu (){

    return (
        <tr height="5%" >
                  <td >
                     <table border="1" width="100% " height="100%">
                          <tr>
                              <th width="20%"> <Link  to="/">home</Link> </th>
                              <th width="20%"> <Link  to="/login"> login</Link></th>
                              <th width="20%"> <Link to="/registration">Registration</Link></th>
                             <th width="20%"> <Link  to="/contactus">contact us</Link></th>
                             <th width="20%"> <Link  to="/shippingform">Shipping Form</Link></th>
                              </tr>
                        </table>
                 </td>
       
        
                 </tr>
    )
}

export default Menu;