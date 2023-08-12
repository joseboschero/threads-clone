import { Avatar } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { AvatarGroup } from "@mui/material";
import ProfileAvatar from "./ProfileAvatar";
import Header from "./Header";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import formatTimeDifference from "../../utils/formatTimeDifference";
import { useState } from "react";

dayjs.extend(utc);

export default function Thread({ data }) {
  const createdAt = dayjs(data.createdAt);
  const actualDate = dayjs();
  const diffInHours = actualDate.diff(createdAt, "hours");
  const diference = formatTimeDifference(diffInHours);

  const [clicked, setClicked] = useState("off");

  const handleClick = () => {
    if (clicked === "off") {
      setClicked("on");
    } else {
      setClicked("off");
    }
    console.log(clicked);
  };

  return (
    <div className="w-full mb-5 mt-2">
      <div className="w-full flex justify-center">
        <ProfileAvatar src={data.User.image_url} />
        <div className="w-full">
          <div className="text-white mx-3">
            <div className="flex flex-col">
              <Header data={data} diference={diference} />
            </div>
            <div>
              <img
                src={`${import.meta.env.VITE_IMAGES}${data.media}`}
                alt=""
                className="rounded-md border-slate-500 border-2 cursor-pointer"
              />
            </div>
            <div className="flex justify-between w-1/3 mt-4">
              <div onClick={handleClick} className="cursor-pointer">
                {clicked === "off" ? (
                  <FavoriteBorderOutlinedIcon />
                ) : (
                  <FavoriteIcon style={{ color: "red" }} />
                )}
              </div>
              <ModeCommentOutlinedIcon className="cursor-pointer" />
              <AutorenewOutlinedIcon className="cursor-pointer" />
              <SendOutlinedIcon className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start w-full">
        <div className="mt-2 flex pl-4 items-center">
          <AvatarGroup
            className="cursor-pointer"
            max={2}
            sx={{
              "& .MuiAvatar-root": { width: 24, height: 24, fontSize: 15 },
            }}
          >
            <Avatar alt="" src="Untitled.png" />
            <Avatar alt="" src="Untitled.png" sx={{ width: 15, height: 15 }} />
            <Avatar alt="" src="Untitled.png" sx={{ width: 15, height: 15 }} />
            <Avatar alt="" src="Untitled.png" sx={{ width: 15, height: 15 }} />
            <Avatar alt="" src="Untitled.png" sx={{ width: 15, height: 15 }} />
          </AvatarGroup>
          <div>
            <span className="text-slate-600 pl-4 cursor-pointer">
              {data.Replies.length} respuestas
            </span>
            <span className="text-slate-600 pl-2">-</span>
            <span className="text-slate-600 pl-2 cursor-pointer">
              {data.likes} Me gusta
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
