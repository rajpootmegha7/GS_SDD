import React, { Component } from 'react'
import { Messages } from 'primereact/messages';
import Header from '../../components/Header/Header'
import './style.css'
import { ListBox } from 'primereact/listbox';


export default class Planner extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        listdata: this.props.location.state,
        plantList:null,
      }
      

    }
    componentDidMount(){
        console.log(this.state.listdata)
        this.setState({plantList: this.state.listdata})
        this.messageNotification.show([
            { severity: 'warn', summary: 'Warning', detail: ' : No Plant Selections are made in the [Plants Enclyopedia]', sticky: true },
        ]);
    }

        

    render() {
        return (
            <div className='planner_container'>
                <Header pagename={'planner'}/>
                
                {this.state.plantList ?
                <div className='planner_desk'>
                    <div className='plant-list_menu' >
                        <h3>Listed {this.state.plantList.length} Plants</h3>
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
