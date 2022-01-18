import React from "react";
import { gql, useQuery } from "@apollo/client";

import Table from "react-bootstrap/Table";
import classes from "./MovieTable.module.scss";
import triangleUp from "../../assets/triangle-up.svg";
import triangleDown from "../../assets/triangle-down.svg";

const MovieTable = (props) => {
  const GET_PLANETS = gql`
    query GetPlanets {
      planets @rest(type: "Planet", path: "planets") {
        results
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PLANETS);
  let filterPlanetResults = [];

  if (error) {
    // to do: Hide table and display error message
  }

  if (
    !loading &&
    !error &&
    data &&
    data.planets &&
    data.planets.results &&
    data.planets.results.length > 0
  ) {
    filterPlanetResults = data.planets.results.filter((obj) => {
      return props.planets.some((value) => {
        return obj.url === value;
      });
    });
  }

  const sortingArrows = (
    <div className={classes["movie-table__sorting"]}>
      <img src={triangleUp} alt="Sort ASC" />
      <img src={triangleDown} alt="Sort ASC" />
    </div>
  );

  return (
    <Table className={classes["movie-table"]} hover responsive="md">
      <thead>
        <tr>
          <th>
            <div className={classes["movie-table__column-box"]}>
              <span>Planet Name</span>
              {sortingArrows}
            </div>
          </th>
          <th>
            <div className={classes["movie-table__column-box"]}>
              <span>
                Rotation <br />
                period
              </span>
              {sortingArrows}
            </div>
          </th>
          <th>
            <div className={classes["movie-table__column-box"]}>
              <span>
                Orbital <br />
                period
              </span>
              {sortingArrows}
            </div>
          </th>
          <th>
            <div className={classes["movie-table__column-box"]}>
              <span>Diameter</span>
              {sortingArrows}
            </div>
          </th>
          <th>
            <div className={classes["movie-table__column-box"]}>
              <span>Climate</span>
              {sortingArrows}
            </div>
          </th>
          <th>
            <div className={classes["movie-table__column-box"]}>
              <span>
                Surface <br />
                water
              </span>
              {sortingArrows}
            </div>
          </th>
          <th>
            <div className={classes["movie-table__column-box"]}>
              <span>Population</span>
              {sortingArrows}
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {loading && (
          <tr>
            <td>Loading...</td>
          </tr>
        )}
        {filterPlanetResults.length > 0 &&
          filterPlanetResults.map((value, key) => (
            <tr key={key}>
              <td>{value.name}</td>
              <td>{value.rotation_period}</td>
              <td>{value.orbital_period}</td>
              <td>{value.diameter}</td>
              <td>{value.climate}</td>
              <td>{value.surface_water}</td>
              <td>{value.population}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default MovieTable;
