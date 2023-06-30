import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Nextitem from './components/Nextitem';
import oyu3 from './images/oyu3.png';
import oyumid from './images/oyumid.png';

function App() {
  const [item, setItem] = useState({name: 'Kozy-Korpesh and Bayan Sulu', birth_year: 0, image_url: 'https://almaty.tv/news_photo/1618469383_news_b.jpeg', content:'Kozy-Korpesh and Bayan Sulu are legendary figures from a Kazakh epic poem, symbolizing eternal love. The tale, one of the most famous from the Kazakh oral tradition, has shaped national ideas of love, honor, and fidelity.'})
  const [user, setUser] = useState({username: '', year: 0});
  const [gameOver, setGameOver] = useState(false);
  const [usersArray, setUsersArray] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(usersArray));
  }, [usersArray]);


  const startGame = (event) => {
    if (event.key === 'Enter') {
      const username = event.target.value;
      const year = item.birth_year;
      const updatedUser = { username, year };
      setUser(updatedUser);
      const updatedUsersArray = [...usersArray, updatedUser];
      setUsersArray(updatedUsersArray);
      localStorage.setItem('users', JSON.stringify(updatedUsersArray));
    }
  };
  // console.log(usersArray)

  const [nextitems, setNextitems] = useState([
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

      if(item.birth_year <= birth_year){
        setItem({ name, birth_year, image_url, content })
      } else{
        // setItem({ name, birth_year, image_url, content })
        setGameOver(true);
        setUser({username: user.username, year: item.birth_year})
        // console.log('user year has been set', user)
        // console.log(item.birth_year)
      }
    }, 510);

    setTimeout(() => {
      setIsround(false);
      setSelectedItem(null); 
    }, 511);
  }

  // console.log(usersArray)

  const [isround, setIsround] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null);
  function cont(){
    setIsround(true)
  }

  return (
    <>

{user.username === ''
      ? (
  <div className="startscreen">
    <div className="logo">Back to the Future</div>
    <input
        type="text"
        className='impu'
        onKeyDown={startGame}
      />
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
    <div className="lpic"><img className='leftpic' src={item.image_url} alt="" /></div>
    <img className="oyu oyuDown" src={oyu3} alt="" />

    <div className="text">
      <div className="name">{item.name}</div>
      <div><div id="useryr">{item.birth_year}</div> year</div>

    </div>
  </div>

  <div className="rscreen">

  <div className="roundscreen">
    {
      gameOver === true 
      ? (
      <div className='lostPage'>
        <div className="youlost">You just lost :((</div>
          {/* <div className="scorebd">ScoreBoard</div>
          <div className="scoreboard">
          {usersArray.map(({ username}, index) => (
          <li key={index} username={username}>{username}</li>
          ))}
          {usersArray.map(({score}, index) => (
          <li key={index} score={score}>{score}</li>
          ))}
          </div> */}
      </div>
      ) : (<>
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
    </>)
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