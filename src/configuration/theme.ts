import { ThemeType } from 'grommet';

const theme: ThemeType = {
  global: {
    colors: {
      brand: '#392e5c',
      'background-contrast': '#201c2b',
      focus: '#c2c2c2',
    },
  },
  button: {
    default: {},
    primary: {
      border: {
        radius: '2px',
      },
      padding: {
        horizontal: '24px',
        vertical: '8px',
      },
      color: '#fff',
      background: 'linear-gradient(134deg,#944fff 0,#af00ed 100%)',
      font: {
        weight: 700,
      },
    },
    hover: {
      primary: {
        background: {
          image: 'linear-gradient(134deg,#af00ed 0,#944fff 100%)',
        },
      },
    },
  },
};

export { theme };
