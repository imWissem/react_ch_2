import react,{useEffect, useState} from 'react' 
import Profile from './components/profile'
import img from "./components/profile_pic.jfif"

function App() {

  const inshow = false 
  const [show,setShow] = useState(inshow)
  const showFunction = () => {
    setShow(prevShow => !prevShow)
  }

  const [count, setCount] = useState(0)
  const tick =() => {
    setCount(prevCount => prevCount +1)
  }
  useEffect(() => {
    const interval = setInterval(tick,1000)
    return ()=> {
      clearInterval(interval)
    }
  },[count])

  return (
    <div className="App">
       <button onClick={ () => {showFunction()}} > {show === true ? "Hide Profile" : "Show Profile"}</button>
       <div> { (show === true)?
       <div>
       <div className="clock">
       {count} 
       </div>
       <Profile fullName="Wissem Zaiem"
                 bio="hello"
                 profession= "student"
                 img= {img}/>
        </div>: null }
        </div>
    </div>
  );
}

export default App;
