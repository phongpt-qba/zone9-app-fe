import { useModal } from '@/state/global/hooks';
import { Backdrop, BackdropProps, Box } from '@mui/material';
import { useSize } from 'ahooks';
import { FC, useEffect, useRef, useState } from 'react';

const OpenMysteryBoxResultModal: FC<
  BackdropProps & {
    onClick: () => void;
  }
> = ({ onClick, ...rest }) => {
  const [canPlay, setCanPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const nftRef = useRef<HTMLVideoElement>(null);
  const { props: modalProps } = useModal();
  const openBoxVideoSize = useSize(videoRef);
  const nftVideoSize = useSize(nftRef);
  const [displayNftVideo, setDisplayNftVideo] = useState(false);

  const handleCanPlay = () => {
    setCanPlay(true);
  };

  const handleClose = () => {
    return;
  };

  useEffect(() => {
    if (rest.open) {
      if (canPlay) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();

        setTimeout(() => {
          setDisplayNftVideo(true);
        }, 5000);

        setTimeout(() => {
          onClick && onClick();
        }, 10000);
      }
    } else {
      setDisplayNftVideo(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rest.open, canPlay]);

  return (
    <Backdrop
      {...rest}
      onClick={handleClose}
      sx={{
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: canPlay ? 'block' : 'none',
          }}
          width="80vw"
        >
          <video
            src="https://zone9.s3.ap-southeast-1.amazonaws.com/open-box-animation.mp4"
            width="100%"
            ref={videoRef}
            controls={null}
            onCanPlayThrough={handleCanPlay}
          />
        </Box>

        <Box
          sx={{
            visibility: displayNftVideo ? 'visible' : 'hidden',
            position: 'absolute',
            left: (openBoxVideoSize?.width - nftVideoSize?.width) / 2,
            top: (openBoxVideoSize?.height - nftVideoSize?.height) / 2,
            width: openBoxVideoSize?.width * 0.2,
          }}
        >
          <video
            autoPlay
            muted
            loop
            src={modalProps?.animationUrl}
            width="100%"
            ref={nftRef}
          />
        </Box>
      </Box>
    </Backdrop>
  );
};

export default OpenMysteryBoxResultModal;
