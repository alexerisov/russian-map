import React, {MouseEventHandler, useState} from 'react';
import './App.css';
import RussianMap from "./components/RussianMap";
import {useGetRegionsQuery} from "./api/regionsApi";
import {CircularProgress, Container} from "@mui/material";
import RegionPopup from './components/RegionPopup';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function App() {
    const {data, error, isLoading, isError} = useGetRegionsQuery()

    const [hoveredRegionId, setHoveredRegionId] = useState(0)
    const [isPopupVisible, setIsPopupVisible] = useState(false)
    const [cursorPosition, setCursorPosition] = useState({
        top: 0,
        left: 0
    })

    const onMouseMoveHandler = (e: MouseEvent, id: number): void => {
        let x = document.body.scrollLeft;
        let y = document.body.scrollTop;
        setHoveredRegionId(id)
        setCursorPosition({
            left: (e.pageX - x) + 10,
            top: (e.pageY - y) + 10,
        })
        setIsPopupVisible(true)
    }

    const onMouseOutHandler: MouseEventHandler = () => {
        setIsPopupVisible(false)
    }

    return (
        <Container className="App">
            {isLoading
                ? <CircularProgress/>
                : isError
                    ? <Alert severity="error">
                        <AlertTitle>Something went wrong</AlertTitle>
                        error?.status && {JSON.stringify(error)}
                        error?.data && {JSON.stringify(error)}
                        error?.code && {JSON.stringify(error)}
                        error?.message && {JSON.stringify(error)}

                    </Alert>
                    : <RussianMap
                        regions={data}
                        onRegionMouseMove={onMouseMoveHandler}
                        onRegionMouseOut={onMouseOutHandler}
                    />
            }
            <RegionPopup
                region={data?.[hoveredRegionId]}
                open={isPopupVisible}
                anchorPosition={cursorPosition}
            />
        </Container>
    );
}

export default App;
