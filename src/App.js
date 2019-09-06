import React from 'react';

import image from "../src/images/instagram-logo.png";
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="navbar">
          <div id="logo">
              <button>
                  <i className="fab fa-instagram"></i>
                  
                  <img id="logoText" src ={image} alt="Instagram logo" height= "45px" width = "100px"/>
              </button>
          </div>

          <div id="search">
              <input type="text" placeholder= "Search"></input>
          </div>

          <div id="S">
              
              <button><i className="fas fa-paper-plane"></i></button>
          </div>
        
      </div>
    );
  }
}

import './App.css';
import Cat from './cat.jpg';
import Oliver from './oliver.jpg';
import heart from './heart.jpg';
import send from './send.jpg';
import Sphynx from './sphynx.jpg'
import Funcat from './funcat.jpg'
import Uglycat from './uglycat.jpg'
import comment from './comment.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  incrementItem = e => {
    console.log(e)
    this.setState({ clicks: this.state.clicks+1});
  }



  render() {
    return (
      // <div className='mainComponent'>
      //   <div className='postInfo'>
      //     <div className='iamgeButtons'>
      //       <div className='likesNameComment'>
      //         <div className='likesNameComment'>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   <div class='cat'>
      //     <img src={Cat} alt="" />
      //   </div>
      // </div>

      <div className="insta">
      


         <div className= 'imageTitle'>
             <img className='oliver' src={Oliver} alt=''/>
             <h6>cat_cat_uk</h6>
         </div>
        

         <div className="cat">
             <img src={Cat} alt="" />
        
         </div>

         <div className='icons'>
         <img src={heart} onClick={()=>this.incrementItem("clicked")} alt=""/>
         <img src={comment} alt=""/>
         <img src={send} alt=""/>
         </div>
         <div>
           <p>{this.state.clicks} likes</p>
           <p>cat_cat_uk "my best pose"</p>
           <p>view all 50 comments</p>
         </div>

         <div className= 'imageTitle'>
             <img className='oliver' src={Oliver} alt=''/>
             <h6>cat_cat_uk</h6>
         </div>
        

         <div className="cat">
             <img src={Sphynx} alt="" />
        
         </div>

         <div className='icons'>
          
          <img src={heart} onClick={()=>this.incrementItem("clicked")} alt=""/>
          
          <img src={comment} alt=""/>
          <img src={send} alt=""/>
         </div>
         <div>
           <p>{this.state.clicks} likes</p>
           <p>cat_cat_uk "New sweater"</p>
           <p>view all 167 comments</p>
         </div>


         <div className= 'imageTitle'>
             <img className='oliver' src={Oliver} alt=''/>
             <h6>cat_cat_uk</h6>
         </div>
        

         <div className="cat">
             <img src={Funcat} alt="" />
        
         </div>

         <div className='icons'>
         <img src={heart} onClick={()=>this.incrementItem("clicked")} alt=""/>
         <img src={comment} alt=""/>
         <img src={send} alt=""/>
         </div>
         <div>
         <p>{this.state.clicks} likes</p>
           <p>cat_cat_uk "Hate my human"</p>
           <p>view all 89 comments</p>
         </div>


         <div className= 'imageTitle'>
             <img className='oliver' src={Oliver} alt=''/>
             <h6>cat_cat_uk</h6>
         </div>
        

         <div className="cat">
             <img src={Uglycat} alt="" />
        
         </div>

         <div className='icons'>
         <img src={heart} onClick={()=>this.incrementItem("clicked")} alt=""/>
         <img src={comment} alt=""/>
         <img src={send} alt=""/>
         </div>
         <div>
         <p>{this.state.clicks} likes</p>
           <p>cat_cat_uk "Do you love me?"</p>
           <p>view all 667 comments</p>
         </div>

     </div>








  
      
  
      

      
    
    

 
 

      


    
      
    
  );
}}

export default App;
