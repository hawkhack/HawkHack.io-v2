import image from './pictures/msulanding.jpg';

const sponsorStyles = () => ({
  wholeWrapper: {
  },
  wrapper: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 'auto',
    minHeight: '70vh',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  },
  grad: {
    background: 'linear-gradient(to bottom right, rgba(209, 25, 13, 0.9) 0%, rgba(34, 31, 31, 0.9) 100%)',
    height: 'auto',
    minHeight: '70vh',
  },
  title: {
    padding: 30,
  },
  imgWrapper: {
    padding: 20,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

export default sponsorStyles;
