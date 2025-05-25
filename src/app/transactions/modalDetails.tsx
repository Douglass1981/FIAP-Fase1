"use client";

import { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function ModalDetails() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button style={{ cursor: "pointer" }} onClick={() => setIsOpen(true)}>
        <VisibilityOutlinedIcon />
      </button>

      {isOpen && (
        <div
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
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "2rem",
              width: 300,
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "end",
                padding: "8px 8px",
                color: "#424242",
                cursor: "pointer",
              }}
            >
              <CloseOutlinedIcon />
            </button>
            <div
              style={{
                padding: "20px 0px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  
                }}
              >
                <p style={{fontSize: '0.875rem'}}>Saiu de</p>
                <p style={{color: 'black'}}>Banco</p>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p style={{fontSize: '0.875rem'}}>Para</p>
                <p style={{color: 'black'}}>Banco</p>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p style={{fontSize: '0.875rem'}}>Data</p>
                <p style={{color: 'black'}}>25/05/2025</p>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p style={{fontSize: '0.875rem'}}>Valor</p>
                <p style={{color: 'black'}}>R$ 0,00</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
