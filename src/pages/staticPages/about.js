// material-ui
import { Typography } from '@mui/material';
import MainCard from 'components/MainCard';

const About = () => {
  return (
    <MainCard title="About PhotoVault">
      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        <strong>PhotoVault</strong> is a secure and user-friendly web application designed to help you upload, store, and manage your photos
        effortlessly. Built using modern technologies like React and Material-UI, PhotoVault provides a seamless experience for users to
        organize their photo collections with ease.
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        The app features authentication to ensure your photos remain private and secure. Whether you&apos;re storing cherished memories or
        managing an extensive photo library, PhotoVault is tailored to meet your needs with reliability and performance.
      </Typography>
      <Typography variant="body2">
        Developed by <strong>RachaDev</strong>, this project is a testament to the power of React and the beauty of modern web design. Stay
        tuned for future updates and enhancements!
      </Typography>
    </MainCard>
  );
};

export default About;
