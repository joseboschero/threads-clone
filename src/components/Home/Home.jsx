import React from "react";
import ThreadsLogo from "../ThreadsLogo/ThreadsLogo";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { AvatarGroup } from "@mui/material";

function Home() {
  return (
    <div className="w-screen">
      <div className="mt-5 flex items-center justify-center">
        <Link to={"/"}>
          <ThreadsLogo />
        </Link>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col justify-between">
          <Avatar
            alt="Jose Boschero"
            src="Untitled.png"
            sx={{ width: 60, height: 60 }}
          />
          <div className="flex min-h-full justify-center pt-2">
            <div className="bg-slate-600 w-1 h-4/5 rounded-md"></div>
          </div>
        </div>
        <div>
          <div className="text-white ml-5">
            <div className="flex flex-col pt-2">
              <div className="flex justify-between">
                <span>jose123</span>
                <div className="">
                  <span className="text-slate-600">10 h</span>
                  <a h className="pl-2">
                    ...
                  </a>
                </div>
              </div>

              <span className="mb-4"> Hoy me levante RE loco</span>
            </div>
            <div>
              <img
                src="Publicacion.jpg"
                alt=""
                className="max-w-sm rounded-md border-slate-500 border-2"
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
      <div className="flex justify-center w-full">
        <div className="w-1/4 mt-2 flex pl-4 items-center">
          <AvatarGroup max={2}>
            <Avatar alt="" src="Untitled.png" />
            <Avatar alt="" src="Untitled.png" sx={{ width: 15, height: 15 }} />
            <Avatar alt="" src="Untitled.png" sx={{ width: 15, height: 15 }} />
            <Avatar alt="" src="Untitled.png" sx={{ width: 15, height: 15 }} />
            <Avatar alt="" src="Untitled.png" sx={{ width: 15, height: 15 }} />
          </AvatarGroup>
          <div>
            <span className="text-slate-600 pl-4">5 respuestas</span>
            <span className="text-slate-600 pl-2">-</span>
            <span className="text-slate-600 pl-2">132 Me gusta</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
