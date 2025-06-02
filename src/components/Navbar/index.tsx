import Link from "next/link";
import Image from "next/image";
import { Box} from "@mui/material";
import { ROUTES } from "@/constants";
import styles from "./navbar.styles.module.scss";
import MyButton from "../Button";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href={ROUTES.DEFAULT} className={styles.logo_area}>
        <Image
          src="/logo.png"
          width={72}
          height={100}
          alt="Logo"
          className={styles.logo_image}
        />
        <h1 className={styles.brand}>Poup.ai</h1>
      </Link>

      <Box className={styles.redirect_pages}>
        <Link href={ROUTES.ABOUT} className={styles.link}>
          Sobre nós
        </Link>
        <Link href={ROUTES.SERVICES} className={styles.link}>
          Serviços
        </Link>
        <Link href={ROUTES.CONTACT} className={styles.link}>
          Entre em contato
        </Link>
      </Box>

      <MyButton label="Login" href={ROUTES.LOGIN} />
    </nav>
  );
}
