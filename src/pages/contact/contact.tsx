import { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "./contact.module.css";
import { Users } from "../../entities/entitiens-basket";
import GetUsers from "../../Api/get-users";

export default function Contact() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await GetUsers();
        if (response) {
          setUsers(response);
        }
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className={styles.containerUsers}>
      <Header />
      <div className={styles.basketWrapper}>
        {users.map((users: Users) => (
          <div className={styles.CardContainer} key={users.id}>
            <p>{users.name}</p>
            <img
              src={users.email}
              style={{
                width: "150px",
                height: "150px",
              }}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
