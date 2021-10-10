import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';

export default function App() {

  return (
    <div className="App">
       <h1 className="headcontent"> Top Box office collection </h1>
    <Users />
    
    </div>
  );
}
//
function Users(){
  const namess = [
    {
      name: "Robo 2.0",
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/cf/2.0_film_poster.jpg",
      dis: "After mobiles start mysteriously flying out of the hands of people in Chennai, Dr Vaseegaran summons his trusted robot Chitti to ward off the bird-shaped supernatural powers of Pakshirajan."
    },
    {
      name: "Bigil",
      image:
        "https://vimocafe.com/wp-content/uploads/2019/11/Vijay-Bigil-Movie-Release-Date-on-Oct-25-Poster-HD.jpg",
      dis: "A former football player struggles to train a women's football team and avenge his father's death."
    },
    {
      name: "Kabali",
      image:
        "https://bloximages.chicago2.vip.townnews.com/indiawest.com/content/tncms/assets/v3/editorial/6/25/625b5d5c-5032-11e6-8a3b-c3248ab0f489/579258e1044a0.image.jpg?resize=1200%2C1599",
      dis: "Returning from prison, aged gangster Kabali confronts those who had destroyed his life. While doing so, he learns about what had happened to his family when he was gone."
    },
    {
      name: "Mersal",
      image:
        "https://m.media-amazon.com/images/M/MV5BNGY5NTI3NmQtMGYxMy00N2ZlLTg2YmUtMjNkYTQ3ZTJkYzliXkEyXkFqcGdeQXVyMTMwOTgxMTA4._V1_.jpg",
      dis: "A magician and a doctor attempt to expose the corruption at the heart of India's medical industry."
    }
  ];

  const [initialNames , setInitialNames] = useState(namess);

  const [names , setNames] = useState({name:"" , image:"" , dis:""});
  const [addlink , setAddlink] = useState(false);
  const styles ={
    backgroundColor: "white",
    fonstSize:"1.5rem",
    fontWeight:"bold",
    margin:"10px 0",
    display : addlink ? "block" : "none"
}
  return(
    <div>
     <div className="content">
      <input 
        type='text'
        style={styles}
        value = {names.name}
        placeholder="Charcter Name"
        onChange={e =>setNames({...names , name: e.target.value})}
        />
        <input 
        type='text'
        style={styles}
        value = {names.image}
        placeholder="Character Image Address"
        onChange={e =>setNames({...names , image: e.target.value})}
        />
         <input 
        type='text'
        style={styles}
        value = {names.dis}
        placeholder="Character Image Description"
        onChange={e =>setNames({...names , dis: e.target.value})}
        />
        <Button style={styles} onClick={()=>setInitialNames([...initialNames,names])} variant="outlined">Add</Button>
        <Button onClick={()=>setAddlink(!addlink)} variant="outlined">AddList</Button>
        {/* <button style={styles} onClick={()=>setInitialNames([...initialNames,names])}>Add </button> */}
        {/* <button onClick={()=>setAddlink(!addlink)}>AddList</button> */}
      </div>
        <div class="movie">
          {/* {initialNames.map((nm,index)=>(<Msg image={nm.image} name={nm.name} des={nm.dis} />))} */}
          {initialNames.map((nm,index)=>{
            return(
            <div>
            <Button 
            onClick={()=>{
            const removeIdx=index;
            setInitialNames(initialNames.filter((mv , idx)=> idx !==index));
             }}
             variant="text">
              Delete
              </Button>
            <Msg image={nm.image} name={nm.name} des={nm.dis} index={index} />
            </div>
            );
            })}
          </div>
    </div>
  )
}


function Msg({image , name, des, index}){
  //conditional styling
  const [show , setShow]= useState(false);
  const styles={display: show ? "block" :"none"};

  return(
    <div className="movieslot">
      <img height="150" className="images" src={image} alt={name} />
      <div className="inside">
        <Counter />
        {/* <Button variant="contained">Contained</Button> */}
        {/* <button>Delete</button> */}
        {/* <Users /> */}
        {/* <button 
            onClick={()=>{
            const removeIdx=index;
            setInitialNames(initialNames.filter((mv , idx)=> idx !==index));
             }}
             >
              Delete
              </button> */}
      </div>
      <h4 class="titlecontent" > Movie: {name} </h4>
      <Button onClick={()=>setShow(!show)} variant="contained">Description</Button>
      {/* <button onClick={()=>setShow(!show)}>Description</button> */}
      {/* <p  style={styles} className="msgcontent"> Description: {des} </p> */}
      {show ? <p className="msgcontent"> Description: {des} </p> : ""}
    </div>
  );
}
// function DeleteMovie({ind}){
//  <button onClick={()=>{
//    const copyMovies=[...initialNames];
//    const removeIdx=ind;
//    copyMovies.filter((mv , idx)=> idx !==ind);
//  }}>Delete</button>
// }
function Counter(){
  const [ like , SetLike] = useState(10);
  const [ disLike , DisLike] = useState(0);
  return(
    <div>
      <button onClick={()=>SetLike(like+1)}>👍{like}</button>
      <button onClick={()=>DisLike(disLike+1)}>👎{disLike}</button>
    </div>
  )
}


