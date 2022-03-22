import React, { Component, Fragment } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './style.css'
import { Parallax } from 'react-parallax';
import image_p1 from '../../images/leaf.jpg'
import image_p2 from '../../images/mint.jpeg'
import test from '../../images/plants/snake_plant.jpeg'
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



export default class dashboard extends Component {
constructor(props){
    super(props)
    this.state ={
            plantName:'',
            plantData:[],
            isVisibleTable: false,
            selectedPlants: null,
    }
    this.clickSearchPlant = this.clickSearchPlant.bind(this);
    this.imageBodyTemplate = this.imageBodyTemplate.bind(this);


    this._plantdata = [{id:1, desc: "With its stately upright foliage that almost looks artificial, the snake plant (also called mother-in-law’s tongue) adds great architectural form to a room and complements all styles of decor.", name: 'Snake Plant', image:'https://www.almanac.com/sites/default/files/users/The%20Editors/snake_plant_sansevieria_trifasciata_laurentii_mokkie-wc_full_width.jpg'},
    {id:2, desc: "Whether you choose upright or trailing/climbing types, philodendrons are one of the easiest houseplants you can possibly grow. You can train them up a trellis or simply leave them to their own devices; philodendrons will survive no matter what.", name: 'Philodendron', image:'https://cdn.shopify.com/s/files/1/0812/7647/products/Screenshot2020-04-2717.05.28.png?v=1625306899'}]
}
componentDidMount(){
    this.setState({plantData: this._plantdata});
}

clickSearchPlant=(event)=>{
    event.preventDefault();
    // alert(this._plantdata[1].desc);
    this.setState({plantData: null})
}
imageBodyTemplate=(rowData)=>{
    console.log(rowData.image);
    return(<img src={rowData.image} 
    onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} 
    alt={rowData.image} className="product-image" />);
}

rowPlantDescription=(rowData)=>{
    return(
    <div className='plant_card'>
        <div className='plant_name'>{rowData.name}</div>
        <p className='plant_desc'>{rowData.desc}</p>
    </div>
    );
}


    render() {

        const footer = `In total there are ${this.state.plantData ? this.state.plantData.length : 0} plants.`;

        return (
            <div>
                
                <div className='dashboard_container'>
                <Header pagename={'dashboard'}/>
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
                        <Dropdown id='drop-2' placeholder='Select Plant Type'>Plant Type</Dropdown>
                        <Dropdown id='drop-3' placeholder='Select Seasons'>Seasons</Dropdown>
                        <Dropdown id='drop-4' placeholder='Select Location'>Location</Dropdown>
                        
                    </div>
                    <div className='btn_container'>
                        <Button id="button_submit" label="Search" icon="pi pi-search"
                        iconPos="right" onClick={this.clickSearchPlant}/>
                    </div>


                   <DataTable value={this.state.plantData} footer={footer} responsiveLayout="scroll"
                   selection={this.state.selectedPlants} onSelectionChange={(e) => this.setState({ selectedPlants: e.value })}>
                        <Column header="Image" body={this.imageBodyTemplate}></Column>
                        <Column header="Description" body={this.rowPlantDescription}></Column>
                        <Column selectionMode="multiple" headerStyle={{ width: '10em' }} exportable={false}></Column>
                    </DataTable>


                    
                    
                    

                    <Footer />
                </div>

            </div>
        )
    }
}

