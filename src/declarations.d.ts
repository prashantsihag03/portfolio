// this allows to import image file as 'ImgName' into component's file
declare module "*.png";
declare module "*.jpg";
declare module "*.svg";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    highlight: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    highlight?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    highlight: true;
  }
}
