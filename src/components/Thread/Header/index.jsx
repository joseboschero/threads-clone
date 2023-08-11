import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';

export default function Header({ data, diference }) {
  return (
    <div className="mb-2">
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <span>{data.User.username}</span>
          {data.User.verified && <VerifiedRoundedIcon sx={{ fontSize: 14, color: '#0095F6' }} />}
        </div>
        <div className="">
          <span className="text-slate-600">{diference}</span>
          <a className="pl-2">...</a>
        </div>
      </div>
      <span className="mb-4">{data.description}</span>
    </div>
  );
}
