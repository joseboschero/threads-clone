import { Button, Chip, IconButton, TextField } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { TextareaAutosize } from '@mui/material';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import ProfileAvatar from '../ProfileAvatar';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function Form({}) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const { currentUser } = useSelector((state) => state.auth);

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(!open);
  };

  const imageHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="rounded-full">
      <Button onClick={toggleDrawer}>abrir</Button>
      <Drawer sx={{ borderRadius: 50 }} anchor={'bottom'} open={open} onClose={() => setOpen(false)}>
        <form className="h-screen bg-neutral-900  relative">
          <div className="flex items-center gap-2 border-b-[1px] border-b-neutral-800 p-3">
            <IconButton>
              <CloseRoundedIcon />
            </IconButton>
            <div className="text-2xl">Nuevo hilo</div>
          </div>
          <div className="p-3 w-full">
            <div className="w-full">
              <div className="flex gap-3 ">
                <ProfileAvatar src={currentUser.image_url} />
                <span className="mt-1">{currentUser.username}</span>
              </div>
              <div className="min-h-[50px] h-auto w-full flex px-5">
                <div className="w-full border-l-slate-600 border-l-[2px]">
                  <div className="px-7 top-10 w-full h-auto -mt-4 ">
                    <TextareaAutosize maxRows={10} placeholder="Inicia un hilo..." className="input-base bg-red-200" />
                    {!image && (
                      <IconButton component="label" size="small" className="-ml-3">
                        <AttachFileIcon color="disabled" className="rotate-45" />
                        <input onChange={imageHandler} type="file" hidden />
                      </IconButton>
                    )}
                  </div>
                  {image && (
                    <div className="w-full rounded-lg px-7 py-2 relative">
                      <img
                        className="w-full max-w-md h-full object-contain rounded-xl"
                        src={image}
                        alt="preview image"
                      />
                      <span className="absolute bottom-0 m-2 mb-4 bg-neutral-600/50 px-3 rounded-xl">Alt</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="px-3 mt-2 flex gap-3">
                <ProfileAvatar size="small" src={currentUser.image_url} />
                <span className="opacity-10">Agregar a hilo</span>
              </div>
            </div>
            <span className="absolute left-0 bottom-0 p-3 opacity-20">Cualquiera puede responder</span>
            <span className="absolute bottom-0 right-0 p-3 text-blue-700 text-lg cursor-pointer active:text-blue-900 transition-colors select-none ">
              Publicar
            </span>
          </div>
        </form>
      </Drawer>
    </div>
  );
}
