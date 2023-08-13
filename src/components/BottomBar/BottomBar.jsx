import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PostAddIcon from "@mui/icons-material/PostAdd";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useNavigate } from "react-router-dom";

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  return (
    <div className=" w-full">
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            switch (newValue) {
              case 0:
                navigate("/");
                break;
              case 1:
                navigate("/search");
                break;
              case 3:
                navigate("/favorites");
                break;
              case 4:
                navigate("/profile");
                break;
            }
          }}
        >
          <BottomNavigationAction
            icon={value === 0 ? <HomeIcon /> : <HomeOutlinedIcon />}
          />
          <BottomNavigationAction icon={<SearchIcon />} />
          <BottomNavigationAction icon={<PostAddIcon />} />
          <BottomNavigationAction
            icon={
              value === 3 ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />
            }
          />
          <BottomNavigationAction
            icon={value === 4 ? <PersonIcon /> : <PersonOutlineOutlinedIcon />}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}
