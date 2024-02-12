import { Divider, List, Stack, Typography } from "@mui/material";
import React from "react";
import FeatureListItem from "./FeatureListItem";

interface FeatureListProps {
  features: string[];
  color: string;
  // eslint-disable-next-line no-unused-vars
  onFeatureClick?: (name: string) => void;
}

const FeatureList: React.FC<FeatureListProps> = ({
  features,
  color,
  onFeatureClick,
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
            <FeatureListItem
              key={item}
              color={color}
              value={item}
              onClick={
                onFeatureClick
                  ? () => {
                      onFeatureClick(item);
                    }
                  : undefined
              }
            />
          ))}
        </List>
        <List sx={{ width: "50%", height: "100%" }}>
          {secondHalf.map((item) => (
            <FeatureListItem
              key={item}
              color={color}
              value={item}
              onClick={
                onFeatureClick
                  ? () => {
                      onFeatureClick(item);
                    }
                  : undefined
              }
            />
          ))}
        </List>
      </Stack>
    </>
  );
};

export default FeatureList;
