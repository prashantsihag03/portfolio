import { Divider, List, Stack, Typography } from "@mui/material";
import React from "react";
import FeatureListItem from "./FeatureListItem";

const FeatureList: React.FC = () => {
  return (
    <>
      <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
        Features
      </Typography>
      <Divider sx={{ borderColor: "#2B6BFF" }} />
      <Stack direction={"row"}>
        <List sx={{ width: "50%", height: "100%" }}>
          <FeatureListItem color="#2B6BFF" value="Video/Audio Calls" />
          <FeatureListItem color="#2B6BFF" value="Text messages" />
        </List>
        <List sx={{ width: "50%", height: "100%" }}>
          <FeatureListItem color="#2B6BFF" value="Media Sharing" />
          <FeatureListItem
            color="#2B6BFF"
            value="Granular Control of app behaviour"
          />
        </List>
      </Stack>
    </>
  );
};

export default FeatureList;
