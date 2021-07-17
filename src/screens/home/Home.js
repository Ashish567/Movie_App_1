import React from "react";
import Header from "../../common/header/Header";
import GridTileList from "../../common/gridTileList/GridTileList";
import GridList2 from "../../common/gridTileList2/GridList2";
import FilterCard from "../../common/filterCard/FilterCard";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="headerForUpcomingMovies">
        <p>Upcoming Movies</p>
      </div>
      <GridTileList />
      <br />
      <div className="masterDivider">
        <div className="left">
          <GridList2 />
        </div>
        <div className="right">
          <FilterCard />
        </div>
      </div>
    </div>
  );
}
