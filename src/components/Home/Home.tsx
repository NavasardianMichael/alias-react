import React, { FC } from "react";

const Home: FC<{}> = () => {

  const handleClick = () => {
    console.log('the game has launched!')
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
        <button 
          type="button" 
          className="btn btn-secondary"
          onClick={handleClick}
        >
            Secondary
        </button>
      </div>
    </div>
  );
};

export default Home;
