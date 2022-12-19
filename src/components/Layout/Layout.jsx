import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loader from 'components/Loader';

export default function Layout() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
