import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Table from "../../components/table/Table"
import { useContext, useState } from "react"
import {DataContext} from "../../components/Context/DataContext";

import "./Home.scss"

export const Home = () => {
  const [row1, setRow1] = useState([
    {
      id: 1,
      status: "",
      dataPoolName: "Cornfield analysis - Bavaria",
      uploadDate: "2021-06-15",
      samples: "56",
      owner: "Beta User",
      marker: "Fungal ITS2",
      primer: true,
      metaData:"",
      extend:"",

    },
    {
        id: 2,
        status: "",
        dataPoolName: "Lighttrap - IV",
        uploadDate: "2021-08-17",
        samples: "33",
        owner: "Beta User",
        marker: "Animal CO1",
        primer: false,
        metaData:"",
        extend:"",
    },
    {
        id: 3,
        status: "",
        dataPoolName: "Pollen (Flowering Strip)",
        uploadDate: "2021-07-21",
        samples: "125",
        owner: "Colleague A",
        marker: "Plant ITS2",
        primer: true,
        metaData:"",
        extend:"",
    },
  ]);

  const [row2, setRow2] = useState([
    {
      id: 1,
      status: "",
      dataPoolName: "Cornfield analysis - Bavaria",
      uploadDate: "2021-06-15",
      samples: "56",
      owner: "Beta User",
      marker: "Fungal ITS2",
      primer: true,
      metaData:"",
      extend:"",

    },
    {
        id: 2,
        status: "",
        dataPoolName: "Lighttrap - IV",
        uploadDate: "2021-08-17",
        samples: "33",
        owner: "Beta User",
        marker: "Animal CO1",
        primer: false,
        metaData:"",
        extend:"",
    },
    {
        id: 3,
        status: "",
        dataPoolName: "Pollen (Flowering Strip)",
        uploadDate: "2021-07-21",
        samples: "125",
        owner: "Colleague A",
        marker: "Plant ITS2",
        primer: true,
        metaData:"",
        extend:"",
    },
  ]);
  var rowsTwo = [
    {
      id: 1,
      status: "",
      dataPoolName: "Forest Fringe South",
      uploadDate: "2020-03-29",
      samples: "73",
      owner: "Colleague B",
      marker: "Animal CO1",
      primer: true,
      metaData:"",
      extend:"",

    },
    {
        id: 2,
        status: "",
        dataPoolName: "Lighttrap - IV",
        uploadDate: "2019-07-16",
        samples: "16",
        owner: "Colleague C",
        marker: "Bacteria 16s",
        primer: false,
        metaData:"",
        extend:"",
    },
    {
        id: 3,
        status: "",
        dataPoolName: "Bat Feces",
        uploadDate: "2020-09-11",
        samples: "41",
        owner: "Colleague A",
        marker: "Plant ITS2",
        primer: true,
        metaData:"",
        extend:"",
    },
  ];
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
        <DataContext.Provider value={{row1, row2,  setRow1, setRow2}}>
            <Navbar email = {localStorage.getItem("email")}/>
            <div className="listContainer">
                    <Table name = "Raw Data (FastQ)" row = {row1} primerVisible = {true} />
                    <Table name = "Processed Data (OTU)" row = {row2} primerVisible = {false} />
                <label></label>
            </div>
          </DataContext.Provider>
        </div>
        
    </div>
  )
}
