const sponsorStyles = () => ({
  wholeWrapper: {
  },
  wrapper: {
    padding: 20,
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
    transition: 'transform .2s' ,

    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
});

export default sponsorStyles;
