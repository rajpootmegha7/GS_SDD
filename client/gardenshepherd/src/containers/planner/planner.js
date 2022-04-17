import React, { Component, useState } from 'react'
import Header from '../../components/Header/Header'
import './style.css'
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import Footer from '../../components/Footer/Footer';
import { Toast } from 'primereact/toast';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fragment } from 'react';

//This class component will contain all the details about the planner grid and save planner functinality based on the selected plants on planner.
export default class Planner extends Component {
    constructor(props) {
        super(props)

        this.state = {
            plantList: null,
            selectedPlant: { deletePlant, stoneBlock },
            saved_data: [{}]
        }
        this.onClickSavePlanner = this.onClickSavePlanner.bind(this);
        this.getSavedBoardForUser = this.getSavedBoardForUser.bind(this);
        this.onClickSavedBoard = this.onClickSavedBoard.bind(this);
    }

    componentDidMount() {
        if (this.props.location.state === undefined || this.props.location.state === null)
            this.setState({ plantList: null, selectedPlant: { deletePlant } })
        else
            this.setState({ plantList: [deletePlant, stoneBlock, ...this.props.location.state] })

        this.onClickSavedBoard()
    }

    //create the saved planner broad from backend data

    getSavedBoardForUser = () => {

        var saved_data_output = this.state.saved_data;
        var final_res = [];


        saved_data_output.forEach((row) => {
            final_res.push(<div className='square_blocks'><img src={row.src} alt={row.plname} height={100} width={100}/></div>)
        })

        return (
            saved_data_output.length === 1 ?
                <div>No Data</div>
                :
                <div className='plant-board_saved'>
                    <div className='planner_canvas'>
                        <div className='square_details'>
                            {final_res}
                        </div>
                    </div>
                </div>
        )

    }

    onClickSavedBoard() {
        var reqdata = { username: localStorage.getItem('username') }
        var request = new Request('http://localhost:4000/planner/api/get_planner', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(reqdata)
        });

        var that = this;
        this.retrieved_data = [];
        fetch(request)
            .then(function (response) {

                if (response.status === 400) throw new Error('Data Not Retrieved');
                response.json().then(function (res) {
                    // console.log(JSON.parse(res.data[0].plannerdata))
                    that.setState({ saved_data: JSON.parse(res.data[0].plannerdata) })
                })

                    .catch((err) => {
                        console.log('In catch1: ' + err.message);
                        that.setState({ plantData: null })
                    })
            })
            .catch(function (err) {
                console.log('In catch2: ' + err.message);
                that.setState({ plantData: null })
            });

        console.log('saved:', this.state.saved_data)

    }

    // popup messages to inform the user of the status of their login attempt
    showSuccess(message) {
        this.toast.show({ severity: 'success', summary: 'Success Message', detail: message, life: 3000 });
    }

    //Function to save planner grid into the database using json data objects.
    onClickSavePlanner() {

        const planner_html_object = document.querySelector('.square_details');
        const planner_data = [];

        // get all children of planner
        const childern = planner_html_object.childNodes;
        childern.forEach(li => {
            planner_data.push({ 'plname': li.firstElementChild.alt, 'src': li.firstElementChild.src });
        });
        console.log(planner_data);

        this.searchData = {
            user_name: localStorage.getItem('username'),
            data: JSON.stringify(planner_data)
        }

        var request = new Request('http://localhost:4000/planner/api/save_planner', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(this.searchData)
        });

        var that = this;
        fetch(request)
            .then(function (response) {

                if (response.status === 400) throw new Error('Data Not Saved');
                response.json().then(function (res) {
                    that.showSuccess('Sucessfully Saved Your Field.');
                })
                    .catch((err) => {
                        console.log('In catch1: ' + err.message);
                        that.setState({ plantData: null })
                    })
            })
            .catch(function (err) {
                console.log('In catch2: ' + err.message);
                that.setState({ plantData: null })
            });

    }


    render() {
        return (
            <div>
                <Toast ref={(el) => this.toast = el} />
                <div className='planner_container'>
                    <Header pagename={'planner'} />

                    <TabView className="tabview-header-icon">
                        <TabPanel data-testid="tabpanel-test" header="Active Board">
                            {this.state.plantList ?
                                <div className='planner_desk'>
                                    <div className='plant-list_menu' >
                                        <h3>Listed {this.state.plantList.length - 1} Plants</h3>
                                        <ListBox value={this.state.selectedPlant} options={this.state.plantList}
                                            onChange={(e) => this.setState({ selectedPlant: e.value })}
                                            optionLabel="name" style={{ width: '15rem' }} listStyle={{ maxHeight: '40em' }} filter />
                                        <Button className='btn-saveplanner' onClick={this.onClickSavePlanner}>Save Field</Button>
                                    </div>

                                    <div className='plant-board'>
                                        <div className='planner_canvas'>
                                            <Board number_blocks={this.state.inputgrid} selectedPlant={this.state.selectedPlant}></Board>
                                        </div>
                                    </div>

                                </div>
                                :
                                <div className='msg_container'>
                                    <p data-testid="planner-test">No Selection Made on the Encyclopedia</p>
                                </div>
                            }
                        </TabPanel>
                        <TabPanel header="Saved Board" rightIcon="pi pi-save" >
                            <Button className='save_board_btn' onClick={this.onClickSavedBoard}>Update Your Field</Button>
                            <div className='saved_container'>
                                {this.getSavedBoardForUser()}
                            </div>

                        </TabPanel>
                    </TabView>

                </div>
                <Footer />
            </div>

        )
    }
}
const deletePlant = { code: '_00', name: 'Deselect', desc: '', image: 'https://www.familyhandyman.com/wp-content/uploads/2021/12/GettyImages-1308444411.jpg' }
const stoneBlock = { code: '_99', name: 'Occupied Space', desc: '', image: 'https://wallpaperaccess.com/full/4234476.jpg' }

//Function to save the plant id details in the image tag under the list.
function Plant(plantId) {
    return (<img src={plantId.plantId.image} alt={plantId.plantId.name} code={plantId.plantId.code} height={100} width={100} />)
}
//Function to set the plants and children over the square grid boxes.
function Square({ selectedPlant, children }) {

    const [square, setSquare] = useState({
        children: children
    })

    //Function to handle the click functionality to place plants over grid.
    function handleClick() {
        if (selectedPlant.selectedPlant === null || selectedPlant.selectedPlant === undefined) return;
        updateChild(<Plant plantId={selectedPlant.selectedPlant} />);
    }

    const updateChild = (child) => {
        setSquare(previousState => {
            return { ...previousState, children: child }
        });
    }
    const slotValue = square.children === undefined ?
        <img src={deletePlant.image} alt={deletePlant.name} code={deletePlant.code} height={100} width={100} />
        :
        square.children;

    return (<div className='square_blocks' onClick={handleClick}> {slotValue}</div>)
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
        <div className='square_details'>
            {squares}
        </div>
    )


}

