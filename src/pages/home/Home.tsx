import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./home.module.css";
import App from "./keeping-home/button/button-pag";
import { CardCategory } from "./category-home/category";
import styles from "./home.module.css";
import Room from "./home-room/room";

function Home() {
  return (
    <>
      <div className={styles.wrapperHome}>
        <Header />
        <div className={styles.textWrapper}>
          <div className={styles.text}>
            <p>
              Добро пожаловать в наш интернет-магазин, где главные герои - ваш
              стиль, комфорт и функциональность! Независимо от того, ищете ли вы
              новую пару обуви, трендовую одежду, стильные мебельные изделия,
              передовые гаджеты или надежный велосипед - у нас вы найдете все
              это и даже больше! Будьте в центре модных трендов, создавайте
              функциональные и уютные пространства, наслаждайтесь передовыми
              технологиями и активным образом жизни с нашими продуктами.
              Воплощайте свои самые смелые идеи и делайте свои покупки с
              легкостью и удовольствием в нашем интернет-магазине. <br />
              Добро пожаловать в мир возможностей!
            </p>
          </div>
        </div>
        <CardCategory />
        <Room />
        <App />
        <Footer />
      </div>
    </>
  );
}

export default Home;
