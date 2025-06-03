import { Box, FormGroup, TextField } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import { Footer } from "@/components/Footer";
import { colors } from "../mui.styles";
import styles from "./contact.styles.module.scss";

export default function Contact() {
  return (
    <>
      <Box className={styles["content"]}>
        <Navbar />

        <main>
          <Box className={styles["content__container"]}>
            <Box className={styles["content__container__form-area"]}>
              <Box className={styles["content__container__form-area__box"]}>
                <Box
                  className={styles["content__container__form-area__box__text"]}
                >
                  <h2
                    className={
                      styles["content__container__form-area__box__text__title"]
                    }
                  >
                    Deixe sua mensagem
                  </h2>
                  <p
                    className={
                      styles[
                        "content__container__form-area__box__text__paragraph"
                      ]
                    }
                  >
                    Adoraríamos ouvir você
                  </p>
                </Box>
                <FormGroup
                  className={styles["content__container__form-area__box__form"]}
                >
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
                    multiline
                    rows={4}
                    placeholder="Deixe sua duvida, comentário ou sugestão"
                    variant="outlined"
                    fullWidth
                  />

                  <Button label="Enviar" fullWidth />
                </FormGroup>
              </Box>
            </Box>
            <Box className={styles["content__container__contact"]}>
              <Box className={styles["content__container__contact__text"]}>
                <h2
                  className={styles["content__container__contact__text__title"]}
                >
                  Entre em contato
                </h2>
                <p
                  className={
                    styles["content__container__contact__text__paragraph"]
                  }
                >
                  Através dos nossos canais de comunicação
                </p>
              </Box>

              <Box className={styles["content__container__contact__mail"]}>
                <Box
                  className={
                    styles["content__container__contact__mail__icon_box"]
                  }
                >
                  <MailOutlineIcon sx={{ color: colors.bluePrimary500 }} />
                </Box>
                <Box
                  className={styles["content__container__contact__mail__info"]}
                >
                  <p>poupai.suport@mail.com</p>
                  <p>poupai.suggestion@mail.com</p>
                </Box>
              </Box>
              <Box className={styles["content__container__contact__phone"]}>
                <Box
                  className={
                    styles["content__container__contact__phone__icon_box"]
                  }
                >
                  <PhoneIcon sx={{ color: colors.bluePrimary500 }} />
                </Box>
                <Box
                  className={styles["content__container__contact__phone__info"]}
                >
                  <p>(11) 91234-8765</p>
                  <p>(11) 94321-5678</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </main>

        <Footer />
      </Box>
    </>
  );
}
