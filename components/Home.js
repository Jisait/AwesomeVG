import styles from "../styles/Home.module.css";
import CardGames from "../components/CardGames";
import { useEffect, useState, useRef } from "react";
import FirstArticles from './FirstArticles'
import SecondArticles from './SecondArticles'
import Link from 'next/link'

function Home() {
  
    const [firstArticle, setFirstArticle] = useState() 
  const [secondArticle, setSecondArticle] = useState()



 
  useEffect(() => { 
    fetch('https://awesome-vg-backend.vercel.app/articles')
      .then(response => response.json())
      .then(data => {
        console.log("front", data)
  
        setFirstArticle(<FirstArticles image={data.results.articles[0].urlToImage} title={data.results.articles[0].title} author={data.results.articles[0].author} date={new Intl.DateTimeFormat('en-US').format(new Date(data.results.articles[0].publishedAt))} desc={data.results.articles[0].description} content={data.results.articles[0].content}></FirstArticles>)
        setSecondArticle(<SecondArticles  image={data.results.articles[1].urlToImage} title={data.results.articles[1].title} author={data.results.articles[1].author} date={new Intl.DateTimeFormat('en-US').format(new Date(data.results.articles[1].publishedAt))} desc={data.results.articles[1].description} content={data.results.articles[1].content}></SecondArticles>)
        })
    }, []) 


  const [gamesData, setGamesData] = useState([]);
  const stopDouble = useRef(false)

  
  // FETCH OPENCRITIC //

  /*  const fetch = require('node-fetch');  */

   useEffect(() => {  
    if(stopDouble.current === false) {
 
    const url = "https://opencritic-api.p.rapidapi.com/game/recently-released";

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "23817336c4msh3c49599a8f4733ep134bd9jsn63ee41f3c3db",
        "X-RapidAPI-Host": "opencritic-api.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then(async (data) => {
        for (let item of data) 
        {
          const url = `https://opencritic-api.p.rapidapi.com/game/${item.id}`;

          const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "23817336c4msh3c49599a8f4733ep134bd9jsn63ee41f3c3db",
              "X-RapidAPI-Host": "opencritic-api.p.rapidapi.com",
            },
          };

          await boucle(url, options);

          function boucle(url, options) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                fetch(url, options)
                  .then((res) => res.json())
                  .then((dataID) => {
              
                 
                    setGamesData(data => [...data, dataID]); 
                    resolve();
                  });
              }, 100);
            });
          }
        }
      });
      return () => stopDouble.current = true
    }
  }, []);

  // OPENCRITIC MAP //

const cardFromAPI = gamesData.map((data, i) => {
        const image = ""
            if (data.images == undefined || data.images.banner == undefined)
            {image = data.images.masthead.og}
            else {image= data.images.banner.og}
  return     <CardGames name={data.name} imgUrl={`https://img.opencritic.com/${image}`} rating={data.medianScore} plateforms={data.Platforms} desc={data.description}  release={data.firstReleaseDate} screenshots={data.images.screenshots} numReviews={data.numReviews} genres={data.Genres} compagnies={data.Companies} trailers={data.trailers}>
              </CardGames>
})

  // OPENCRITIC MAP //

  return (
    <div className={styles.main}>
      <div className={styles.mainArticleContainer}>
        {firstArticle}
        {secondArticle}
      </div>
      <div style={{ gridColumn: "2" }}>
        <div className={styles.lastReleasedContainer}>
          <h2 className={styles.lastReleased}> Last released</h2>
        </div>
        <div className={styles.cardContainer}>{cardFromAPI}</div>
      </div>
    </div>
  );
}

export default Home;
