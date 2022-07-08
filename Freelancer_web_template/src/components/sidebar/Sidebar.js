import {} from './side.css'
export const Sidebar = () =>{
    return (

     
        
        <div class="col-3 sidebar" >
            <br/>
            <h5>My recent Search</h5>
            <br/><br/>
     
            <h5>Filter By:</h5>
            <h6><strong>Budget</strong></h6>
            <input class="form-check-input" type="checkbox"/>
            <label for="">Fixed Price Projects</label>
            <br/><br/>
             <input type="text" class="box" placeholder="min"/>
             <label for="" class="lb1">to</label>
             <input type="text" class="box" placeholder="max"/>
                 <br/><br/>
            <input class="form-check-input" type="checkbox"/>
             <label  for="">Hourly Projects </label>
             <br/><br/>
              <input type="text" class="box" placeholder="min"/>
              <label for="" class="lb1">to</label>
              <input type="text" class="box" placeholder="max"/>
 
              <br/><br/>
                
              <select class="drop border border-1">
                  <option selected="">All Durations </option>
                  <option>1 week to 4 week</option>
                  <option>1 month to 3 month</option>
                  <option>3 month to 6 month</option>
              </select>
              
              <br/><br/>
              <input class="form-check-input" type="checkbox"/>
              <label for="">Contests </label>
              <br/><br/>
               <input type="text" class="box" placeholder="min"/>
               <label for="" class="lb1">to</label>
               <input type="text" class="box" placeholder="max"/>
  
               <br/><br/>
               <hr/>
               
               <label for=""><h6><strong>Type</strong> </h6></label>
               <br/>
               <input class="form-check-input" type="checkbox"/>
               <label for="">Local jobs</label>
               <br/>
               <input class="form-check-input" type="checkbox"/>              
               <label for="">Featured Jobs</label>
               <br/>
               <input class="form-check-input" type="checkbox"/>
               <label for="">Recruiter Jobs</label>
               <br/>
               <input class="form-check-input" type="checkbox"/>
               <label for="">Full Time Jobs</label>
               <br/>
               <br/>
               <hr/>
 
               <label for=""><h6><strong>Skills</strong> </h6></label>
               <br/>
               <input class="form-check-input" type="checkbox"/>
               <label for="">.NET</label>
               <br/>
               <input class="form-check-input" type="checkbox"/>              
               <label for="">PHP</label>
               <br/>
               <input class="form-check-input" type="checkbox"/>
               <label for="">HTML</label>
               <br/>
               <input class="form-check-input" type="checkbox"/>
               <label for="">CSS</label>
               <br/>
               <br/>
               <hr/>
 
               <label for=""><h6><strong>Languages</strong> </h6></label>
               <br/>
               <input class="form-check-input" type="checkbox"/>
               <label for="">English</label>
               <br/>
               <input class="form-check-input" type="checkbox"/>              
               <label for="">Spanish</label>
               <br/>
               <input class="form-check-input" type="checkbox"/>
               <label for="">German</label>
               <br/>
               <input class="form-check-input" type="checkbox"/>
               <label for="" >French</label>
               <br/>
               <br/>
               <hr/>
               <label for=""><h6><strong>Job State</strong> </h6></label>
               <br/>
               <input name="rd1" class="form-check-input"  type="radio"/> <label class="form-check-label" for=""> <strong>All open jobs</strong></label>
               <br/>
               <input name="rd1" class="form-check-input"  type="radio"/> <label class="form-check-label" for=""> <strong>All open and closed jobs</strong></label>
                <br/><br/><br/> 
              
        </div>     
       

    )
}