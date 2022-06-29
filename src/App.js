import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
// import Animations from './components/Cart/Animation';
import { Route } from 'react-router-dom';
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh';
import Loader from './components/Loader';

function App() {

  const search = window.location.search;
  var tableNo = search.substring(9,10);
  let hoster = window.location.host;
  let y = hoster.substring(0, hoster.length - 23);
  // let tableNo = new URLSearchParams(search).get('tableNo');
  console.log(hoster);
  const [datas, setDatas] = React.useState([]);
  const [colors, setColors] = React.useState([]);
  const [banners, setBanners] = React.useState([]);

  React.useEffect(() => {
    const TriggerFunction = async () => {
      try {
        await axios
          .get(`https://api.eatx.in/api/brand-metadata/tcd`)
          .then((data) => {
            setDatas(data.data.data);
            console.log("abcabc", data);
          })
          .catch((err) => {
            // alert("Some error occured");
            console.log(err);
          });
      } catch (error) {
        // alert("Some error occured");
        console.log(error);
      }
    };
    TriggerFunction();

    const getColor = async () => {
      try {
        await axios
          .get(`https://api.eatx.in/api/eatx-theme/tcd/`)
          .then((color) => {
            setColors(color.data.data.appTheme);
            console.log("xyzxyz", color);
          })
          .catch((err) => {
            // alert("Some error occured");
            console.log(err);
          });
      } catch (error) {
        // alert("Some error occured");
        console.log(error);
      }
    };
    getColor();

    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token b9cb5acd0ef000c71ec4b24afc4ec3e6a8e4a1c5"
    );
    
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://api.eatx.in/api/coeats-carousels/tcd", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log("yyyyyy",result))
      .catch((error) => console.log("error", error));

    const getBanner = async () => {
      try {
        await axios
          .get(`https://api.eatx.in/api/coeats-carousels/tcd`)
          .then((banner) => {
            setBanners(banner.data.data[0]);
            console.log("ststst", banner.data.data[0]);
          })
          .catch((err) => {
            // alert("Some error occured");
            console.log(err);
          });
      } catch (error) {
        // alert("Some error occured");
        console.log(error);
      }
    };
    getBanner();
  }, []);

  const {loading} = useLoadingWithRefresh();
  return loading ? (
    <Loader message="Loading..."/>
  ) : (
    <Router>
      <GlobalStyle />
      <Hero apidatas={datas} colorData={colors} tableNo={tableNo} bannerImg={banners}/>
      {/* <Route path={'/loading'} exact>
        <Animations/>
      </Route> */}
    </Router>
  );
}

export default App;
