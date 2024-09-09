import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

export default function MultiActionAreaCard({ image, title, description, price }) {
  return (
    <Card
      sx={{
        maxWidth: '330px',
        height: '442px',
        padding: '20px',
        borderRadius: '20px',
        gap: '19px',
        color: '#FFFFFF',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: '290px', width: '290px' }}
          image={image}
          alt="white bmw"
        />
        <CardContent sx={{ width: '100%' }}>
          {/* Title */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              sx={{
                width: '289px',
                height: '26px',
                fontSize: '16px',
                fontWeight: '900',
                color: '#1F1F2C',
              }}
            >
              {title}
            </Typography>
            <Button
              variant="contained"
              color="error"
              sx={{
                width: '30px',
                height: '30px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '700',
                padding: '4px',
              }}
            >
              BID
            </Button>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: '16px',
            }}
          >
            {/* Estimated Bid */}
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              sx={{
                width: '100px',
                height: '20px',
                fontSize: '13px',
                color: '#7A798A',
              }}
            >
              Creator
            </Typography>

            {/* Potential Savings */}
            <Typography variant="body2" color="text.secondary">
              Current Bid
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            {/* Estimated Bid */}
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              sx={{
                width: '200px',
                height: '20px',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#1F1F2C',
              }}
            >
              {description}
            </Typography>

            {/* Potential Savings */}
            <Typography
              variant="h7"
              sx={{
                width: '50px',
                height: '26px',
                fontSize: '18px',
                fontWeight: '900',
                color: '#1F1F2C',
              }}
              color="text.secondary"
            >
              {price}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}