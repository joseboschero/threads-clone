import { Avatar } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { AvatarGroup } from "@mui/material";
import ProfileAvatar from "./ProfileAvatar";
import Header from "./Header";
import { DateTime } from "luxon";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export default function Thread({ data }) {
  const fechaDb = dayjs(new Date(data.createdAt).toISOString());
  const fechaActual = dayjs();

  if (fechaActual.diff(fechaDb, "hour") - 3 > 24) {
    console.log("Publicado hace 1 dia");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 48) {
    console.log("Publicado hace 2 dias");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 72) {
    console.log("Publicado hace 3 dias");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 96) {
    console.log("Publicado hace 4 dias");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 120) {
    console.log("Publicado hace 5 dias");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 144) {
    console.log("Publicado hace 6 dias");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 168) {
    console.log("Publicado hace 1 semanas");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 336) {
    console.log("Publicado hace 2 semanas");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 504) {
    console.log("Publicado hace 3 semanas");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 672) {
    console.log("Publicado hace 1 mes");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 1344) {
    console.log("Publicado hace 2 meses");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 2016) {
    console.log("Publicado hace 3 meses");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 2688) {
    console.log("Publicado hace 4 meses");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 3360) {
    console.log("Publicado hace 5 meses");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 4032) {
    console.log("Publicado hace 6 meses");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 4704) {
    console.log("Publicado hace 7 meses");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 5376) {
    console.log("Publicado hace 8 meses");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 6048) {
    console.log("Publicado hace 9 meses");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 6720) {
    console.log("Publicado hace 10 meses");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 7392) {
    console.log("Publicado hace 11 meses");
  } else if (fechaActual.diff(fechaDb, "hour") - 3 > 8064) {
    console.log("Publicado hace 1 año");
  } else {
    console.log("Publicado hace mas de 1 año");
  }

  console.log(fechaActual.diff(fechaDb, "hour") - 3);

  return (
    <div className="w-full mb-5 mt-2">
      <div className="w-full flex justify-center">
        <ProfileAvatar src={data.User.image_url} />
        <div className="w-full">
          <div className="text-white mx-3">
            <div className="flex flex-col">
              <Header data={data} />
            </div>
            <div>
              <img
                src={`${import.meta.env.VITE_IMAGES}${data.media}`}
                alt=""
                className="rounded-md border-slate-500 border-2"
              />
            </div>
            <div className="flex justify-between w-1/3 mt-4">
              <FavoriteBorderOutlinedIcon />
              <ModeCommentOutlinedIcon />
              <AutorenewOutlinedIcon />
              <SendOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start w-full">
        <div className="mt-2 flex pl-4 items-center">
          <AvatarGroup
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
            <span className="text-slate-600 pl-4">
              {data.Replies.length} respuestas
            </span>
            <span className="text-slate-600 pl-2">-</span>
            <span className="text-slate-600 pl-2">{data.likes} Me gusta</span>
          </div>
        </div>
      </div>
    </div>
  );
}
