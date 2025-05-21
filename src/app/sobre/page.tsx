import { Box, Button, Link } from "@mui/material";
import styles from "./sobre.styles.module.scss";
import Image from "next/image";

export default function Initial() {
  return (
    <>
      <Box className={styles["content"]}>
        <nav className={styles["content__nav"]}>
          <Box className={styles["content__nav__logo_area"]}>
            <Image
              src="/logo.png"
              width="72"
              height="100"
              alt="Logo"
              style={{ width: "15%", height: "auto" }}
            />
            <h1 className={styles["content__nav__logo_area__brand"]}>
              Poup.ai
            </h1>
          </Box>

          <Box className={styles["content__nav__redirect_pages"]}>
            <Link
              href="http://localhost:3000/about"
              className={styles["content__nav__redirect_pages__link"]}
            >
              Sobre nós
            </Link>
            <Link
              href="http://localhost:3000/services"
              className={styles["content__nav__redirect_pages__link"]}
            >
              Serviços
            </Link>
            <Link
              href="http://localhost:3000/contact"
              className={styles["content__nav__redirect_pages__link"]}
            >
              Entre em contato
            </Link>
          </Box>
          <Button
            variant="contained"
            href="http://localhost:3000/login"
            className={styles["content__nav__button"]}
          >
            Login
          </Button>
        </nav>

        <footer className={styles["content__footer"]}>
          <p>© 2025 Poup.ai | Todos os direitos reservados</p>
        </footer>
      </Box>
    </>
  );
}
