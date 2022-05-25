import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import Animations from './components/Cart/Animation';
import { Route } from 'react-router-dom';


function App() {

  const search = window.location.search;
  var tableNo = search.substring(9,10);
  let hoster = window.location.host;
  let y = hoster.substring(0, hoster.length - 23);
  // let tableNo = new URLSearchParams(search).get('tableNo');
  console.log(hoster);
  const [datas, setDatas] = React.useState([]);
  const [colors, setColors] = React.useState([]);

  React.useEffect(() => {
    const TriggerFunction = async () => {
      try {
        await axios.get(`https://api.eatx.in/api/brand-metadata/tcd`).then((data) => {
          setDatas(data.data.data);
          console.log("abcabc",data);
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

    const getColor = async () => {
      try {
        await axios.get(`https://api.eatx.in/api/eatx-theme/tcd`).then((color) => {
          setColors(color.data.data.appTheme);
          console.log("xyzxyz",color);
        }).catch(err => {
          // alert("Some error occured");
          console.log(err);
        })
      } catch (error) {
        // alert("Some error occured");
        console.log(error);
      }
    }
    getColor();
  }, []);
  return (
    <Router>
      <GlobalStyle />
      <Hero apidatas={datas} colorData={colors} tableNo={tableNo}/>
      <Route path={'/loading'} exact>
        <Animations/>
      </Route>
    </Router>
  );
}

export default App;
