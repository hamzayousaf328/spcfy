import React, { useState, useEffect, useRef, useContext } from 'react'
import { DataContext } from '../../components/Context/DataContext';
import CloseIcon from '@mui/icons-material/Close';
import './inputForm.scss';


export default function InputForm(props) {
    
    const {row1, row2, setRow1, setRow2} = useContext(DataContext);

    const formRef = useRef(null);
    var row = {};
    const handleData = () => {
        const form = formRef.current;
        if(props.primerVisible == true){
            
            row = {
                id: 0,
                status: `${form['status'].value}`,
                dataPoolName: `${form['dataPoolName'].value}`,
                uploadDate: `${form['uploadDate'].value}`,
                samples: `${form['samples'].value}`,
                owner: `${form['owner'].value}`,
                marker: `${form['marker'].value}`,
                primer: true,
                metaData:`${form['metaData'].value}`,
                extend:`${form['extend'].value}`
            }
            setRow1(row1 => [...row1, row]);
        }
        else{
            row = {
                id: 0,
                status: `${form['status'].value}`,
                dataPoolName: `${form['dataPoolName'].value}`,
                uploadDate: `${form['uploadDate'].value}`,
                samples: `${form['samples'].value}`,
                owner: `${form['owner'].value}`,
                marker: `${form['marker'].value}`,
                metaData:`${form['metaData'].value}`,
                extend:`${form['extend'].value}`,
            }
            setRow2(row2 => [...row2, row]);
        }
        
        
        props.inputOpenClose(false);
        
    };

    return (

        <>
        <div className='close-button-div'>
            <button className= 'close-button' onClick = { ()=> {props.inputOpenClose(false)}}>
                <CloseIcon className="icon"/>
            </button>
        </div>

        <div className='submit-div'>
            <form className='form-layout' ref = {formRef}>
            <div>
                <label>Status</label>
                <input name='status'></input>
            </div>
            <div>
                <label>Datapool Name</label>
                <input name='dataPoolName'></input>
            </div>
            <div>
                <label>Upload Date</label>
                <input name='uploadDate'></input>
            </div>
            <div>
                <label>Samples</label>
                <input name='samples'></input>
            </div>
            <div>
                <label>Owner</label>
                <input name='owner'></input>
            </div>
            <div>
                <label>Marker</label>
                <input name='marker'></input>
            </div>
            {props.primerVisible ? <div>
                <label>Primer</label>
                <input name='primer'></input>
            </div> : null}
            <div>
                <label>Meta Data</label>
                <input name='metaData'></input>
            </div>
            <div>
                <label>Extend</label>
                <input name='extend'></input>
            </div>
            
            </form>
        </div>
        <div  className='submit-button-div'>
            <button className='submit-button' onClick={handleData}>
                Submit
            </button>
        </div>
        
        </>
    )
}