import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Nextitem from './components/Nextitem';
import oyu3 from './images/oyu3.png';
import oyumid from './images/oyumid.png';

function App() {
  const [item, setItem] = useState({name: 'pen', birth_year: 0, image_url: 'https://www.pngplay.com/wp-content/uploads/2/Pen-PNG-Pic-Background-1.png', content:'aa'})
  const [user, setUser] = useState({username: '', year: 0});
  const [score, setScore] = useState(0);
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
      const score = score;
      const updatedUser = { username, year, score };
      setUser(updatedUser);
      const updatedUsersArray = [...usersArray, updatedUser];
      setUsersArray(updatedUsersArray);
      localStorage.setItem('users', JSON.stringify(updatedUsersArray));
    }
  };
  console.log(usersArray)

  const [nextitems, setNextitems] = useState([
  ])

  useEffect(() => {
    let sss = item.birth_year
    console.log(`http://127.0.0.1:8000/api/get-next/${item.birth_year}`)
    axios.get(`http://127.0.0.1:8000/api/get-next/${item.birth_year}`)
     .then(res => {
       console.log(res.data)
       setNextitems(res.data)
      })
  }, [item]);

  function itemChosen({ name, birth_year, image_url, content }){
    setSelectedItem(name); 


      if(item.birth_year <= birth_year){
        setItem({ name, birth_year, image_url, content })
      } else{
        setGameOver(true);
        // setUser({'username': user.username, 'year': item.birth_year})
        // const username2 = '21123100';
        // const year2 = 123;
        // const updatedUser2 = { username2, year2 };
        // setUser({username2, year2});
        // console.log('user year has been set', user)
        // console.log(item.birth_year)
      }

      setIsround(false);
      setSelectedItem(null); 

  }

  console.log(usersArray)

  const [isround, setIsround] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null);
  function cont(){
    setIsround(true)
    setScore(score+1)
    console.log(score)
  }


  return (
    <>

{user.username === ''
      ? (
  <div className="startscreen">
    <div className="logo">Dalida💘</div>
    <input
        type="text"
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
        <div className="youlost">You just lost :</div>
        <div className="scorebd">ScoreBoard</div>
        <div className="scoreboard">
        {usersArray.map(({ username}, index) => (
         <li key={index} username={username}>{username}</li>
        ))}
        {usersArray.map(({score}, index) => (
         <li key={index} score={score}>{score}</li>
        ))}
        </div>
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
        <div className="continue option" onClick={cont}>continue</div>
        {/* <div className="description">{item.content}</div>
        {item.name === 'Dalida Yerkuliyeva' ? (<></>) : (
          
          
        )} */}
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