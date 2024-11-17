import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
// import ModeIcon from '@mui/icons-material/Mode';

function FloatingActionButtons({ type = "add" }) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      {type === "add" ? (
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      ) : type === "edit" ? (
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
      ) : (
        <Fab disabled color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
      )}

      {/* <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab> */}
    </Box>
  );
}

export default FloatingActionButtons;
