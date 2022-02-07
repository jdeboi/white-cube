import React, { useState, useRef } from 'react';
import './RoomIvans.css';

import RoomSketch from './RoomSketch';

// components
import LoadingPage from '../../../components/LoadingPage/LoadingPage';

// store
import { useSelector, useDispatch } from 'react-redux';
import { selectWindow } from '../../../store/store';
import { doneLoadingApp } from '../../../store/window';



const Room = () => {
    const windowUI = useSelector(selectWindow);
    const dispatch = useDispatch();

 
    return (
        <div className="Room RoomIvans Sketch">
            <div id="p5_loading" className="loadingclass"></div>
            <RoomSketch
                loadingDone={() => dispatch(doneLoadingApp())}
                isMobile={windowUI.isMobile}
            />

            {
                windowUI.loading ?
                    <LoadingPage /> :
                    null
            }

        </div>
    )
};

export default Room;