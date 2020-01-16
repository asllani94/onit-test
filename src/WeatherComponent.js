import React from "react"
import WeatherDetailComponent from './WeatherDetailComponent';
import FilterComponent from './FilterComponent';
import { getCities } from './weatherService'
import { cityTransformerForSearchBox } from "./transformers";

class WeatherComponent extends React.Component{

    constructor(props){
        super(props)
        
        this.state={
            cities:[],
            selectedCityId: undefined
        }

        this.onSelectCityIdChange = this.onSelectCityIdChange.bind(this)
    }

    componentDidMount() {
        getCities().then(cities => {
           this.setState({cities: cityTransformerForSearchBox(cities)})
        })
      }


    onSelectCityIdChange(selectedCityId) {
        this.setState({
            selectedCityId: selectedCityId
        });
    }

    render(){
        return(
            <div id="weather-div">
                <FilterComponent cities={this.state.cities} onSelectCityIdChange = {this.onSelectCityIdChange}/>
                <WeatherDetailComponent selectedCityId={this.state.selectedCityId}/>
            </div>
            
        )
    }
}

export default WeatherComponent