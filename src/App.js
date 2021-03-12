import DefaultLayout from './layouts/Default';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <DefaultLayout>
      <Movies></Movies>
    </DefaultLayout>
  },
  {
    path: '/movie/:id',
    main: () => <DefaultLayout>
      <MovieDetails></MovieDetails>
    </DefaultLayout>
  },
]

const getRoutes = () => {
  const routeComponents = routes.map((route, index) => {
    return <Route
      key={index}
      exact={route.exact}
      path={route.path}
    >
      {route.main}
    </Route>
  })
  return routeComponents
}


function App() {
  return (
    <Router>
        <Switch>
          {getRoutes()}
        </Switch>
    </Router>
  );
}
export default App;
