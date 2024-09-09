import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

import flower from '../../assets/flower.svg';

export default function MultiActionAreaCard({ image }) {
  return (
    <Card sx={{ maxWidth: '330px', padding: '20px', borderRadius: '20px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="290"
          image={image}
          alt="white bmw"
        />
        <CardContent className='w-full'>
          {/* Title */}
          <Typography 
            gutterBottom 
            variant="h7" 
            component="div" 
            className='w-full text-[18px] font-extrabold text-[#1F1F2C]'>
            "2018 BMW X1 XDRIVE"
          </Typography>

          {/* Lot Number */}
          <Typography 
            variant="body2" 
            color="text.secondary" 
            className='w-full text-[13px] text-[#7A798A]'>
            Lot: 38498458
          </Typography>

          {/* VIN and Bid Button */}
          <div className="flex items-center justify-between w-full mb-4 pb-4 border-b border-[#ccc]">
            <Typography 
              gutterBottom 
              variant="h7" 
              component="div" 
              className='text-[18px] font-extrabold text-[#1F1F2C]'>
              VIN: WBHT3C3J3H
            </Typography>
            <Button 
              variant="contained" 
              color="error" 
              style={{ width: '30px', height: '30px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', padding: '4px' }}>
              BID
            </Button>
          </div>
          <div className="flex items-center justify-between w-full mt-2">
            {/* Estimated Bid */}
            <Typography 
              gutterBottom 
              variant="body2" 
              component="div"
              className='w-[100px] text-[13px] text-[#7A798A]'>
              Estimated Bid
            </Typography>

            {/* Potential Savings */}
            <Typography 
              variant="body2" 
              color="text.secondary">
              Potential Savings
            </Typography>
          </div>
          <div className="flex flex-row justify-between w-full">
            {/* Estimated Bid */}
            <Typography 
              gutterBottom 
              variant="h7" 
              component="div"
              className='w-[200px] font-extrabold text-[18px] text-[#1F1F2C]'>
              $3,690 - $6,510
            </Typography>
            <CardMedia
              component="img"
              style={{ width: '20px', height: '20px' }}
              image={flower}
              alt=""
            />

            {/* Potential Savings */}
            <Typography 
              variant="body2" 
              style={{ width: '50px', height: '26px', color: '#1F1F2C' }}
              color="text.secondary">
              $3,500
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}