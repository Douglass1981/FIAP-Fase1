import styles from "./contact.styles.module.scss";
import { colors } from "../mui.styles";
import { Box, Button, Link, TextField } from "@mui/material";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Box className={styles["content"]}>
        <nav className={styles["content__nav"]}>
          <Link
            className={styles["content__nav__logo_area"]}
            href="http://localhost:3000"
            sx={{ textDecoration: "none" }}
          >
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
          </Link>

          <Box className={styles["content__nav__redirect_pages"]}>
            <Link
              sx={{ textDecoration: "none", color: colors.black }}
              href="http://localhost:3000/about"
              className={styles["content__nav__redirect_pages__link"]}
            >
              Sobre nós
            </Link>
            <Link
              sx={{ textDecoration: "none", color: colors.black }}
              href="http://localhost:3000/services"
              className={styles["content__nav__redirect_pages__link"]}
            >
              Serviços
            </Link>
            <Link
              sx={{ textDecoration: "none", color: colors.black }}
              href="http://localhost:3000/contact"
              className={styles["content__nav__redirect_pages__link"]}
            >
              Entre em contato
            </Link>
          </Box>
          <Button
            sx={{
              textTransform: "none",
              backgroundColor: colors.bluePrimary500,
            }}
            variant="contained"
            href="http://localhost:3000/login"
            className={styles["content__nav__button"]}
          >
            Login
          </Button>
        </nav>

        <main>
          <Box className={styles["content__container"]}>
            <Box className={styles["content__container__form-area"]}>
              <Box className={styles["content_container__form-area__text"]}>
                <h2
                  className={
                    styles["content_container__form-area__text__title"]
                  }
                >
                  Deixe sua mensagem
                </h2>
                <p
                  className={
                    styles["content_container__form-area__text__paragraph"]
                  }
                >
                  Adorariamos ouvir você
                </p>
                <Box className={styles["content__container__form_area__form"]}>
                  <TextField
                    id="name"
                    label="Nome"
                    placeholder="Digite seu nome"
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    id="email"
                    label="Email"
                    placeholder="Digite seu email"
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    id="message"
                    label="Mensagem"
                    placeholder="Deixe sua duvida, comentário ou sugestão"
                    variant="outlined"
                    fullWidth
                  />

                  <Button
                    variant="contained"
                    fullWidth
                    className={
                      styles["content__container__form-area__form__button"]
                    }
                    sx={{
                      backgroundColor: colors.bluePrimary500,
                      textTransform: "none",
                    }}
                  >
                    Enviar
                  </Button>
                </Box>
              </Box>
            </Box>

            
          </Box>
        </main>

        <footer className={styles["content__footer"]}>
          <p>© 2025 Poup.ai | Todos os direitos reservados</p>
        </footer>
      </Box>
    </>
  );
}
