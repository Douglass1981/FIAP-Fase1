"use client";

import { useState } from "react";
import {
  Box,

} from "@mui/material";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";

export default function ModalTransfer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button style={{ cursor: "pointer" }} onClick={() => setIsOpen(true)}>
        <SyncAltOutlinedIcon/>
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
            
          </Box>
        </Box>
      )}
    </>
  );
}
