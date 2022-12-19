import { Oval } from 'react-loader-spinner';
import { Box } from 'components/Box';

export default function Loader() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" py={5}>
      <Oval
        height={80}
        width={80}
        color="teal"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="teal"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Box>
  );
}
