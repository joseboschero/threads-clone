import React, { useEffect } from "react";
import ThreadsLogo from "../ThreadsLogo/ThreadsLogo";
import { Link } from "react-router-dom";
import Thread from "../Thread";
import { useDispatch, useSelector } from "react-redux";
import { getAllThreads } from "../../redux/slices/threads";

function Home() {
  const dispatch = useDispatch();
  const { threads } = useSelector((state) => state.threads);

  useEffect(() => {
    dispatch(getAllThreads());
  }, [dispatch]);

  return (
    <div className="px-3 w-full">
      <div className="flex items-center justify-center">
        <Link to={"/"}>
          <ThreadsLogo />
        </Link>
      </div>
      {threads.map((thread) => (
        <Thread data={thread} />
      ))}
    </div>
  );
}

export default Home;
