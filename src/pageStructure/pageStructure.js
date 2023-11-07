import React, { Fragment } from "react";
import "./pageStructure.css";
import PlayerScore from "./playerscore";

const PageStructure = () => {
  // useEffect(setNumber(data));

  return (
    <Fragment>
      <body>
        <main>
          <PlayerScore />
        </main>
      </body>
    </Fragment>
  );
};

export default PageStructure;
