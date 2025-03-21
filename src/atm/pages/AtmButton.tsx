import { Button, ButtonProps, styled } from "@mui/material";
import { grey } from "@mui/material/colors";

const AtmButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[500],
    '&:hover': {
      backgroundColor: grey[700],
    },
    maxHeight: '50px',
    marginTop: '10px',
  }));

export default AtmButton;
