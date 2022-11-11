import { Button, Grid, List, CardContent,Card } from '@mui/material';
import './App.css';
import Sidebar from './components/Sidebar';
import Table from './components/Table';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
// import {FilterListIcon} from '@mui/icons-material';
import SortIcon from '@mui/icons-material/Sort';
function App() {
  
  return (
    <>
      <div className="main-wrapper">
        <section className="outer-wrapper">
          <Grid container spacing={3}>
            <Grid item xxl={3} xl={3} lg={3} md={3} sm={3} xs={12} >
              <Sidebar />
            </Grid>
            <Grid item xxl={9} xl={9} lg={9} md={9} sm={9} xs={12} >
              <div className="content-wrapper">
               <div className="common-content">
                  <div className="header-title">
                    <h3>Manage Staff</h3>
                  </div>
                  <div className="breadscrum">
                    <ul className='list-item'>
                      <li className='active'>Manage Staff &nbsp; > &nbsp;</li>
                      <li>Staff Listing</li>
                    </ul>
                  </div>
               </div>
                <div className="toolbar-containr">
                  <div className="sear-section">
                    <Paper
                      component="form"
                      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, backgroundColor: '#E9F1F0'}}
                    >
                      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                      </IconButton>
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        
                        placeholder="Search by Scan/Report ID, Batch Number..."
                        inputProps={{ 'aria-label': 'Search by Scan/Report ID, Batch Number...' }}
                      />
                    </Paper>
                  </div>
                  <div className="tools">
                <div className="button-group">
                      <Button className='mr-2' variant="outlined" size="large">
                        <GridViewOutlinedIcon />
                      </Button>
                      <Button className='mr-2' variant="contained" size="large" color='primary'>
                        <SortIcon style={{color:"white"}} />
                      </Button>
                      {/* <Button variant="outlined" startIcon={<FilterListIcon />}>
                        Sort by
                      </Button> */}
                      <Button className='mr-2' variant="outlined" size="large"  color="primary">
                        Sort by
                      </Button>
                      <Button variant="contained" size="large"  color="primary">
                        Invited Staff Listing
                      </Button>
                      </div>
                  </div>
                  
                </div>
                <div className="table-container">
                  <Card>
                    <CardContent>
                      <Table  />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Grid>
          </Grid>
        </section>
      </div>
    </>
  );
}

export default App;
