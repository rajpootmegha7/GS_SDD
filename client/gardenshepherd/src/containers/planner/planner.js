import React, { Component, useState } from 'react'
import { Messages } from 'primereact/messages';
import Header from '../../components/Header/Header'
import './style.css'
import { ListBox } from 'primereact/listbox';

import testimg from '../../images/leaf.jpg'
const deletePlant = {code:'', name:'Delete', desc:'', image:'https://preview.redd.it/ih6no69aj90y.png?auto=webp&s=8e4f9101f58e0812f3625a51ec65c9b7c050da75'}

function Plant(plantId){
    console.log("Plant:",plantId.plantId)
    // const plId = ''
    // console.log(code)
    // if(typeof(plantId) !== 'undefined' && plantId != null)
    //     plId = plantId.plantId
    // else
    //     code = ''
    // const code = plantId ? plantId.plantId : ''
    // return (<span>
    //     {plantId.plantId.name}
    // </span>
    // )
   return (<div>
        <img src={plantId.plantId.image} alt={plantId.plantId.name} height={100} width={100} />
    </div>)
}


function Square({ selectedPlant, children}) {
    console.log("Square:",selectedPlant)
    // const [, drop] = useDrop(
    //     () => ({
    //         accept: 'plant',
    //         drop: () => {
            
    //         updateChild(<Plant/>)
    //       }
    //     }),
    //   )

    // const fill = black ? 'black' : 'white'
    // const stroke = black ? 'white' : 'black'
    const [square, setSquare] = useState({
        children: children})


    function handleClick(){
        updateChild(<Plant plantId = {selectedPlant.selectedPlant} />);
        return;
    }
    const updateChild = (child) => {
        console.log('hello')
        setSquare(previousState => {
            return { ...previousState, children:child }
        });
    }
    
        return (    
        <div   
            onClick={handleClick}
            
            // ref={drop}
            style={{
                backgroundColor: 'white',
                color: 'black',
                width: '100px',
                height: '100px'
            }}
        >
            {square.children}
        </div>
    )
}
// function Square({ black, children }) {
//     const fill = black ? 'black' : 'white'
//     const stroke = black ? 'white' : 'black'

//     // handleClick(){
//     //     updateChild()
//     // }
//     return (
//         <div 
//             // onClick={handleClick}
//             style={{
//                 backgroundColor: fill,
//                 color: stroke,
//                 width: '100px',
//                 height: '100px'
//             }}
//         >
//             {children}
//         </div>
//     )
// }

function renderSquare(i, selectedPlant) {

    return (
        <div key={i} style={{ width: '25%', height: '25%' }}>
            <Square white selectedPlant={selectedPlant}> </Square>
        </div>
    )
}

function Board(selectedPlant) {
    const squares = []
    for (let i = 0; i < 16; i++) {
        squares.push(renderSquare(i, selectedPlant))
    }

    if(typeof(squares[0].selectedPlant) !== 'undefined' && squares[0].selectedPlant !== null)
        console.log(squares[0].selectedPlant.code)
    return (
        <div
            style={{
                width: '400px',
                height: '400px',
                display: 'flex',    
                flexWrap: 'wrap'
            }}
        >
            {squares}
        </div>
    )
}

export default class Planner extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            listdata: this.props.location.state,
            plantList: null,
            selectedPlant: {deletePlant}
        }
        
        

    }
    componentDidMount() {
        console.log(this.state.listdata)
        this.setState({ plantList: [deletePlant,...this.state.listdata] })
        this.messageNotification.show([
            { severity: 'warn', summary: 'Warning', detail: ' : No Plant Selections are made in the [Plants Enclyopedia]', sticky: true },
        ]);
    }


    render() {
        console.log(this.state.selectedPlant);
        return (
            <div className='planner_container'>
                <Header pagename={'planner'} />

                <div className='planner_canvas'>
                    <Board selectedPlant = {this.state.selectedPlant}></Board>
                </div>

                {this.state.plantList ?
                    <div className='planner_desk'>
                        <div className='plant-list_menu' >
                            <h3>Listed {this.state.plantList.length-1} Plants</h3>
                            <ListBox value={this.state.selectedPlant} options={this.state.plantList}
                                onChange={(e) => this.setState({ selectedPlant: e.value })}
                                optionLabel="name" style={{ width: '15rem' }} />
                        </div>

                    </div>
                    :
                    <div className='msg_container'>
                        <Messages ref={(el) => this.messageNotification = el} />
                    </div>
                }


            </div>
        )
    }
}
