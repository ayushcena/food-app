import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import axios from 'axios';


function App() {

  let hoster = window.location.host;
  let y = hoster.substring(0, hoster.length - 24);
  console.log(y);
  const [datas, setDatas] = React.useState([]);

  React.useEffect(() => {
    const TriggerFunction = async () => {
      try {
        await axios.get(`https://api.eatx.in/api/brand-metadata/${y}`).then((data) => {
          setDatas(data.data.data);
          console.log(data);
        }).catch(err => {
          // alert("Some error occured");
          console.log(err);
        })
      } catch (error) {
        // alert("Some error occured");
        console.log(error);
      }
    }
    TriggerFunction();
  }, []);
  return (
    <Router>
      <GlobalStyle />
      <Hero apidatas={datas} />
    </Router>
  );
}

export default App;
