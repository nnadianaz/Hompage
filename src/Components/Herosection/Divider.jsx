import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function FlexDivider() {
  
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <Divider 
       orientation="vertical"
        variant="middle" 
        flexItem 
        sx={{
          width: { xs: '2px', sm: '2px'}, 
          height: { xs: '2px', sm: '50px', md: '50px', lg: '50px' },
          borderColor: '#FFFFFF',
          backgroundColor: '#FFFFFF',
          '@media (max-width: 637px)': {
            height: '2px',
            width: '50px',
            borderColor: '#FFFFFF',
            backgroundColor: '#FFFFFF',
          },
        }}
      />
    </Box>
  );
}
