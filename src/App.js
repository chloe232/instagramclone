import React from 'react';
import './App.css';
import cat1 from "./cat1.jpeg"
import cat2 from "./cat2.jpeg"
import cat3 from "./cat3.jpg"
import cat4 from "./cat4.jpeg"
import cat5 from "./cat5.jpeg"

function App() {
  return (
    <div class="storyBar">
     <div1>
      <img src={cat1}></img>
      <p>Your Story</p>
     </div1> 
     <div2>
      <img src={cat2}></img>
      <p>cat_man</p>
     </div2>
     <div3>
      <img src={cat3}></img>
      <p>mini_squeak</p>
     </div3>
     <div4>
      <img src={cat4}></img>
      <p>king__of_cats</p>
     </div4>
      <div5>
     <img src={cat5}></img>
     <p>real_cat</p>
      </div5>

    </div>

  
  );
}

export default App;
