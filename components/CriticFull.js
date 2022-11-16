import styles from '../styles/CriticFull.module.css';
import {Doughnut} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { useSelector } from 'react-redux';
import YouTube from "react-youtube";


function CriticFull() {

  const data = useSelector((state) => state.critics.value);
let compagniesName = ''
 for (let company of data.compagnies) 
    { compagniesName += `${company.name} ` }

console.log(compagniesName)


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


  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <img className={styles.containerImage} src={data.imgUrl} />
        <div className={styles.title}>{data.name}</div>
        <div className={styles.containerGrid}>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.companies}>developers : {compagniesName}</div>
   

          <div className={styles.outerDoughnut}>
            <div className={styles.doughnut}>
              <div className={styles.innerDoughnut}>
                <div className={styles.rating}>{Math.round(data.rating)}</div>
                
              </div>
              <Doughnut height={82} width={82} data={ratingData}></Doughnut>
            </div>
          </div>
       {/*    <div className={styles.videoContainer}>
            <YouTube videoId={data.trailers[0].videoId} opts={opts} />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CriticFull;
