import React, { FC } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { COLORS, PAGES } from "../../constants/app";
import { setCurrentPage } from "../../store/app/actionCreators";

const Home: FC<{}> = () => {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setCurrentPage(PAGES.pre))
  }

  return (
    <div className="card card-border-radius text-center border-0">
      <img
        src="https://viewjjportfolio.com/static/media/reactbg.bf0d3dcd.jpg"
        className="card-img-top w-100"
        alt="..."
      />
      <div className="card-body">
        <h2 className="card-title">Alias</h2>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Button
          fullWidth 
          style={{backgroundColor: COLORS.secondary, color: COLORS.primary}}
          onClick={handleClick}
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default Home;
