import Typography from '@mui/material/Typography'
import Popover from '@mui/material/Popover'
import React from 'react'
import { getColor } from '../../utils/getColor'
import { RegionPopupProps } from '../../types'
import { ReactComponent as RedIcon } from '../../assets/icons/red.svg'
import { ReactComponent as YellowIcon } from '../../assets/icons/yellow.svg'
import { ReactComponent as GreenIcon } from '../../assets/icons/green.svg'
import { Colors } from '../../utils/constants'
import { getIdFromRsmKey } from '../../utils/getIdFromRsmKey'

export const RegionPopup = (props: RegionPopupProps) => {
  const { region, ...otherProps } = props

  const id = getIdFromRsmKey(region?.rsmKey)
  const color = getColor(id)

  const PropertyIcon = () => {
    switch (color) {
      case Colors.red:
        return <RedIcon />
      case Colors.yellow:
        return <YellowIcon />
      case Colors.green:
        return <GreenIcon />
      default:
        return <GreenIcon />
    }
  }

  return (
    <Popover
      id="mouse-over-popover"
      sx={{ pointerEvents: 'none', m: 0 }}
      anchorReference="anchorPosition"
      disableRestoreFocus
      {...otherProps}
    >
      <Typography
        variant="h1"
        paragraph
        sx={{ p: 1, mb: -2, fontSize: '1.1em' }}
      >
        {region?.properties?.NL_NAME_1}
      </Typography>
      <Typography
        sx={{
          p: 1,
          display: 'flex',
          alignItems: 'center',
          m: 0,
        }}
      >
        <Typography variant="h5" sx={{ fontSize: '1em' }}>
          Код региона:
        </Typography>
        <Typography variant="h6" sx={{ fontSize: '1em' }}>
          {id}
        </Typography>
        <PropertyIcon />
      </Typography>
    </Popover>
  )
}
