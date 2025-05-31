import React from "react";
import { Button } from "@mui/material";
import { colors } from "../../app/mui.styles";

interface FilterButtonProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, selected, onClick }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        borderRadius: "20px",
        textTransform: "none",
        padding: "6px 16px",
        fontSize: "14px",
        color: selected ? colors.white : colors.bluePrimary500,
        border: "2px solid",
        borderColor: selected ? colors.bluePrimary500 : colors.bluePrimary500,
        backgroundColor: selected ? colors.bluePrimary500 : "transparent",
        transition: "all 0.2s ease-in-out",
        scrollSnapAlign: "start",
        flexShrink: 0,
        "&:hover": {
          backgroundColor: colors.purple,
          color: colors.white,
          borderColor: colors.purple,
        },
        "&:active": {
          backgroundColor: colors.bluePrimary500,
          color: colors.white,
        },
      }}
    >
      {label}
    </Button>
  );
};

export default FilterButton;
