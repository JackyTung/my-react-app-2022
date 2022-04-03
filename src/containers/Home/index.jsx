import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { nameSelector } from "@/redux/Account/selector";
import { fetchProfile } from "@/redux/Account/slice";
const Home = () => {
  const dispatch = useDispatch();
  const name = useSelector(nameSelector);
  useEffect(() => {
    dispatch(fetchProfile({ userName: "JackyTung" }));
  }, [dispatch]);

  return <div>This is home page, my name is: {name}</div>;
};

export default Home;
