import styles from '../styles/CriticFull.module.css';
import {useEffect, useState} from 'react';
import {Doughnut} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { useSelector } from 'react-redux';
import YouTube from "react-youtube";
import React from 'react';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';


function CriticFull() {

  const data = useSelector((state) => state.critics.value);
  console.log(data)
let compagniesName = ''
 for (let company of data.compagnies) 
    { compagniesName += `${company.name} / `}

let companyFormated = compagniesName.substring(0, compagniesName.length - 2);

let genresFormated = data.genres.map((genres, i) => {
      return   <div className={styles.genres}>{genres.name}</div>
})


const logos = data.plateforms.map((data, i) => {
        return (data.shortName)
})




  var doughnutColor= "#F9200A"
  data.rating >= 80 ? doughnutColor="#2AA301" : data.rating >= 70 ? doughnutColor=" #DEDB00 " : doughnutColor= "#A30101"


  const ratingData = {
    datasets: [
      {
        data: [data.rating, 100 - data.rating],
        backgroundColor: [doughnutColor, "transparent"],
        borderColor: ["transparent", "transparent"],
        events: [],
        cutout: "75%",
        legend: {
          display: false
        },
        
      },
    ],
  };

  const opts = {
    height: "180",
    width: "320",
    playerVars: {
      autoplay: 0,
      fs: 0,
      iv_load_policy: 3,
      modestbranding:1,
      showinfo: 0
  
    
    },
  };

  const autoplay = useRef(Autoplay({ delay: 3000 }));
const imgCarrousel = data.screenshots.map((img, i) => {
    return <img src={`https://img.opencritic.com/${img.sm}`} />
  }) 

  const carrousel = (
    <Carousel
      sx={{ maxWidth: 400 }}
      mx="auto"
      withIndicators
      height={225}
/*       plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset} */
    >
          {imgCarrousel}
    
    </Carousel>
  );


  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <img className={styles.containerImage} src={data.imgUrl} />
        <div className={styles.containerGrid}>
          <div className={styles.title}>{data.name}</div>
          <div className={styles.companies}>by {companyFormated}</div>
          <div className={styles.genresContainer}>
            {genresFormated}
            <div className={styles.plateformsContainer}>{logos}</div>
          </div>

          <div className={styles.trait}></div>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.trait2}></div>
      

          <div className={styles.outerDoughnut}>
            <div className={styles.doughnut}>
              <div className={styles.innerDoughnut}>
                <div className={styles.rating}>{Math.round(data.rating)}</div>
              </div>
              <Doughnut height={82} width={82} data={ratingData}></Doughnut>
            </div>
          </div>
          
        </div>
        {carrousel}
        {/* <div className={styles.videoContainer}>
            <YouTube videoId={data.trailers[0].videoId} opts={opts} />
          </div> */}
      </div>
    </div>
  );
}

export default CriticFull;
