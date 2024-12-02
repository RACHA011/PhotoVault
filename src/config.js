const config = {
  defaultPath: '/about',
  fontFamily: `'Public Sans', sans-serif`,
  i18n: 'en',
  miniDrawer: false,
  container: true,
  mode: 'light',
  presetColor: 'default',
  themeDirection: 'ltr',
  devServer: {
    allowedHosts: 'all', // Accept requests from any host
    host: '0.0.0.0', // Listen on all network interfaces
    port: 3000, // Ensure the correct port is used
    disableHostCheck: true // Disable host checking
  }
};

export default config;
export const drawerWidth = 260;

export const twitterColor = '#1DA1F2';
export const facebookColor = '#3b5998';
export const linkedInColor = '#0e76a8';
