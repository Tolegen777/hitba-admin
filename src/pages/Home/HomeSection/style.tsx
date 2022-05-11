import { StayPrimaryLandscape } from "@mui/icons-material";
import { Paper } from "@mui/material";
import { palette, styled } from "@mui/system";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  height: "375px",
  color: theme.palette.primary.main,
  borderRadius: "20px",
  fontSize: "24px",
  paddingTop: "25px",
  paddingLeft: "30px",
}));