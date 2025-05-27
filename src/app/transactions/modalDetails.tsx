"use client";

import { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Box, Button } from "@mui/material";

export default function ModalDetails() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button style={{ cursor: "pointer" }} onClick={() => setIsOpen(true)}>
        <VisibilityOutlinedIcon />
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
            sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "end",
                }}>
              <Button
                onClick={() => setIsOpen(false)}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  padding: "0px 0px 10px 0px",
                  color: "#424242",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <CloseOutlinedIcon />
              </Button>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontSize: "0.875rem" }}>Saiu de</p>
                <p style={{ color: "black" }}>Banco</p>
              </Box>
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontSize: "0.875rem" }}>Para</p>
                <p style={{ color: "black" }}>Banco</p>
              </Box>
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontSize: "0.875rem" }}>Data</p>
                <p style={{ color: "black" }}>25/05/2025</p>
              </Box>
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontSize: "0.875rem" }}>Valor</p>
                <p style={{ color: "black" }}>R$ 0,00</p>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
