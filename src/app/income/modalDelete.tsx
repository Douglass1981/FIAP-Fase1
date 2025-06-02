"use client";

import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, Button } from "@mui/material";
import { colors } from "../mui.styles";

export default function ModalDelete() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button style={{ cursor: "pointer" }} onClick={() => setIsOpen(true)}>
        <DeleteOutlineIcon />
      </button>

      {isOpen && (
        <Box
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "#00000050",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <Box
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "2rem",
              width: 300,
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                }}
              >
                Tem certeza que deseja excluir?
              </p>

              <Box
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <Button fullWidth variant="contained" sx={{padding: "12px 16px", textTransform: 'none', backgroundColor: colors.red, fontSize: '16px'}}onClick={() => setIsOpen(false)}>Não</Button>
                <Button fullWidth variant="contained" sx={{padding: "12px 16px", textTransform: 'none', backgroundColor: colors.bluePrimary500, fontSize: '16px'}}>Sim</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
