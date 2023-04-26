import Dashboard from "../../Pages/Dashboard/Dashboard";
import ContactUs from '../../Pages/ContactUs/ContactUs';
import Registration from '../../Pages/Registration/Registration';
import Login from '../../Pages/Login/Login';
import ShippingForm from '../../Pages/ShippingForm/ShippingForm';

import {  Routes, Route } from "react-router-dom";

const Content = ()=>{
    return (
        <tr >
              <td >
              <Routes>

                  <Route path="/" element={<Dashboard />} />

                  <Route path="/contactus" element={<ContactUs />} />
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/login" element={<Login  />} />
                  <Route path="/shippingform" element={<ShippingForm />} />

                  </Routes>
                </td>
       
        
         </tr>

    )
}

export default Content;