import React, {useState} from 'react';
import './App.css';
import RussianMap from "./components/RussianMap";
import {useGetRegionsQuery} from "./api/regionsApi";
import {CircularProgress, Container} from "@mui/material";
import RegionPopup from './components/RegionPopup';

function App() {
    const {data, error, isLoading} = useGetRegionsQuery({skip: false})

    const [hoveredRegionId, setHoveredRegionId] = useState(0)
    const [isPopupVisible, setIsPopupVisible] = useState(false)
    const [cursorPosition, setCursorPosition] = useState({
        top: 0,
        left: 0
    })

    const onMouseMoveHandler = (e: any, id: any) => {
        let x = document.body.scrollLeft;
        let y = document.body.scrollTop;
        setHoveredRegionId(id)
        setCursorPosition({
            left: (e.pageX - x) + 10,
            top: (e.pageY - y) + 10,
        })
        setIsPopupVisible(true)
    }

    const onMouseOutHandler = (e: any) => {
        setIsPopupVisible(false)
    }

    return (
        <Container className="App">
            {isLoading
                ? <CircularProgress/>
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
