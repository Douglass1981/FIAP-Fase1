import { Box, Button, ButtonBase, Link } from "@mui/material";
import styles from "./initial.styles.module.scss"
import Image from "next/image";

export default function Initial() {
    return (
        <>
            <nav className={styles['nav']}>
                <Box className={styles['nav__logo_area']}>
                    <Image src="/logo.png" width="100" height="100" alt="Logo" className="nav__logo_area__image" />
                    <h1 className={styles['nav__logo_area__brand']}>
                        Poup.ai
                    </h1>
                </Box>
                <Box className={styles['nav__redirect_pages']}>
                    <Link
                        className={styles['nav__redirect_pages__link']}
                        href="http://localhost:3000/about"
                    >
                        Sobre nós
                    </Link>
                    <Link
                        className={styles['nav__redirect_pages__link']}
                        href="http://localhost:3000/services"
                    >
                        Serviços
                    </Link>
                    <Link
                        className={styles['nav__redirect_pages__link']}
                        href="http://localhost:3000/contact"
                    >
                        Entre em contato
                    </Link>
                </Box>
                <Button
                    variant="contained"
                    className={styles['nav__button']}
                >
                    Login
                </Button>
            </nav>
            <main>
                <Box className={styles['desktop']}>
                    <Box className={styles['desktop__container']}>
                        <Box className={styles['desktop__container__left']}>
                            <h2 className={styles['desktop__container__left__title']}>Seu futuro começa com escolhas inteligentes.</h2>
                            <p className={styles['desktop__container__left__text']}>Descubra um novo jeito de cuidar das suas finanças com soluções inteligentes, práticas e seguras.</p>
                            <p className={styles['desktop__container__left__text']}>Transforme sua relação com o dinheiro e alcance seus objetivos com confiança.</p>
                        </Box>
                        <Box className={styles['desktop__container__rigth']}>
                            <Image src="/initial-image.png" width="477" height="576" alt="Initial image">

                            </Image>
                        </Box>
                    </Box>
                </Box>
                <Box className={styles['mobile']}>
                    <h2 className={styles['mobile__title']}>Bem Vindo!</h2>
                    <p className={styles['mobile__text']}>Descubra soluções financeiras inovadoras e confiáveis para garantir um futuro próspero.</p>
                    <Button variant="contained" fullWidth className={styles['mobile__button']}>
                        Acessar
                    </Button>
                </Box>
            </main>
            <footer className={styles['footer']}>
                <p>© 2025 Poup.ai | Todos os direitos reservados</p>
            </footer>
        </>
    )
}