import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import React from 'react';
import { getColor } from '../../utils/getColor';
import { RegionPopupProps } from '../../types';
import { ReactComponent as RedIcon } from '../../assets/icons/red.svg';
import { ReactComponent as YellowIcon } from '../../assets/icons/yellow.svg';
import { ReactComponent as GreenIcon } from '../../assets/icons/green.svg';
import { Colors } from '../../utils/constants';

export const RegionPopup = (props: RegionPopupProps) => {
  const {
    region,
    ...otherProps

  } = props;

  const color = getColor(region?.key);

  const PropertyIcon = () => {
    switch (color) {
      case Colors.red:
        return <RedIcon />;
      case Colors.yellow:
        return <YellowIcon />;
      case Colors.green:
        return <GreenIcon />;
      default:
        return <GreenIcon />;
    }
  };

  return (
    <Popover
      id="mouse-over-popover"
      sx={{ pointerEvents: 'none' }}
      anchorReference="anchorPosition"
      disableRestoreFocus
      {...otherProps}
    >

      <Typography variant="h1" paragraph sx={{ p: 1, fontSize: '1.1em' }}>{region?.value}</Typography>
      <Typography
        paragraph
        sx={{
          p: 1, display: 'flex', alignItems: 'center', fontSize: '1em',
        }}
      >
        <Typography variant="h5">Код региона:</Typography>
        <Typography variant="h6">{region?.key}</Typography>
        <PropertyIcon />
      </Typography>
    </Popover>
  );
};
