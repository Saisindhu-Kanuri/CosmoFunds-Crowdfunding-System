try {
    const path = require.resolve('./Context/constants');
    console.log('Constants Path:', path);
  } catch (error) {
    console.error('Error resolving path:', error);
  }
  