import OpenMysteryBoxResultModal from '@/components/Modal/OpenMysteryBoxResultModal';
import { ModalType } from '@/config/constants';
import { useModal } from '@/state/global/hooks';
import { Box } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Z9Tab from '../components/Z9Tab';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const HomePage = () => {
  const { isOpenModal, type, closeModal } = useModal();

  return (
    <Box>
      <Header />
      <Box>
        <img style={{ width: '100%' }} src="/img/sample1.png" alt="???" />
      </Box>
      <Z9Tab />
      <Footer />
      <OpenMysteryBoxResultModal
        open={isOpenModal && type === ModalType.OPEN_MYSTERY_BOX_RESULT_MODAL}
        onClick={closeModal}
      />
    </Box>
  );
};

export default HomePage;
