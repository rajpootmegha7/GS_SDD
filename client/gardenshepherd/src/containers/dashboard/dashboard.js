import React, { Component} from 'react'
import { Link} from "react-router-dom";
import Header from '../../components/Header/Header'
import './style.css'

import { Parallax } from 'react-parallax';
import image_p1 from '../../images/leaf.jpg'
import image_p2 from '../../images/mint.jpeg'

import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Footer from '../../components/Footer/Footer';

// Class which contains all the details about the search functionality and filters.

export default class dashboard extends Component {
constructor(props){
    super(props)
    this.state ={
            plantName:'',
            plantData:[],
            isVisibleTable: false,
            selectedPlants: null,
            plantType: null,
            season: null,
            location: null,
    }
    this.clickSearchPlant = this.clickSearchPlant.bind(this);
    this.imageBodyTemplate = this.imageBodyTemplate.bind(this);
    this.showmsg = this.showmsg.bind(this);
    this.onPlantTypeChange = this.onPlantTypeChange.bind(this);
    this.onSeasonChange = this.onSeasonChange.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);

    this.plantType=[
        {name: 'Vegetable', code:'veg156'},
        {name: 'Fruit', code:'fru156'},
        {name: 'Herb', code:'her156'},
        {name: 'Flower', code:'flo156'},
    ]

    this.season=[
        {name: 'Winter', code:'win157'},
        {name: 'Fall', code:'fal157'},
        {name: 'Spring', code:'spr157'},
        {name: 'Summer', code:'sum157'},
    ]

    this.location=[
        {name: '1', code:'n1'},
        {name: '2', code:'n2'},
        {name: '3', code:'n3'},
        {name: '4', code:'n4'},
        {name: '5', code:'n5'},
        {name: '6', code:'n6'},
        {name: '7', code:'n7'},
        {name: '8', code:'n8'},
        {name: '9', code:'n9'},
        {name: '10', code:'n10'},
        {name: '11', code:'n11'},
        {name: '12', code:'n12'},
        {name: '13', code:'n13'}
    ]


    this._plantdata = [
        {code:1, desc: "With its stately upright foliage that almost looks artificial, the snake plant (also called mother-in-law’s tongue) adds great architectural form to a room and complements all styles of decor.", name: 'Snake Plant', image:'https://www.almanac.com/sites/default/files/users/The%20Editors/snake_plant_sansevieria_trifasciata_laurentii_mokkie-wc_full_width.jpg',plant_spacing: 2, water_schedule:3},
        {code:2, desc: "Whether you choose upright or trailing/climbing types, philodendrons are one of the easiest houseplants you can possibly grow. You can train them up a trellis or simply leave them to their own devices; philodendrons will survive no matter what.", name: 'Philodendron', image:'https://cdn.shopify.com/s/files/1/0812/7647/products/Screenshot2020-04-2717.05.28.png?v=1625306899',plant_spacing: 4, water_schedule:5}]
}
componentDidMount(){
    this.setState({plantData: this._plantdata});
}
// Function to show message about selected plants.
showmsg=(event)=>{
    console.log("Dashboard" + this.state.selectedPlants);

}
//Dropdown - Plant type change about the details of the plants based on values.
onPlantTypeChange=(e)=>{
    this.setState({plantType:e.value})
}
//Dropdown - Season change as per the 4 values present in database - Fall, Spring, Summer, Winter
onSeasonChange=(e)=>{
    this.setState({season:e.value})
}
//Dropdown - location values on the search.
onLocationChange=(e)=>{
    this.setState({location:e.value})
}
//Function to search the plants and send the post request to the database to fetch the details.
clickSearchPlant=(event)=>{
    event.preventDefault();
    if(this.state.plantName === '' && this.state.plantType === null && this.state.season === null && this.state.location === null){
        alert('No Options Selected');
        return;
    }
    this.searchData = {
        _plantname: this.state.plantName,
        _planttype: this.state.plantType ? this.state.plantType.name: null,
        _plantseason: this.state.season ? this.state.season.name: null,
        _plantlocation: this.state.location ? this.state.location.name: null,
    }
    var request = new Request('http://localhost:4000/dashboard/api/search_plant', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(this.searchData)
        });

    var that = this;
    this._plantInfo = [];
    fetch(request)
        .then(function (response) {
            
            response.json().then(function (res) {

                res.data.forEach(row =>{
                    console.log(row)
                    that._plantInfo.push({code: row.plant_id, 
                        desc: row.description,
                        name: row.plant_name,
                        image: row.image,
                        plant_spacing: row.plant_spacing,
                        water_schedule: row.water_schedule,

                    })
                })
                that.setState({plantData: that._plantInfo})

            })
            .catch((err)=>{
                console.log('In catch1: '+ err.message);
                that.setState({plantData: null})
            })
        })
        .catch(function (err) {
            console.log('In catch2: ' + err.message);
            that.setState({plantData: null})
        });

}
imageBodyTemplate=(rowData)=>{
    console.log(rowData.image);
    return(<img src={rowData.image}
    onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} 
    alt="" className="product-image" />);
}
//Function to display the data over the rows for each plant in table.
rowPlantDescription=(rowData)=>{
    return(
    <div className='plant_card'>
        <div className='plant_name'>{rowData.name}</div>
        <p className='plant_desc'>{rowData.desc}</p>
        <div className='plant_req'>
            <div className='plant_label'>plant spacing {rowData.plant_spacing} ft square</div>
            <div className='plant_label'>water schedule every {rowData.water_schedule} days</div>
        </div>
        
    </div>
    );
}
//Function to display the default values on the search page.
onClickDefault = (e)=>{
    e.preventDefault();
    this.setState({
        season: null,
        plantType: null,
        plantName:'',
        location: null,
        plantData: this._plantdata
    })
}


    render() {

        const footer = `Total ${this.state.plantData ? this.state.plantData.length : 0} plants found.`;

        return (
            <div>
                <div className='dashboard_container'>
                <Header pagename={'dashboard'} plants_data={this.state.selectedPlants}/>
                <Parallax bgImage={image_p1} strength={500}>
                    <div className='search_text'> 
                        <div id='st-0'>Hi {localStorage.getItem('username')},</div>
                        <div id='st-1'>
                            your search for plants begins here..
                        </div>
                    </div>
                </Parallax>

                <Parallax bgImage={image_p2} strength={-500}   > 
                    <div className='search_text'>
                        <div id='st-2'>choose your filters</div>
                    </div>
                </Parallax>
                <div className='search_filter_cont'>
                    <InputText id="drop-1" placeholder='Enter Plant Name'
                        value={this.state.plantName}
                        onChange={(e) => this.setState({ plantName: e.target.value })} />

                    <Dropdown id='drop-2' placeholder='Select Plant Type'
                    value={this.state.plantType}
                    options={this.plantType} 
                    onChange={this.onPlantTypeChange} 
                    optionLabel="name">Plant Type</Dropdown>

                    <Dropdown id='drop-3' placeholder='Select Seasons'
                    value={this.state.season}
                    options={this.season} 
                    onChange={this.onSeasonChange} 
                    optionLabel="name">Seasons</Dropdown>

                    <Dropdown id='drop-4' placeholder='Select Location'
                    value={this.state.location}
                    options={this.location} 
                    onChange={this.onLocationChange} 
                    optionLabel="name">Location</Dropdown>
                    
                </div>
                <div className='btn_container'>
                    <Button id="button_submit" label="Search" icon="pi pi-search"
                    iconPos="right" onClick={this.clickSearchPlant}/>
                    <Button id="button_default" label="Default Settings" onClick={this.onClickDefault}/>
                </div>


                <DataTable value={this.state.plantData} footer={footer} responsiveLayout="scroll"
                selection={this.state.selectedPlants} onSelectionChange={(e) => this.setState({ selectedPlants: e.value })}>
                    <Column header="Image" body={this.imageBodyTemplate}></Column>
                    <Column header="Description" body={this.rowPlantDescription}></Column>
                    <Column selectionMode="multiple" headerStyle={{ width: '10em' }} exportable={false}></Column>
                </DataTable>
                <div className='planner_btn_card'>
                    <Button className='planner_btn'>
                        <Link className='planner-link' to={{
                            pathname: '/gs/planner',
                            state: this.state.selectedPlants}}>Add To Planner
                        </Link>
                    </Button>
                </div>
                
                    
                
  
                </div>
                <Footer/>

            </div>
        )
    }
}
