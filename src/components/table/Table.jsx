import "./Table.scss"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DoneIcon from '@mui/icons-material/Done';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';


const List = (props) => {
      
      return (
        <>
        <div>
          {props.name}
        </div>
        
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">status</TableCell>
                <TableCell className="tableCell">dataPoolName</TableCell>
                <TableCell className="tableCell">uploadDate</TableCell>
                <TableCell className="tableCell">samples</TableCell>
                <TableCell className="tableCell">owner</TableCell>
                <TableCell className="tableCell">marker</TableCell>
                <TableCell className="tableCell">
                  {props.primerVisible ? "primer" : ""}
                </TableCell>
                <TableCell className="tableCell">metaData</TableCell>
                <TableCell className="tableCell">extend</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.row.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="tableCell">
                    <div>
                        <EqualizerIcon className="icon"/>
                    </div>
                  </TableCell>
                  <TableCell className="tableCell">{row.dataPoolName}</TableCell>
                  <TableCell className="tableCell">{row.uploadDate}</TableCell>
                  <TableCell className="tableCell">{row.samples}</TableCell>
                  <TableCell className="tableCell">{row.owner}</TableCell>
                  <TableCell className="tableCell">{row.marker}</TableCell>
                  { props.primerVisible ? 
                  <TableCell className="tableCell">
                  {row.primer ? <DoneIcon className="icon"/> : <CloseIcon className="icon"/> }
                  </TableCell> : <TableCell className="tableCell"></TableCell>
                  }
                  <TableCell className="tableCell">
                    <div>
                        <RadioButtonUncheckedIcon className="icon"/>
                    </div>
                  </TableCell>
                  <TableCell className="tableCell">
                    <div>
                        <MoreHorizIcon className="icon"/>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </>
      );
    };

export default List