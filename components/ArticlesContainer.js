import styles from '../styles/ArticlesContainer.module.css';
import TopArticle from './TopArticle'
import {useState, useEffect} from 'react'
import Link from 'next/link'

function ArticlesContainer() {

const [topArticle, setTopArticle] = useState([])

// FETCH NEWSAPI //


useEffect(() => { 
  fetch(`https://awesome-vg-backend.vercel.app//articles`)
    .then(response => response.json())
    .then(data => {
      setTopArticle(data.results.articles);
    })
  }, []) 

const topArticleFront = topArticle.slice(10,13).map((data, index) => {
  return <TopArticle id={index} image={data.urlToImage} title={data.title} content={data.content}>
        
  </TopArticle>
})


  return (
    <div className={styles.main}>
      <div className={styles.blueContainer}>
        <div className={styles.topArticleContainer}>
          <div className={styles.topArticleTitle}>News</div>
          {topArticleFront}
        </div>
        <div className={styles.yellowContainer}>
   
        </div>
      </div>
    </div>
  );
}

export default ArticlesContainer;
