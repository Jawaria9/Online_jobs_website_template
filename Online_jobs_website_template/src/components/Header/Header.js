import {} from './head.css'
import logo from "./freelancer-logo.svg"

export const Header = (props) => {
    return(
        <nav class="navbar nav2">
        <div class="container">
            <div class="navbar nvheight">
                <ul class="nav">
                   
                    <li class="nav-item ">
                        <a class="navbar-brand" href="#">
                           
                        <img src={logo} alt="" width="150" height="60"
                         />
                        </a>
                   </li>
                   
                   <li class="nav-item navid" id="n1">                
                    <a href="" class="navid2">How it Works </a>
                   </li>

                   <li class="nav-item navid" id="n1">                
                    <a href=""  class="navid2">Browse Jobs </a>
                   </li>
                    <li class="mar"></li>
                   <li class="nav-item navid ">                
                    <a onClick={props.onShowModal} href="#"  class="navid2 ">Log In </a>
                   </li>

                   <li class="nav-item navid ">                
                    <a  onClick={props.onShowModal2} href="#"  class="navid2">Sign Up </a>
                   </li>
                   
                </ul>

            </div>
        </div>
      </nav>

    )
}