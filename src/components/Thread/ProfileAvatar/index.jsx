import { Avatar } from '@mui/material';

export default function ProfileAvatar({ src, size = 'normal' }) {
  const sizes = {
    small: { width: 20, height: 20, maxWidth: 20, opacity: 0.4 },
    normal: { width: 40, height: 40, maxWidth: 40 },
    large: { width: 60, height: 60, maxWidth: 60 },
  };

  return (
    <div className="flex flex-col justify-between">
      <Avatar
        className="cursor-pointer"
        alt="user avatar"
        src={`${import.meta.env.VITE_IMAGES}${src}`}
        sx={sizes[size]}
      />
      <div className="flex min-h-full justify-center pt-2">
        <div className="bg-slate-600 w-[2px] h-[calc(100%_-_45px)] rounded-md"></div>
      </div>
    </div>
  );
}
