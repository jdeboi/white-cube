
import React, { useEffect } from 'react';
import P5Sketch from './Sketch';
import './Allison.css';
import useScript from '../../../hooks/useScript';

// store
import { useDispatch, useSelector } from 'react-redux';
import { doneLoadingApp } from '../../../store/window';
import { selectWindow } from '../../../store/store';



const Room = () => {
    const windowUI = useSelector(selectWindow);
    const dispatch = useDispatch();

    return (
        <div className="Room Sketch">
            <div id="p5_loading" className="loadingclass"></div>
            <P5Sketch
                loadingDone={() => dispatch(doneLoadingApp())}
            />
        </div>
    )
};

export default Room;