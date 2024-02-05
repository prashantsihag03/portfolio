import { Divider, List, Stack, Typography } from "@mui/material";
import React from "react";
import FeatureListItem from "./FeatureListItem";

interface FeatureListProps {
  features: string[];
  color: string;
}

const FeatureList: React.FC<FeatureListProps> = ({
  features,
  color,
}: FeatureListProps) => {
  const firstHalf = features.slice(0, Math.ceil(features.length / 2));
  const secondHalf = features.slice(Math.ceil(features.length / 2));
  return (
    <>
      <Typography
        variant="subtitle1"
        sx={{
          color: "primary.main",
          fontFamily:
            '"Roboto Slab Regular", "Helvetica", -apple-system, system-ui, serif',
        }}
      >
        Features
      </Typography>
      <Divider sx={{ borderColor: color }} />
      <Stack direction={"row"}>
        <List sx={{ width: "50%", height: "100%" }}>
          {firstHalf.map((item) => (
            <FeatureListItem key={item} color={color} value={item} />
          ))}
        </List>
        <List sx={{ width: "50%", height: "100%" }}>
          {secondHalf.map((item) => (
            <FeatureListItem key={item} color={color} value={item} />
          ))}
        </List>
      </Stack>
    </>
  );
};

export default FeatureList;
