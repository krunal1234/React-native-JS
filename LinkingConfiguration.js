import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              Home: 'Home',
            },
          },
          Product: {
            screens: {
              Product: 'Product',
            },
          },
          Cart: {
            screens: {
              Cart: 'Cart',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
