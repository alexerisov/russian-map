import React from 'react';
import { geoAlbers } from 'd3-geo';
import {
  ComposableMap,
  Geographies,
  Geography, ProjectionFunction,
  ZoomableGroup,
} from 'react-simple-maps';
import { Container } from '@mui/material';
import { getColor } from '../../utils/getColor';
import { Colors } from '../../utils/constants';
import { RussianMapProps } from '../../types';
import { getIdFromRsmKey } from '../../utils/getIdFromRsmKey';

const width = 800;
const height = 600;

const projection = geoAlbers()
  .rotate([-105, 0])
  .center([-10, 65])
  .parallels([52, 64])
  .scale(600)
  .translate([width / 2, height / 2]) as any as ProjectionFunction;

const RussianMap = (props: RussianMapProps) => {
  const {
    regions,
    onRegionMouseMove,
    onRegionMouseOut,
  } = props;

  const defaultStyle = {
    strokeWidth: 0.75,
    stroke: Colors.black,
    outline: 'none',
    transition: 'all 250ms',
  };

  const hoveredStyle = {
    strokeWidth: 0.75,
    outline: 'none',
    transition: 'all 250ms',
    filter: 'brightness(1.5)',
  };

  return (
    <Container className="map-wrapper">
      <ComposableMap projection={projection} width={width} height={height}>
        <ZoomableGroup zoom={1}>
          <Geographies geography={regions}>
            {({ geographies }) => geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                onMouseMove={(e) => onRegionMouseMove(e, geo as ReturnType<typeof geo>)}
                onMouseLeave={onRegionMouseOut}
                geography={geo}
                style={{
                  default: {
                    ...defaultStyle,
                    fill: getColor(getIdFromRsmKey(geo.rsmKey)),
                  },
                  hover: {
                    ...defaultStyle,
                    fill: getColor(getIdFromRsmKey(geo.rsmKey)),
                    ...hoveredStyle,
                  },
                }}
              />
            ))}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </Container>
  );
};

export default RussianMap;
