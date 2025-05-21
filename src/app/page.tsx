import { Box, Button, ButtonBase, Link } from "@mui/material";
import styles from "./initial.styles.module.scss"
import Image from "next/image";

export default function Initial() {
    return (
        <>
            <Box className={styles['content']}>
                <nav className={styles['content__nav']}>
                    {/* OTIMIZAR */}
                    <Box className={styles['content__nav__logo_area_desktop']}>
                        <Image src="/logo.png" width="72" height="100" alt="Logo" style={{ width: '15%', height: 'auto' }} />
                        <h1 className={styles['content__nav__logo_area_desktop__brand']}>
                            Poup.ai
                        </h1>
                    </Box>
                    <Box className={styles['content__nav__logo_area_mobile']}>
                        <Image src="/logo.png" width="232" height="232" alt="Logo" style={{ width: '50%', height: '50%' }} />
                        <h1 className={styles['content__nav__logo_area_mobile__brand']}>    
                            Poup.ai
                        </h1>
                    </Box>
                    <Box className={styles['content__nav__redirect_pages']}>
                        <Link
                            id={styles['link']}
                            href="http://localhost:3000/about"
                        >
                            Sobre nós
                        </Link>
                        <Link
                            id={styles['link']}
                            href="http://localhost:3000/services"
                        >
                            Serviços
                        </Link>
                        <Link
                            id={styles['link']}
                            href="http://localhost:3000/contact"
                        >
                            Entre em contato
                        </Link>
                    </Box>
                    <Button
                        variant="contained"
                        id={styles['button']}
                        href="http://localhost:3000/login"
                    >
                        Login
                    </Button>
                </nav>
                <main>
                    <Box className={styles['content__desktop']}>
                        <Box className={styles['content__desktop__container']}>
                            <Box className={styles['content__desktop__container__left']}>
                                <h2 className={styles['content__desktop__container__left__title']}>Seu futuro começa com escolhas inteligentes.</h2>
                                <p className={styles['content__desktop__container__left__text']}>Descubra um novo jeito de cuidar das suas finanças com soluções inteligentes, práticas e seguras.</p>
                                <p className={styles['content__desktop__container__left__text']}>Transforme sua relação com o dinheiro e alcance seus objetivos com confiança.</p>
                            </Box>
                            <Box className={styles['content__desktop__container__rigth']}>
                                <Image src="/initial-image.png" width="477" height="576" alt="Initial image" style={{ width: '100%', height: 'auto' }}>

                                </Image>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={styles['content__mobile']}>
                        <h2 className={styles['content__mobile__title']}>Bem Vindo!</h2>
                        <p className={styles['content__mobile__text']}>Descubra soluções financeiras inovadoras e confiáveis para garantir um futuro próspero.</p>
                        <Button variant="contained" fullWidth className={styles['content__mobile__button']}>
                            Acessar
                        </Button>
                    </Box>
                </main>
                <footer className={styles['content__footer']}>
                    <p>© 2025 Poup.ai | Todos os direitos reservados</p>
                </footer>
            </Box>
        </>
    )
}