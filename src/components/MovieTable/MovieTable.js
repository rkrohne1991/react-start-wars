import React from "react";
import { gql, useQuery } from "@apollo/client";

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
    // to do:
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

  return (
    <table>
      <thead>
        <tr>
          <th>Planet Name</th>
          <th>Rotation period</th>
          <th>Orbital period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Surface water</th>
          <th>Population</th>
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
    </table>
  );
};

export default MovieTable;
