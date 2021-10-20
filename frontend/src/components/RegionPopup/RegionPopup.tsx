import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import {Star} from "@mui/icons-material";
import React from "react";
import {getColor} from "../../utils/getColor";

export const RegionPopup = (props: any) => {
    const {
        region,
        ...otherProps
    } = props

    const color = getColor(region?.key)

    return (
        <Popover id="mouse-over-popover"
                 sx={{pointerEvents: 'none'}}
                 anchorReference="anchorPosition"
                 disableRestoreFocus
                 {...otherProps}>

            <Typography variant="h4" sx={{p: 1}}>{region?.value}</Typography>
            <Typography sx={{p: 1, display: "flex", alignItems: 'center'}}>
                <Typography variant="h6">Код региона:</Typography>
                <Typography variant="h5">{region?.key}</Typography>
                <Star fontSize="large" sx={{color: color}}/>
            </Typography>
        </Popover>
    )
}
