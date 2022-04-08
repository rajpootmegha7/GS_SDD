import React, { Component, useState } from 'react'
import Header from '../../components/Header/Header'
import './style.css'
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import Footer from '../../components/Footer/Footer';

//This class component will contain all the details about the planner grid and save planner functinality based on the selected plants on planner.
export default class Planner extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            plantList: null,
            selectedPlant: {deletePlant,stoneBlock},
            inputgrid: 20,
        }
        this.onClickSavePlanner = this.onClickSavePlanner.bind(this);
    }

    componentDidMount() {
        if(this.props.location.state === undefined || this.props.location.state === null) 
            this.setState({plantList: null, selectedPlant: {deletePlant}})
        else
            this.setState({ plantList: [deletePlant,stoneBlock,...this.props.location.state] })
    }
//Function to save planner grid into the database using json data objects.
    onClickSavePlanner(){

        const planner_html_object = document.querySelector('.square_details');
        const planner_data = [];

        // get all children of planner
        const childern = planner_html_object.childNodes;
        childern.forEach(li => {
            planner_data.push({'plname': li.firstElementChild.alt, 'src': li.firstElementChild.src});
        });
        console.log(planner_data);
    }


    render() {
        return (
            <div>
                <div className='planner_container'>
                <Header pagename={'planner'} />
                
                {this.state.plantList ?
                    <div className='planner_desk'>
                        <div className='plant-list_menu' >
                            <h3>Listed {this.state.plantList.length-1} Plants</h3>
                            <ListBox value={this.state.selectedPlant} options={this.state.plantList}
                                onChange={(e) => this.setState({ selectedPlant: e.value })}
                                optionLabel="name" style={{ width: '15rem' }} listStyle={{ maxHeight: '40em' }} filter />
                            <Button className='btn-saveplanner' onClick={this.onClickSavePlanner}>Save Field</Button>
                        </div>
                        {/* <div className="grid">
                            <div className="field col-12 md:col-3">
                                <label htmlFor="vertical" style={{display: 'block'}}>Vertical</label>
                                <InputNumber inputId="vertical" value={this.state.inputgrid} onValueChange={(e) => this.setState({inputgrid: e.value})} mode="decimal" showButtons buttonLayout="vertical" style={{width: '4rem'}}
                                    decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                            </div>
                        </div> */}
                        
                        <div className='plant-board'>
                            {/* <div className="field col-12 md:col-3">
                                <InputNumber inputId="ipblocks" value={this.state.inputgrid} onValueChange={(e) => this.setState({inputgrid: e.value})}  suffix=" blocks to grid." />
                            </div> */}
                            <div className='planner_canvas'>
                                
                                <Board number_blocks ={this.state.inputgrid} selectedPlant = {this.state.selectedPlant}></Board>
                            </div>
                        </div>

                    </div>
                    :
                    <div className='msg_container'>
                        <p>No Selection Made on the Enclyopedia</p>
                    </div>  
                }
            </div>
            <Footer/>
            </div>
            
        )
    }
} //https://preview.redd.it/ih6no69aj90y.png?auto=webp&s=8e4f9101f58e0812f3625a51ec65c9b7c050da75'
const deletePlant = {code:'_00', name:'Deselect', desc:'', image:'https://www.familyhandyman.com/wp-content/uploads/2021/12/GettyImages-1308444411.jpg'}
const stoneBlock = {code:'_99', name:'Occupied Space', desc:'', image:'https://wallpaperaccess.com/full/4234476.jpg'}
const inputgrid_ = '25';
//Function to save the plant id details in the image tag under the list.
function Plant(plantId){
    return (<img src={plantId.plantId.image} alt={plantId.plantId.name} code={plantId.plantId.code} height={100} width={100} />)
 }
 //Function to set the plants and children over the square grid boxes.
 function Square({ selectedPlant, children}) {
     
     const [square, setSquare] = useState({
         children: children})
 
 //Function to handle the click functionality to place plants over grid.
     function handleClick(){
         if(selectedPlant.selectedPlant === null || selectedPlant.selectedPlant === undefined) return;
         updateChild(<Plant plantId = {selectedPlant.selectedPlant} />);
     }

     const updateChild = (child) => {
         setSquare(previousState => {
             return { ...previousState, children:child }
         });
     }
     const slotValue = square.children === undefined ? 
                                         <img src={deletePlant.image} alt={deletePlant.name} code={deletePlant.code} height={100} width={100} />
                                         :
                                         square.children;
 
     return(
             <div className='square_blocks'  onClick={handleClick} style={{
                 'background-color': 'black',
                 'color': 'black',
                 'width': '100px',
                 'height': '100px'}}> {slotValue} 
             </div>
 
     )
 }
 //function to render the squares over the grid.
 function renderSquare(i, selectedPlant) {
 
     return (<Square white selectedPlant={selectedPlant} />)
 }
 //function to set the board to place the squares.
 function Board(selectedPlant) {
     const squares = []
     for (let i = 0; i < 64; i++) {
         squares.push(renderSquare(i, selectedPlant))
     }
 
     return (
         <div className='square_details'
             style={{
                 height: 'auto',
                 display: 'flex',    
                 flexWrap: 'wrap'
             }}
         >
             {squares}
         </div>
     )
 
     
 }
 
