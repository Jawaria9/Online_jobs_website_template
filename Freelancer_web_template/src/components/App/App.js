import './App.css';
import {Header} from '../Header/Header'
import {Headbottom} from '../Header2/headbottom'
import {Breadcrumb} from '../breadcrumb/Breadcrumb'
import {Sidebar} from '../sidebar/Sidebar'
import {Part} from '../body1/mainbody'
import {Footer1} from '../footer/footer'
import React, { useState } from "react";
import Modal from './Modal';

function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  

  const showModalHandler = () => {
    setModalOpen(true);
  };

  const hideModalHandler = () => {
    setModalOpen(false);
    setModalOpen2(false);
  };

  

  const showModalHandler2 = () => {
    setModalOpen2(true);
  };

  const hideModalHandler2 = () => {
    setModalOpen2(false);
  };


  return (
    <div className="App" >


      {modalOpen2 && <Modal
      onHideModal={hideModalHandler}
        heading="Sign up"
        button="Join Freelancer"
        text1="Already have an account? "
        text2="Log In"
        extra_text1=""
        extra_text2=""
       

         />}
      {modalOpen && <Modal  
      onHideModal={hideModalHandler} 
      heading="Welcome back"
      button="Log In"
      text1="Don't have an account? "
      text2="Sign Up"
      extra_text1=" Remember me"
      extra_text2="Forgot password?"
      />}

     <header>
      <Header onShowModal={showModalHandler} onShowModal2={showModalHandler2}/>
      </header>

    
    
      <div class="container-fluid">
      <Headbottom/>
      </div>  
       <div class="bdy">
            
            <div class="container ">
            
            <div class="row">
              <Breadcrumb/>
            </div>

              <div class = "row">
              <Sidebar/>
              <Part/>
              </div>


            </div>



         </div>

           <br/>
          
        <footer>

         <Footer1/>
        
        </footer>  

    </div>
    
  );
}

export default App;
