import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react';

const Home = () => {
    const { url } = useRouteMatch()
  return (
    <>
      <section className = "main-title">
          <h2>Your favorite food, delivered while coding!</h2>
          <Link to={`${url}pizza`}>
            <button id="redirect">Pizza?</button>
          </Link>
      </section>
      <section>
        <div>
        </div>
      </section>
  </>
  );
};
export default Home;