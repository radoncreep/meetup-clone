import Banner from './components/Banner';
import ItWorks from './components/ItWorks';
import Upcoming from './components/Upcoming';
import Popular from './components/Popular';
import Connected from './components/Connected';
import Stories from './components/Stories';

import Footer from './components/Footer';
import { Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

import imageBg from './assets/bg.svg';

function App() {
  return (
    <>
      <Box position="absolute" left="0" top="0" right="0">
        <Banner />
        <ItWorks />
        <Upcoming /> 
        <Popular /> 
        <Connected />
        <Stories />
        <Footer />
      </Box>

      <Box
        position="relative"
        top="0"
        bottom="0"
        right="0"
        left="0"
        height="100vh"
        zIndex={-1}
      >
        <Image w="80%" m="auto" objectFit="cover" size="300" src={imageBg} />
      </Box>
    </>
  );
}

export default App;
