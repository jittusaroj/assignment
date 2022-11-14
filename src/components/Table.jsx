import React from "react";
import { DataGrid, useGridApiRef, GridToolbar } from "@mui/x-data-grid";
import Radio from "@mui/material/Radio";

import { Avatar, Button ,TextField} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { debounce } from "@mui/material/utils";

const VISIBLE_FIELDS = ["name", "email", "status", "role", "id"];

const rows = [
    { id: "STD-1", name: "Javier",  role:"Admin", email:"Javier@gmail.com", status:"active"},
    { id: "STD-2", name: "Kate",  role:"Manager", email:"Kate@gmail.com", status:"active"},
    { id: "STD-3", name: "Kim",  role:"Driver", email:"Kim@gmail.com", status:"active"},
    { id: "STD-4", name: "Juana",  role:"Product manager", email:"Juana@gmail.com", status:"active"},
    { id: "STD-5", name: "Prashant",  role:"Team leader", email:"Prashant@gmail.com", status:"active"},
    { id: "STD-6", name: "Junaid kumar",  role:"HR", email:"Junaid kumar@gmail.com", status:"active"},
    { id: "STD-7", name: "Mohan sukla",  role:"Quality resource", email:"Mohan sukla@gmail.com", status:"active"},
    { id: "STD-8", name: "Reshama",  role:"Product manager", email:"Reshama@gmail.com", status:"active"},
    { id: "STD-9", name: "Jenefer",  role:"Team member", email:"Jenefer@gmail.com", status:"active"},
    { id: "STD-10", name: "Jasawant",  role:"HR", email:"Jasawant@gmail.com", status:"active"},
];
const columns = [
    {
        field: "name",
        flex:1,
        headerName: "Name",
        renderCell: ({row}) => {
            return (
                <>
                    <div className="profile-avatar">
                        <Avatar />  <span className="ml-3">{row.name}</span>
                    </div>

                </>
            )
        }
    },
    {
        field: "id",
        flex:1,
        headerName: "STAFF ID"
    },
    {
        field: "role",
        flex:1,
        headerName: "ROLE",
       
    },
    {
        field: "email",
        flex:1,
        headerName: "EMAIL",
       
    },
    {
        field: "status",
        flex:1,
        headerName: "STATUS",
       
    }, {
        field: "action",

        headerName: "Action",
        width:250,
        renderCell: (params) => (
            <>
                <div className="actions">
                    <Button className="white-icon" variant="contained" style={{marginRight:10}} color="primary" startIcon={<VisibilityIcon />}>
                        View
                    </Button>
                    <Button variant="outlined" startIcon={<PersonIcon />}>
                        Contact
                    </Button>
                    </div>

            </>
        )

    }
];
export default function Table() {
    const [searchValue, setSearchValue] = React.useState("");

  

    const apiRef = useGridApiRef();

    const updateSearchValue =()=>{
        return debounce((newValue) => {
            apiRef.current.setQuickFilterValues(
                newValue.split(" ").filter((word) => word !== "")
            );
        }, 500);
    }

    function handleSearchValueChange(event) {
        const newValue = event.target.value;
        setSearchValue(newValue);
        updateSearchValue(newValue);
    }



    return (
        <>
            <div >
                <DataGrid
                    // sx={{ overflowX: 'scroll', overflowY: 'scroll' }}
                    rows={rows}
                    columns={columns}
                    apiRef={apiRef}
                    autoHeight
                    disableColumnFilter
                    disableColumnSelector
                    disableDensitySelector
                    columnBuffer={2}
                    columnThreshold={2}
                    components={{ Toolbar: GridToolbar }}
                    componentsProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                        },
                    }}
                    disableColumnMenu

                />
            </div>   
        
        </>
    );
}
