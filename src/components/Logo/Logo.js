// material-ui
import { useTheme } from '@mui/material/styles';

const Logo = () => {
  const theme = useTheme();

  return <div style={{ fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', color: theme.palette.primary.main }}>PhotoVault</div>;
};

export default Logo;
