import { Grid } from '@mui/material'; // Corrected import for Grid
import React, { useEffect, useState } from 'react';
import SingleProductSize from './singleProductSize/SingleProductSize';

const defultSizeList = ['XS', 'S', 'M', 'L', 'LX'];

export default function ProductSize({ availableSize }) {
  const [finalSizes, setFinalSizes] = useState([]);

  useEffect(() => {
    let tempArry = [];
    defultSizeList.forEach((element) => {
      tempArry.push({
        size: element,
        isAvalable: availableSize.includes(element),
      });
    });
    setFinalSizes(tempArry);
  }, [availableSize]);

  return (
    <Grid container>
      {finalSizes.map((val, key) => {
        return (
          <Grid item xs={2} key={key}> {/* Corrected the size property */}
            <SingleProductSize size={val.size} availableSizes={val.isAvalable} />
          </Grid>
        );
      })}
    </Grid>
  );
}