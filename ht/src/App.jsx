import { useState, useEffect } from 'react';
// import pen from "../src/images/pen.png";
// import iphone from ""
import './App.css';
import Nextitem from './components/Nextitem';
import axios from 'axios';

function App() {
  const [item, setItem] = useState({name: 'pen', price: 1500, image_url: 'https://www.pngplay.com/wp-content/uploads/2/Pen-PNG-Pic-Background-1.png'})
  const [nextitems, setNextitems] = useState([])

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/get-next/${item.price}`)
     .then(res => {
        console.log(res)
        setNextitems(res.data)
      })
  }, []);

  function itemChosen({ name, price, image_url }){
    // function chooseAnimation(name){
      setSelectedItem(name); // Update the selected item
    // }
    setItem({ name, price, image_url })
    // setIsround(false)
    setTimeout(() => {
      setIsround(false);
    }, 1010);

    setTimeout(() => {
      setSelectedItem(null); 
    }, 1011);
    // console.log(isround)
  }

  const [isround, setIsround] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null);
  function cont(){
    setIsround(true)
    // console.log(isround)
  }

  function quit(){
  }

  function move(){
  }

  return (
    <>
<div className="main">
  <div className="lscreen">
    <div className="lpic"><img src={item.image_url} alt="" /></div>
    <div className="text">
      <div className="name">{item.name}</div>
      <div className="price">{item.price}tg</div>

    </div>
  </div>

  <div className="rscreen">

  <div className="roundscreen">
    {isround === true
      ? (
        nextitems.map(({ name, price, image_url}, index) => (
         <Nextitem key={index} name={name} price={price} image_url={image_url} onClick={() => itemChosen({ name, price, image_url })} isSelected={name === selectedItem} />
        ))
        )
      : (
        <div className="options"> 
          <div className="continue option" onClick={cont}>continue</div>
          <div className="gohome option" onClick={quit}>go home</div>
        </div>
        )
    }
{/* 
      <div className="item" id='aaa'>
        <div className="rpic"><img src='https://ss7.vzw.com/is/image/VerizonWireless/iphone-14-yellow-spring2023?$device-lg$' alt="" /></div>
        <div className="text">
            <div className="name">1</div>
            <div className="price">100tg</div>
        </div>
      </div>

      <div className="item">
        <div className="rpic"><img src='https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Transparent-HD-Photo.png' alt="" /></div>
        <div className="text">
            <div className="name">2</div>
            <div className="price">100tg</div>
        </div>
      </div>

      <div className="item">
        <div className="rpic"><img src='https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-13-pro-max-sierra-blue-back.png?v=35' alt="" /></div>
        <div className="text">
            <div className="name">3</div>
            <div className="price">100tg</div>
        </div>
      </div>

      <div className="item">
        <div className="rpic"><img src='https://imgpng.ru/d/iphone_13_PNG27.png' alt="" /></div>
        <div className="text">
            <div className="name">4</div>
            <div className="price">100tg</div>
        </div>
      </div>

      <button onClick={move}>kjhg</button>*/}
  </div> 


 

  {/* <div className="startscreen">
    <div className="start option">start</div>
  </div> */}

  {/* <div className="quitscreen">
    <div className="quit">game over</div>
    <div className="quit">your inventory</div>
  </div> */}
  </div>
</div>
    </>
  )
}

export default App
