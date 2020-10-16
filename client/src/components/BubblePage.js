import React, { useState, useEffect, componentDidMount  } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

export const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const getData = () => {
    axiosWithAuth()
    .get('/colors')
    .then((res) => {
        console.log('not this so much though')
        setColorList(res.data)
    })
    .catch((err) => {
        console.log(err)
    })

}

useEffect(() => {
    getData();
}, [])
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

