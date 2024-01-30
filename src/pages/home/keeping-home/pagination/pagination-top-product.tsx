import { Catalogs } from "../../../../entities/entities-catalog";

import styles from "./pagin.module.css";

interface PaginationProps {
  posts: Catalogs[];
  onHandleNextPageNumber: () => void;
  onHandlePrevioustPageNumber: () => void;
}

const TopProduct = ({
  posts,
  onHandleNextPageNumber,
  onHandlePrevioustPageNumber,
}: PaginationProps) => {
  return (
    <div className={styles.wrapperCard}>
      <h1 className={styles.heading}>Top Products</h1>

      <ul className={styles.ul}>
        {posts.map((Catalogs: Catalogs) => (
          <div className={styles.card} key={Catalogs.id}>
            <img src={Catalogs.images[1]} className={styles.card__background} />
            <div className={styles.card__content}>
              <div className={styles.card__content}>
                <h2 className={styles.card__title}>{Catalogs.title}</h2>
              </div>
              <button className={styles.card__button}>${Catalogs.price}</button>
            </div>
          </div>
        ))}
      </ul>

      <div className={styles.flipButton}>
        <button
          className={styles.Previous}
          onClick={onHandlePrevioustPageNumber}
        >
          Previous
        </button>

        <button className={styles.Next} onClick={onHandleNextPageNumber}>
          Next
        </button>
      </div>
    </div>
  );
};

export { TopProduct };
