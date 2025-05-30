"use client";

import styles from "./transactions.styles.module.scss";
import { Box, Button, Link } from "@mui/material";
import { useRouter } from "next/navigation";
import { colors } from "../mui.styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Image from "next/image";
import ModalDetails from "./modalDetails";
import ModalEdit from "./modalEdit";
import ModalTransfer from "./modalTransfer";
import ModalExpenses from "./modalExpenses";
import ModalIncome from "./modalIncome";
import ModalDelete from "@/components/modal-component/modalDelete";
import { useState } from "react";

export default function Transactions() {
  const router = useRouter();

  const handleChange = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      router.push(selectedPath);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    // colocar a logica de exclusão aqui
    console.log("Item excluído!");
    setIsOpen(false);
  };
  return (
    <>
      <Box className={styles["transactions"]}>
        <nav className={styles["transactions__nav"]}>
          <Link
            className={styles["transactions__nav__logo_area"]}
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
            <h1 className={styles["transactions__nav__logo_area__brand"]}>
              Poup.ai
            </h1>
          </Link>
        </nav>
        <main className={styles["transactions__main"]}>
          <Box className={styles["transactions__main__container-info"]}>
            <Box
              className={
                styles["transactions__main__container-info__navigation"]
              }
            >
              <select
                onChange={handleChange}
                className={
                  styles[
                    "transactions__main__container-info__navigation__select"
                  ]
                }
              >
                <option
                  value="/transactions__main"
                  className={
                    styles[
                      "transactions__main__container-info__navigation__select__options"
                    ]
                  }
                >
                  Transações
                </option>
                <option
                  value="/income"
                  className={
                    styles[
                      "transactions__main__container-info__navigation__select__options"
                    ]
                  }
                >
                  Receitas
                </option>
                <option
                  value="/expenses"
                  className={
                    styles[
                      "transactions__main__container-info__navigation__select__options"
                    ]
                  }
                >
                  Despesas
                </option>
              </select>
            </Box>
            <Box
              className={
                styles["transactions__main__container-info__container"]
              }
            >
              <Box
                className={
                  styles["transactions__main__container-info__container__left"]
                }
              >
                <Box
                  className={
                    styles[
                      "transactions__main__container-info__container__left__card-income"
                    ]
                  }
                >
                  <Box
                    className={
                      styles[
                        "transactions__main__container-info__container__left__card-income__text-area"
                      ]
                    }
                  >
                    <p
                      className={
                        styles[
                          "transactions__main__container-info__container__left__card-income__text-area__title"
                        ]
                      }
                    >
                      Receitas
                    </p>
                    <p
                      className={
                        styles[
                          "transactions__main__container-info__container__left__card-income__text-area__amount"
                        ]
                      }
                    >
                      R$ 0,00
                    </p>
                  </Box>
                  <Box
                    className={
                      styles[
                        "transactions__main__container-info__container__left__card-income__icon-area"
                      ]
                    }
                  >
                    <ArrowUpwardIcon />
                  </Box>
                </Box>
                <Box
                  className={
                    styles[
                      "transactions__main__container-info__container__left__card-expenses"
                    ]
                  }
                >
                  <Box
                    className={
                      styles[
                        "transactions__main__container-info__container__left__card-expenses__text-area"
                      ]
                    }
                  >
                    <p
                      className={
                        styles[
                          "transactions__main__container-info__container__left__card-expenses__text-area__title"
                        ]
                      }
                    >
                      Despesas
                    </p>
                    <p
                      className={
                        styles[
                          "transactions__main__container-info__container__left__card-expenses__text-area__amount"
                        ]
                      }
                    >
                      R$ 0,00
                    </p>
                  </Box>
                  <Box
                    className={
                      styles[
                        "transactions__main__container-info__container__left__card-expenses__icon-area"
                      ]
                    }
                  >
                    <ArrowDownwardIcon />
                  </Box>
                </Box>
              </Box>
              <Box
                className={
                  styles["transactions__main__container-info__container__right"]
                }
              >
                <Box
                  className={
                    styles[
                      "transactions__main__container-info__container__right__function"
                    ]
                  }
                >
                  <Box
                    className={
                      styles[
                        "transactions__main__container-info__container__right__function__icon-area"
                      ]
                    }
                  >
                    <ModalIncome />
                  </Box>
                  <p
                    className={
                      styles[
                        "transactions__main__container-info__container__right__function__text"
                      ]
                    }
                  >
                    Receitas
                  </p>
                </Box>

                <Box
                  className={
                    styles[
                      "transactions__main__container-info__container__right__function"
                    ]
                  }
                >
                  <Box
                    className={
                      styles[
                        "transactions__main__container-info__container__right__function__icon-area"
                      ]
                    }
                  >
                    <ModalExpenses />
                  </Box>
                  <p
                    className={
                      styles[
                        "transactions__main__container-info__container__right__function__text"
                      ]
                    }
                  >
                    Despesas
                  </p>
                </Box>

                <Box
                  className={
                    styles[
                      "transactions__main__container-info__container__right__function"
                    ]
                  }
                >
                  <Box
                   
                  >
                    <ModalTransfer />
                  </Box>
                  <p
                    className={
                      styles[
                        "transactions__main__container-info__container__right__function__text"
                      ]
                    }
                  >
                    Transferência
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className={styles["transactions__main__container-carousel"]}>
            <Box
              className={styles["transactions__main__container-carousel__tag"]}
            >
              <p
                className={
                  styles["transactions__main__container-carousel__tag__text"]
                }
              >
                Ultima semana
              </p>
            </Box>
            <Box
              className={styles["transactions__main__container-carousel__tag"]}
            >
              <p
                className={
                  styles["transactions__main__container-carousel__tag__text"]
                }
              >
                Ultimo mês
              </p>
            </Box>
            <Box
              className={styles["transactions__main__container-carousel__tag"]}
            >
              <p
                className={
                  styles["transactions__main__container-carousel__tag__text"]
                }
              >
                Ultimos 6 meses
              </p>
            </Box>
            <Box
              className={styles["transactions__main__container-carousel__tag"]}
            >
              <p
                className={
                  styles["transactions__main__container-carousel__tag__text"]
                }
              >
                Ultimo ano
              </p>
            </Box>
          </Box>
          <Box className={styles["transactions__main__container-transactions"]}>
            <Box
              className={
                styles[
                  "transactions__main__container-transactions__card-transactions"
                ]
              }
            >
              <Box
                className={
                  styles[
                    "transactions__main__container-transactions__card-transactions__left"
                  ]
                }
              >
                <Box
                  className={
                    styles[
                      "transactions__main__container-transactions__card-transactions__left__icon-area"
                    ]
                  }
                >
                  <SyncAltOutlinedIcon />
                </Box>
                <Box
                  className={
                    styles[
                      "transactions__main__container-transactions__card-transactions__left__text-area"
                    ]
                  }
                >
                  <p
                    className={
                      styles[
                        "transactions__main__container-transactions__card-transactions__left__text-area__category"
                      ]
                    }
                  >
                    Categoria
                  </p>
                  <p
                    className={
                      styles[
                        "transactions__main__container-transactions__card-transactions__left__text-area__info"
                      ]
                    }
                  >
                    Banco
                  </p>
                  <p
                    className={
                      styles[
                        "transactions__main__container-transactions__card-transactions__left__text-area__info"
                      ]
                    }
                  >
                    25/05/2025
                  </p>
                  <p
                    className={
                      styles[
                        "transactions__main__container-transactions__card-transactions__left__text-area__amount"
                      ]
                    }
                  >
                    R$ 0,00
                  </p>
                </Box>
              </Box>
              <Box>
                <Button sx={{ minWidth: "0", color: colors.black, textTransform: 'none'}}>
                  <ModalDetails />
                </Button>
                <Button sx={{ minWidth: "0", color: colors.black, textTransform: 'none'}}>
                  <ModalEdit />
                </Button>
                <Button sx={{ minWidth: "0", color: colors.black, textTransform: 'none'}} onClick={() => setIsOpen(true)}>
                  <DeleteOutlineIcon/>
                </Button>
                  <ModalDelete open={isOpen} onClose={() => setIsOpen(false)} onConfirm={handleConfirm}  />
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
            className={styles["transactions__main__button--hidden"]}
          >
            <AddOutlinedIcon />
            Adicionar transferencia
          </Button>
        </main>
      </Box>
    </>
  );
}
