import styles from '../styles/CardGames.module.css';
import {HeartFilled, PropertySafetyFilled } from '@ant-design/icons';
import {Doughnut} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Icon } from '@iconify/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaystation, faXbox, faSteam} from '@fortawesome/free-brands-svg-icons'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { addCriticsToStore } from '../reducers/critics';




function CardGames(props) {

  const dispatch = useDispatch();
  const addCritic = (data) => {
  dispatch(addCriticsToStore(data)); 
  }


  var doughnutColor= "#F9200A"
  props.rating >= 80 ? doughnutColor="#2AA301" : props.rating >= 70 ? doughnutColor=" #DEDB00 " : doughnutColor= "#A30101"


  const data = {
    datasets: [
      {
        data: [props.rating, 100 - props.rating],
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


useEffect(() => {
    for (let i = 0; i < props.plateforms.length; i++) {
          if (props.plateforms[i].shortName == "Switch") {
            props.plateforms[i].shortName = <Icon style={{marginRight: "6px"}} icon="mdi:nintendo-switch"/>;
      }  else if (props.plateforms[i].shortName == "PS5") {
            props.plateforms[i].shortName  = <FontAwesomeIcon style={{marginRight: "5px"}} icon icon={faPlaystation}/>;
      }     
         else if (props.plateforms[i].shortName == "XBXS") {
            props.plateforms[i].shortName = <FontAwesomeIcon style={{marginRight: "5px"}} icon  icon={faXbox}/>;
      }
        else  if (props.plateforms[i].shortName == "PC") {
            props.plateforms[i].shortName = <FontAwesomeIcon style={{marginRight: "5px"}} icon icon={faSteam}/>;
      } else if (props.plateforms[i].shortName == "PS4")
            {props.plateforms[i].shortName = ""
      } else if (props.plateforms[i].shortName ==  "XB1")
      {props.plateforms[i].shortName = ""}
}  
  }, [])


 

  const logos = props.plateforms.map((data, i) => {
          return (data.shortName)
  })



const date = new Date(props.release);

const frontDate = `${date.getMonth()+1}/${date.getDay()}/${date.getFullYear()}`


  
  return (
    <Link href="/critic">
      <div onClick={() => addCritic(props)} className={styles.container}>
        <img className={styles.image} src={props.imgUrl} alt={props.icon} />
        <div className={styles.title}>{props.name}</div>
        <div className={styles.desc}>{props.desc} </div>

        <div className={styles.outerDoughnut}>
          <div className={styles.doughnut}>
            <div className={styles.innerDoughnut}>
              <div className={styles.rating}>{Math.round(props.rating)}</div>
            </div>
            <Doughnut height={82} width={82} data={data}></Doughnut>
            <div className={styles.dateContainer}>
              <div className={styles.releaseDate}>released date</div>
              <div>{frontDate}</div>
            </div>
            <div className={styles.logosContainer}>{logos}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardGames;
