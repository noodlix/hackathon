import { useEffect, useState } from 'react';
import oyu3 from '../src/images/oyu3.png';
import oyumid from '../src/images/oyumid.png';
// import oyu4 from '../src/images/oyu4.png';
import './App.css';
import Nextitem from './components/Nextitem';
function App() {
  const [item, setItem] = useState({name: 'pen', birth_year: 100, image_url: 'https://www.pngplay.com/wp-content/uploads/2/Pen-PNG-Pic-Background-1.png', content:'aa'})

  const [user, setUser] = useState('');
  const [usersArray, setUsersArray] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(usersArray));
  }, [usersArray]);


  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const newUser = {
        username: event.target.value,
        year: new Date().getFullYear()
      };
      const updatedUsersArray = [...usersArray, newUser];
      setUsersArray(updatedUsersArray);
      localStorage.setItem('users', JSON.stringify(updatedUsersArray));
      setUser(event.target.value);
    }
  };
  console.log(usersArray)

  const [nextitems, setNextitems] = useState([
    {
      name: 'Kerey Khan',
      birth_year: 1390,
      image_url: 'https://e-history.kz/storage/tmp/resize/prominent_figures/1200_0_a78456c811efa07c0bcf4d05636f0487.jpg',
      content:'Kerey Khan is a legendary figure, considered a founder of the Kazakh Khanate alongside Zhanibek Khan. His reign had a profound impact on the formation of Kazakh statehood.'
    },
    {
      name: 'Zhanibek Khan',
      birth_year: 1389,
      image_url: 'https://e-history.kz/storage/tmp/resize/prominent_figures/1200_0_967954013499edebaa340adbb8de57cc.jpg',
      content:'Zhanibek Khan, alongside Kerey Khan, established the Kazakh Khanate. His leadership was pivotal in the formation of Kazakh identity and statehood.'
    },
    {
      name: 'Abylai Khan',
      birth_year: 1711,
      image_url: 'https://el.kz/upload/medialibrary/adc/adc121fa8173ba3898ecd2600ad5f7f5.jpg',
      content:'A significant Kazakh leader of the Middle Jüz. Abylai Khan was known for his efforts to preserve the independence of the Kazakh Khanate against the Dzungar and Russian empires.'
    },
    {
      name: 'Kenesary Khan',
      birth_year: 1802,
      image_url: 'https://i.redd.it/hb572n5nc1x71.jpg',
      content:'Kenesary Khan was the last Khan of the Kazakh Khanate. His rebellion against Russian rule is seen by some as a national liberation struggle.'
    },
  ])

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

  console.log(usersArray)

  const [isround, setIsround] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null);
  function cont(){
    setIsround(true)
    // console.log(isround)
  }

  return (
    <>

{user === ''
      ? (
  <div className="startscreen">
    <div className="logo">Dalida💘</div>
    {/* <input type="text" className='inp' onKeyPress={}/> */}
    <input
        type="text"
        onKeyDown={handleKeyPress}
      />
    {/* <div className="start" onClick={startGame}>start</div> */}
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