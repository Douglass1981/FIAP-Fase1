"use client";

import styles from "./income.styles.module.scss";
import { Avatar, Box, Button, Link } from "@mui/material";
import { useRouter } from "next/navigation";
import { colors } from "../mui.styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Image from "next/image";
import ModalEdit from "./modalEdit";
import ModalDelete from "./modalDelete";
import ModalDetails from "./modalDetails";
import ModalTransfer from "../transactions/modalTransfer";
import ModalIncome from "../transactions/modalIncome";
import ModalExpenses from "../transactions/modalExpenses";



export default function income() {
  const router = useRouter();

  const handleChange = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      router.push(selectedPath);
    }
  };
  return (
    <>
      <Box className={styles["income"]}>
        <nav className={styles["income__nav"]}>
          <Link
            className={styles["income__nav__logo_area"]}
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
            <h1 className={styles["income__nav__logo_area__brand"]}>Poup.ai</h1>
          </Link>
        </nav>
        <main className={styles["income__main"]}>
          <Box className={styles["income__main__container-info"]}>
            <Box className={styles["income__main__container-info__navigation"]}>
              <select
                onChange={handleChange}
                className={
                  styles["income__main__container-info__navigation__select"]
                }
              >
                <option
                  value="/income"
                  className={
                    styles[
                      "income__main__container-info__navigation__select__options"
                    ]
                  }
                >
                  Receitas
                </option>
                <option
                  value="/transactions"
                  className={
                    styles[
                      "income__main__container-info__navigation__select__options"
                    ]
                  }
                >
                  Transações
                </option>
                <option
                  value="/expenses"
                  className={
                    styles[
                      "income__main__container-info__navigation__select__options"
                    ]
                  }
                >
                  Despesas
                </option>
              </select>
            </Box>
            <Box className={styles["income__main__container-info__container"]}>
              <Box
                className={
                  styles["income__main__container-info__container__left"]
                }
              >
                <Box
                  className={
                    styles[
                      "income__main__container-info__container__left__card-income"
                    ]
                  }
                >
                  <Box
                    className={
                      styles[
                        "income__main__container-info__container__left__card-income__text-area"
                      ]
                    }
                  >
                    <p
                      className={
                        styles[
                          "income__main__container-info__container__left__card-income__text-area__title"
                        ]
                      }
                    >
                      Receitas
                    </p>
                    <p
                      className={
                        styles[
                          "income__main__container-info__container__left__card-income__text-area__amount"
                        ]
                      }
                    >
                      R$ 0,00
                    </p>
                  </Box>
                  <Box
                    className={
                      styles[
                        "income__main__container-info__container__left__card-income__icon-area"
                      ]
                    }
                  >
                    <ArrowUpwardIcon />
                  </Box>
                </Box>
                <Box
                  className={
                    styles[
                      "income__main__container-info__container__left__card-expenses"
                    ]
                  }
                >
                  <Box
                    className={
                      styles[
                        "income__main__container-info__container__left__card-expenses__text-area"
                      ]
                    }
                  >
                    <p
                      className={
                        styles[
                          "income__main__container-info__container__left__card-expenses__text-area__title"
                        ]
                      }
                    >
                      Despesas
                    </p>
                    <p
                      className={
                        styles[
                          "income__main__container-info__container__left__card-expenses__text-area__amount"
                        ]
                      }
                    >
                      R$ 0,00
                    </p>
                  </Box>
                  <Box
                    className={
                      styles[
                        "income__main__container-info__container__left__card-expenses__icon-area"
                      ]
                    }
                  >
                    <ArrowDownwardIcon />
                  </Box>
                </Box>
              </Box>
              <Box
                className={
                  styles["income__main__container-info__container__right"]
                }
              >
                <Box
                  className={
                    styles[
                      "income__main__container-info__container__right__function"
                    ]
                  }
                >
                  <Box
                    className={
                      styles[
                        "income__main__container-info__container__right__function__icon-area"
                      ]
                    }
                  >
                    <ModalIncome />
                  </Box>
                  <p
                    className={
                      styles[
                        "income__main__container-info__container__right__function__text"
                      ]
                    }
                  >
                    Receitas
                  </p>
                </Box>

                <Box
                  className={
                    styles[
                      "income__main__container-info__container__right__function"
                    ]
                  }
                >
                  <Box
                    className={
                      styles[
                        "income__main__container-info__container__right__function__icon-area"
                      ]
                    }
                  >
                    <ModalExpenses />
                  </Box>
                  <p
                    className={
                      styles[
                        "income__main__container-info__container__right__function__text"
                      ]
                    }
                  >
                    Despesas
                  </p>
                </Box>

                <Box
                  className={
                    styles[
                      "income__main__container-info__container__right__function"
                    ]
                  }
                >
                  <Box>
                    <ModalTransfer />

                  </Box>
                  <p
                    className={
                      styles[
                        "income__main__container-info__container__right__function__text"
                      ]
                    }
                  >
                    Transferência
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className={styles["income__main__container-carousel"]}>
            <Box className={styles["income__main__container-carousel__tag"]}>
              <p
                className={
                  styles["income__main__container-carousel__tag__text"]
                }
              >
                Ultima semana
              </p>
            </Box>
            <Box className={styles["income__main__container-carousel__tag"]}>
              <p
                className={
                  styles["income__main__container-carousel__tag__text"]
                }
              >
                Ultimo mês
              </p>
            </Box>
            <Box className={styles["income__main__container-carousel__tag"]}>
              <p
                className={
                  styles["income__main__container-carousel__tag__text"]
                }
              >
                Ultimos 6 meses
              </p>
            </Box>
            <Box className={styles["income__main__container-carousel__tag"]}>
              <p
                className={
                  styles["income__main__container-carousel__tag__text"]
                }
              >
                Ultimo ano
              </p>
            </Box>
          </Box>
          <Box className={styles["income__main__container-income"]}>
            <Box
              className={styles["income__main__container-income__card-income"]}
            >
              <Box
                className={
                  styles["income__main__container-income__card-income__left"]
                }
              >
                <Box
                  className={
                    styles[
                      "income__main__container-income__card-income__left__icon-area"
                    ]
                  }
                >
                  <Avatar sx={{ backgroundColor: colors.green}}>
                    <ArrowUpwardIcon />
                  </Avatar>
                </Box>
                <Box
                  className={
                    styles[
                      "income__main__container-income__card-income__left__text-area"
                    ]
                  }
                >
                  <p
                    className={
                      styles[
                        "income__main__container-income__card-income__left__text-area__category"
                      ]
                    }
                  >
                    Categoria
                  </p>
                  <p
                    className={
                      styles[
                        "income__main__container-income__card-income__left__text-area__info"
                      ]
                    }
                  >
                    Banco
                  </p>
                  <p
                    className={
                      styles[
                        "income__main__container-income__card-income__left__text-area__info"
                      ]
                    }
                  >
                    25/05/2025
                  </p>
                  <p
                    className={
                      styles[
                        "income__main__container-income__card-income__left__text-area__amount"
                      ]
                    }
                  >
                    R$ 0,00
                  </p>
                </Box>
              </Box>
              <Box>
                <Button
                  sx={{
                    minWidth: "0",
                    color: colors.black,
                    textTransform: "none",
                  }}
                >
                  <ModalDetails />
                </Button>
                <Button
                  sx={{
                    minWidth: "0",
                    color: colors.black,
                    textTransform: "none",
                  }}
                >
                  <ModalEdit />
                </Button>
                <Button
                  sx={{
                    minWidth: "0",
                    color: colors.black,
                    textTransform: "none",
                  }}
                >
                  <ModalDelete />
                </Button>
              </Box>
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{
              position: "fixed",
              bottom: 80,
              left: 30,
              right: 30,
              p: 1,
              zIndex: 1300,
              backgroundColor: colors.bluePrimary500,
              textTransform: "none",
            }}
            className={styles["income__main__button--hidden"]}
          >
            <AddOutlinedIcon />
            Adicionar transferencia
          </Button>
        </main>
      </Box>
    </>
  );
}
