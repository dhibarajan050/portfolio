import React from 'react';
import './scss/style.scss';
import Home from './components/Home_Page/Home';
import Loading from './components/Loading/Loading';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function App() {
  const [loading, setloading] = React.useState(true)

  React.useEffect(()=>{

    setTimeout(() => {
      setloading(false)
    }, (4000));

    AOS.init({duration:2500})

  },[])
  return (
    <div>
{/* Conditional (ternary) operator */}
  {loading ? <Loading /> : <Home/>}
      
    </div>
  );
}

export default App;
