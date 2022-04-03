import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { nameSelector } from "@/redux/Account/selector";
import { fetchProfile } from "@/redux/Account/slice";
import { StyledContainer, StyledText } from "./styles";
const Home = () => {
  const dispatch = useDispatch();
  const name = useSelector(nameSelector);
  useEffect(() => {
    dispatch(fetchProfile({ userName: "JackyTung" }));
  }, [dispatch]);

  return (
    <StyledContainer>
      This is home page, my name is:
      <StyledText>{name}</StyledText>
    </StyledContainer>
  );
};

export default Home;
