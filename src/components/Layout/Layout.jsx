import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
import { Box } from 'components/Box';
import { HeaderLink } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        px={6}
        py={5}
        fontSize="xl"
        fontWeight="bold"
        boxShadow="highContrast"
        as="header"
      >
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/movies">Movies</HeaderLink>
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
