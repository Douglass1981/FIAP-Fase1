"use client";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Box, Button } from "@mui/material";

type ModalDetailsProps = {
    open: boolean;
    onClose: () => void;
    from: string;
    to: string;
    date: string;
    amount: string;
};

export default function ModalDetails({ open, onClose, from, to, date, amount }: ModalDetailsProps) {
    if (!open) return null;

    return (
        <Box
            onClick={onClose}
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
                    }}
                >
                    <Button
                        onClick={onClose}
                        sx={{
                            padding: 0,
                            minWidth: 0,
                            color: "#424242",
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
                    <DetailRow label="Saiu de" value={from} />
                    <DetailRow label="Para" value={to} />
                    <DetailRow label="Data" value={date} />
                    <DetailRow label="Valor" value={amount} />
                </Box>
            </Box>
        </Box>
    );
}

function DetailRow({ label, value }: { label: string; value: string }) {
    return (
        <Box
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <p style={{ fontSize: "0.875rem" }}>{label}</p>
            <p style={{ color: "black" }}>{value}</p>
        </Box>
    );
}
