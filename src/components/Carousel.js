import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Divider } from '@mui/material';

const itemData = [
    {
      img: 'https://media.ed.edmunds-media.com/bmw/m5/2018/fd/2018_bmw_m5_actf34_fd_831172_1600.jpg',
      title: 'Sedan',
    },
    {
      img: 'https://autoreview.ru/images/Article/1720/Article_172009_860_575.jpg',
      title: 'Pick-Up',
      cols: 2,
    },
    {
      img: 'https://pictures.dealer.com/c/cathousandoakslr/0012/f65906d7d221ff2ef67e589edfd7df53x.jpg',
      title: 'SUV',
    },
    {
      img: 'https://zenithsupercarrental.com/wp-content/webp-express/webp-images/uploads/2022/04/finalnewm.jpg.webp',
      title: 'Cars',
      rows: 2,
      cols: 4,
    },
  ];
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <>
        <ImageList
        sx={{ width: '80%', height: 400, margin: [0, 'auto'] }}
        variant="quilted"
        cols={4}
        rowHeight={125}
        >
        {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
            />
            </ImageListItem>
        ))}
        </ImageList>
        <Divider />
    </>
  );
}