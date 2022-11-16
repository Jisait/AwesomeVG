import styles from '../styles/ArticleFull.module.css';
import { useSelector } from 'react-redux';

function ArticlesFull() {

  const data = useSelector((state) => state.articles.value);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.containerImg}>
          <img className={styles.image} src={data.image} />
        </div>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.contentContainer}>
          <div className={styles.enluminure}>{data.content[0]} </div>
          <div className={styles.content}>
            {data.content.substr(1).substring(0, data.content.length - 16)}{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fringilla, sem quis venenatis gravida, eros erat convallis enim, sed
            pretium ipsum libero vel arcu. Pellentesque feugiat luctus dui at
            imperdiet. Cras ac velit augue. Fusce non lorem elit. Praesent
            consequat leo sit amet luctus auctor. Vivamus tristique ut leo a
            tempus. Quisque placerat turpis a tempor facilisis. Etiam
            consectetur, felis maximus varius porta, sapien lorem efficitur
            ipsum, id posuere arcu ex et est. Donec ultrices, nunc nec mollis
            finibus, sem dolor condimentum ligula, eget posuere sapien augue
            eget neque. Fusce id accumsan odio. Integer sed ligula at nisi
            hendrerit maximus. Integer cursus dignissim metus. Sed scelerisque
            efficitur neque, ac finibus eros congue non. Quisque molestie tellus
            tortor, id sagittis dui mollis eget. Mauris imperdiet sit amet risus
            finibus feugiat. Etiam dolor augue, euismod ut porttitor quis,
            placerat eu mi. Phasellus laoreet nibh id volutpat feugiat.
            Suspendisse interdum risus sed sodales faucibus. Ut semper fermentum
            diam, non lobortis quam aliquet sit amet. Quisque luctus scelerisque
            urna et dictum. Fusce gravida mollis nibh sed cursus. Aenean porta
            efficitur blandit. Vestibulum vulputate ac sapien in hendrerit.
            Mauris quis orci quis justo ultricies sodales sit amet sed sapien.
            Sed aliquet porta quam, at molestie magna placerat ac. Curabitur leo
            tellus, gravida eget imperdiet iaculis, varius id turpis. Maecenas
            lobortis augue quis ullamcorper ultricies. Proin vel nulla blandit,
            sodales ligula id, pretium velit. Pellentesque blandit pretium
            justo, et tincidunt lectus ornare quis. Ut et ante vitae tellus
            porta egestas eget quis libero. Praesent condimentum at velit id
            rhoncus. Mauris mauris lectus, faucibus eget odio ut, dictum viverra
            mauris. Nunc luctus sit amet diam in vulputate.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlesFull;
