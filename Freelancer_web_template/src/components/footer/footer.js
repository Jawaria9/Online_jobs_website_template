import { } from './ft.css'
export const Footer1 = () =>{

    return(
       <div class="container-fluid">

          <div class="container">
                 <br/><br/><br/>
                <div class ="row">

                        <div class="col-lg-4">
                        <br/><br/>
                            <li>
                                <a href=''><strong> English - US(International)</strong> </a>
                            </li>
                            <li>
                                <a href=''><strong> Help & Support</strong> </a>
                            </li>
                        </div>

                        <div class="col-md-2">
                            <label><strong>Freelancer</strong></label>
                            <br/>
                            <li>
                                <a href=''>Categories</a>
                            </li>
                            <li>
                                <a href=''>Projects </a>
                            </li>
                            <li>
                                <a href=''>Contests </a>
                            </li>
                            <li>
                                <a href=''>Freelancer </a>
                            </li>
                            <li>
                                <a href=''>Enterprise </a>
                            </li>
                            <li>
                                <a href=''>Local Jobs </a>
                            </li>
                        </div>
                        <div class="col-md-2">
                            <label><strong>About us</strong></label>
                            <br/>
                            <li>
                                <a href=''>How it works</a>
                            </li>
                            <li>
                                <a href=''>About us </a>
                            </li>
                            <li>
                                <a href=''>Security </a>
                            </li>
                            <li>
                                <a href=''>Investor </a>
                            </li>
                            <li>
                                <a href=''>Sitemap</a>
                            </li>
                            <li>
                                <a href=''>Stories</a>
                            </li>
                        </div>

                        <div class="col-md-2">
                            <label><strong>Terms</strong></label>
                            <br/>
                            <li>
                                <a href=''>Privacy Policy</a>
                            </li>
                            <li>
                                <a href=''>Terms and Conditions </a>
                            </li>
                            <li>
                                <a href=''>Copyright Policy </a>
                            </li>
                            <li>
                                <a href=''>Code of Conduct </a>
                            </li>
                            <li>
                                <a href=''>Fees and Charges</a>
                            </li>
                        </div>

                        <div class="col-md-2">
                        <label><strong>App</strong></label>
                         <br/>
                         <br/>
                         <li>
                         <a class="navbar-brand" href="#">
                           
                           <img src={require('./palystore.png')} />
                       </a>
                        </li>
<br/>

                        <li>
                        <a class="navbar-brand" href="#">                           
                           <img src={require('./play.png')} />
                       </a>               
                       </li>

                        </div>



                </div>

               <br/><br/>
                <hr/>
                <div class="row">
                    
                    <div class="col-md-3">
                    
                    <label> <strong> 58,806,231</strong> <small>Registered Users</small></label>

                    </div>

                    <div class="col-md-3">
                    <label> <strong> 21,360,821</strong> <small>Total Jobs Posted</small></label>
                    </div>

                    <div class="col-6">
                     <br/>
                     <label><small>Freelancer ® is a registered Trademark of Freelancer Technology Pty Limited (ACN 142 189 759)</small> </label>
                     <label><small>Copyright © 2022 Freelancer Technology Pty Limited (ACN 142 189 759) </small> </label>

                    </div>

                </div>
                <br/>
                <br/>
          </div>

       </div>
   )

}