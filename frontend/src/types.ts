import { MouseEventHandler } from 'react'
import { PopoverProps } from '@mui/material'

export type RegionType = {
  key: number
  value: string
  code: string
  path: string
}

export interface RussianMapProps {
  regions: Array<RegionType> | undefined
  onRegionMouseMove: MouseEventHandler | any
  onRegionMouseOut: MouseEventHandler
}

export interface RegionPopupProps extends PopoverProps {
  region: any | undefined
}
