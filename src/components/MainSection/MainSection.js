import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
} from "@apollo/client";
import { RestLink } from "apollo-link-rest";

import loaderSVG from "../../assets/loader.svg";
import MoviesList from "../MoviesList/MoviesList";
import classes from "./MainSection.module.scss";

const restLink = new RestLink({
  uri: "https://swapi.dev/api/",
  credentials: "same-origin",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
});

const GET_FILMS = gql`
  query GetFilms {
    films @rest(type: "Film", path: "films") {
      results
    }
  }
`;

const Content = () => {
  const { loading, error, data } = useQuery(GET_FILMS);

  // console.log(data);

  if (loading) {
    return (
      <div className={classes["loader-container"]}>
        <img src={loaderSVG} alt="Loader" />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classes["loader-container"]}>
        <div>Something went wrong! {error}</div>
      </div>
    );
  }

  return <MoviesList films={data.films.results} />;
};

const MainSection = (props) => {
  // console.log(props);

  return (
    <ApolloProvider client={client}>
      <main className={classes.mainSection}>
        {/* <FetchFilmsHandler />
        <MoviesList /> */}
        <Content />
      </main>
    </ApolloProvider>
  );
};

export default MainSection;
