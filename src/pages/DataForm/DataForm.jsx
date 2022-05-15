import FASTQ from '../../images/FASTQ.png';
import OTU from '../../images/OTU.png';
import CloseIcon from '@mui/icons-material/Close';
import './dataForm.scss';

const DataForm = (props) => {

    return (
        <>
            <div className='close-button-div'>
                <button className= 'close-button' onClick = { ()=> {props.dataOpenClose(false)}}>
                    <CloseIcon className="icon"/>
                </button>
            </div>
            <div className='data-form'>
                <div>
                    +Create a new run
                </div>
                <button className='button-image'><img src={FASTQ} alt="my image" onClick = { ()=> {props.dataOpenClose(false); props.inputOpenClose(true); props.primerFlag(true)}}/></button>
                <button className='button-image'><img src={OTU} alt="my image" onClick = { ()=> {props.dataOpenClose(false); props.inputOpenClose(true); props.primerFlag(false)}}/></button>
            </div>
        </>
    )
}
export default DataForm;