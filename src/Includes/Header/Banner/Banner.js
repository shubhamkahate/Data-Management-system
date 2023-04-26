import  bannerStyle from "./Banner.module.css"
function Banner (props){
return(
  
    <th id={bannerStyle.banner}> 
    <h1 >{props.fullName}</h1>
    
    <h1 >{props.cName}</h1>
    
</th>

)
}

export default Banner;