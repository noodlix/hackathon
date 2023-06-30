import { useState, useEffect } from 'react';
// import pen from "../src/images/pen.png";
// import iphone from ""
import oyu3 from '../src/images/oyu3.png';
import oyumid from '../src/images/oyumid.png';
// import oyu4 from '../src/images/oyu4.png';
import './App.css';
import Nextitem from './components/Nextitem';
import axios from 'axios';

function App() {
  const [item, setItem] = useState({name: 'pen', birth_year: 1928, image_url: 'https://www.pngplay.com/wp-content/uploads/2/Pen-PNG-Pic-Background-1.png', content:'aa'})

  const [user, setUser] = useState(null)

  function startGame(){
    setUser('gg')
  }
  
  const [nextitems, setNextitems] = useState([
    // {
    //   name: 'Kerey Khan',
    //   birth_year: 1390,
    //   image_url: 'https://e-history.kz/storage/tmp/resize/prominent_figures/1200_0_a78456c811efa07c0bcf4d05636f0487.jpg',
    //   content:'Kerey Khan is a legendary figure, considered a founder of the Kazakh Khanate alongside Zhanibek Khan. His reign had a profound impact on the formation of Kazakh statehood.'
    // },
    // {
    //   name: 'Zhanibek Khan',
    //   birth_year: 1389,
    //   image_url: 'https://e-history.kz/storage/tmp/resize/prominent_figures/1200_0_967954013499edebaa340adbb8de57cc.jpg',
    //   content:'Zhanibek Khan, alongside Kerey Khan, established the Kazakh Khanate. His leadership was pivotal in the formation of Kazakh identity and statehood.'
    // },
    // {
    //   name: 'Abylai Khan',
    //   birth_year: 1711,
    //   image_url: 'https://el.kz/upload/medialibrary/adc/adc121fa8173ba3898ecd2600ad5f7f5.jpg',
    //   content:'A significant Kazakh leader of the Middle Jüz. Abylai Khan was known for his efforts to preserve the independence of the Kazakh Khanate against the Dzungar and Russian empires.'
    // },
    // {
    //   name: 'Kenesary Khan',
    //   birth_year: 1802,
    //   image_url: 'https://i.redd.it/hb572n5nc1x71.jpg',
    //   content:'Kenesary Khan was the last Khan of the Kazakh Khanate. His rebellion against Russian rule is seen by some as a national liberation struggle.'
    // },
  ])

  useEffect(() => {
    console.log(`http://127.0.0.1:8000/api/get-next/${item.birth_year}`)
    axios.get(`http://127.0.0.1:8000/api/get-next/${item.birth_year}`)
     .then(res => {
       console.log(res.data)
       setNextitems(res.data)
      })
  }, [item]);

  function itemChosen({ name, birth_year, image_url, content }){
    setSelectedItem(name); 

    setTimeout(() => {
      setItem({ name, birth_year, image_url, content })
    }, 510);

    setTimeout(() => {
      setIsround(false);
      setSelectedItem(null); 
    }, 511);
    // console.log(isround)
  }

  // console.log(item.content)

  const [isround, setIsround] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null);
  function cont(){
    setIsround(true)
    // console.log(isround)
  }

  return (
    <>

{user === null
      ? (
  <div className="startscreen">
    
    <div className="start" onClick={startGame}>start</div>
    <input type="text" placeholder='your username' />
  </div>
        )
      : (
        
<>

<div className="middleOyus">
  <img className="middleOyu" src={oyumid} alt="" />
  <img className="middleOyu" src={oyumid} alt="" />
  <img className="middleOyu" src={oyumid} alt="" />
  <img className="middleOyu" src={oyumid} alt="" />
  <img className="middleOyu" src={oyumid} alt="" />
</div>

<div className="main">
  <div className="lscreen">
      <img className="oyu oyuUp" src={oyu3} alt="" />
    <div className="lpic"><img src={item.image_url} alt="" /></div>
    <img className="oyu oyuDown" src={oyu3} alt="" />

    <div className="text">
      <div className="name">{item.name}</div>
      <div className="">{item.birth_year} year</div>

    </div>
  </div>

  <div className="rscreen">

  <div className="roundscreen">
    {isround === true
      ? (
        nextitems.map(({ name, birth_year, image_url, content}, index) => (
         <Nextitem key={index} name={name} birth_year={birth_year} image_url={image_url} content={content} onClick={() => itemChosen({ name, birth_year, image_url, content })} isSelected={name === selectedItem} />
        ))
        )
      : (
        <div className="options"> 
        <div className="description">{item.content}</div>
          <div className="continue option" onClick={cont}>continue</div>
          {/* <div className="gohome option" onClick={quit}>go home</div> */}
        </div>
        )
    }
  </div> 

  </div>
</div>
</>
        )
      }
    </>
  )
}

export default App;