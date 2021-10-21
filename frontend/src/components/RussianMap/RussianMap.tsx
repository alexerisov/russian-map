import React from 'react';
import {getColor} from "../../utils/getColor";
import {Colors} from "../../utils/constants";
import { RegionType, RussianMapProps } from '../../types';

const RussianMap = (props: RussianMapProps) => {
    const {
        regions,
        onRegionMouseMove,
        onRegionMouseOut,
    } = props

    return (
        <div>
            <svg width="100%"
                 height="689"
                 className="russian-map"
                 viewBox="-365 196 1188 689"
                 x="0px"
                 y="0px"
                 version="1.1">

                {regions?.map((item: RegionType, id: number) =>
                    <path key={id}
                          id={`${item.code}`}
                          className={"russian-map-region"}
                          d={item.path}
                          fill={getColor(item.key)}
                          stroke={Colors.black}
                          strokeWidth={1}
                          onMouseMove={(e) => onRegionMouseMove(e, id)}
                          onMouseOut={onRegionMouseOut}/>
                )}

                <g>
                    <circle cx="-212.1" cy="408.5" r="2.3" fill="red" className="russian-map-capital"/>
                    <circle cx="-364.3" cy="592.3" r="2.3" fill="red" className="russian-map-capital"/>
                    <circle cx="-216.1" cy="500.7" r="2.3" fill="red" className="russian-map-capital"/>
                </g>
            </svg>
        </div>
    );
}

export default RussianMap