import { Avatar } from "@mui/material";

export default function ProfileAvatar({ src }) {
  return (
    <div className="flex flex-col justify-between">
      <Avatar
        className="cursor-pointer"
        alt="user avatar"
        src={`${import.meta.env.VITE_IMAGES}${src}`}
        sx={{ width: 40, height: 40, maxWidth: 40 }}
      />
      <div className="flex min-h-full justify-center pt-2">
        <div className="bg-slate-600 w-[2px] h-[calc(100%_-_45px)] rounded-md"></div>
      </div>
    </div>
  );
}
