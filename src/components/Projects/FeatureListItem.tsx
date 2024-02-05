import { ListItem, Typography } from "@mui/material";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import React from "react";
interface FeatureListItemProp {
  color: string;
  value: string;
}

const FeatureListItem: React.FC<FeatureListItemProp> = ({
  color,
  value,
}: FeatureListItemProp) => {
  return (
    <ListItem>
      <LabelImportantOutlinedIcon
        htmlColor={color}
        sx={{ marginRight: "0.5rem" }}
      />
      <Typography
        variant="subtitle2"
        sx={{
          color: "primary.main",
          fontFamily:
            '"Roboto Slab Regular", "Helvetica", -apple-system, system-ui, serif',
          transition: "all 0.25s ease-in-out",
        }}
      >
        {value}
      </Typography>
    </ListItem>
  );
};

export default FeatureListItem;
