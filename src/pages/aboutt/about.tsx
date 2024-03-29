import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.containerAbout}>
      <Header />
      <div className={styles.WrapperAbout}>
        <div className={styles.general}>
          <h1>Общее описание проекта:</h1>
          <p>
            Проект представляет собой веб-приложение интернет-магазина. Он
            включает в себя несколько страниц, такие как главная страница,
            страницы каталога товаров, страницы описания товара, корзину покупок
            и дополнительные страницы "О нас" и "Контакты". Ниже представлено
            краткое описание каждой из этих частей.
          </p>
        </div>
        <div className={styles.basic}>
          <h1>Используемые технологии:</h1>
          <p>
            1. **React**: Проект создан с использованием библиотеки React,
            которая позволяет создавать динамические пользовательские
            интерфейсы.
            <br />
            2. **React Router**: Для маршрутизации между различными страницами в
            проекте используется библиотека React Router. Она позволяет
            управлять навигацией в веб-приложении.
            <br />
            3. **Axios**: Для выполнения HTTP-запросов к API используется
            библиотека Axios.
            <br />
            4. **CSS Modules**: Стилизация компонентов осуществляется с
            использованием CSS Modules, что позволяет изолировать стили для
            каждого компонента.
            <br />
            5. **Структура проекта**: Проект разделен на компоненты, которые
            могут быть многократно использованы и легко поддерживаемы.
          </p>
        </div>
        <div className={styles.structure}>
          <h1>Структура проекта:</h1>
          <p>
            Проект содержит следующие ключевые компоненты и части:
            <br />
            1. **Главная страница (Home.tsx)**: Основная страница приложения,
            вероятно, отображает некоторую информацию о продуктах или
            предоставляет навигацию к другим разделам.
            <br />
            2. **Страница каталога товаров (Catalog.tsx)**: Страница, на которой
            отображаются товары из каталога, возможно, с фильтрами и поиском.
            <br />
            3. **Страница описания товара (ModalProduct.tsx)**: Страница с
            подробной информацией о конкретном товаре.
            <br />
            4. **Страницы "О нас" и "Контакты" (About.tsx, Contact.tsx)**:
            Страницы, на которых предоставлена информация о компании или
            контактные данные.
            <br />
            5. **Контекст корзины (cart-context.tsx)**: Кастомный контекст,
            предоставляющий информацию о корзине покупок и функции для
            добавления и удаления товаров из корзины.
            <br />
            6. **Корзина покупок (Basket.tsx)**: Страница, на которой
            отображается содержимое корзины покупок. Возможно, здесь также
            реализовано добавление и удаление товаров из корзины.
          </p>
        </div>
        <div className={styles.info}>
          <h1>Общая идея работы приложения:</h1>
          <p>
            Пользователи могут просматривать продукты в каталоге, переходить на
            страницы с подробной информацией о товарах, добавлять товары в
            корзину и удалять их оттуда. Корзина покупок также отображает общую
            стоимость выбранных товаров. Приложение поддерживает навигацию между
            различными разделами, такими как главная страница, страница
            каталога, описание товара и другие.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
