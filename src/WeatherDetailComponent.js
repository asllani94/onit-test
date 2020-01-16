import React from "react"
import DataTable from 'react-data-table-component';
import { timeStampToDateString } from "./utils";
import { getWeatherDataForCity } from "./weatherService"
import { DEFAULT_TABLE_ELEMENTS_PER_PAGE, USE_PAGINATION_ON_TABLE } from "./config";

class WeatherDetailComponent extends React.Component{

    constructor(props){ 
        super(props)
        this.state = {
          columnDefs: [
            {
              name: 'Date',
              selector: 'dt',
              sortable:true,
              cell: row => 
              <p>{ timeStampToDateString(row.dt) }</p>
            },
            {
              name: 'Weather',
              cell: row => 
              <div>
                <img src={`http://openweathermap.org/img/wn/${row.weather[0].icon}.png`}/>
                <p style={{textAlign:"center"}}>{row.weather[0].main}</p>
              </div>,
            },
            {
              name: 'Max Temperature',
              selector: 'temp.max',
              sortable:true,
              cell: row => 
              <div>{`${row.temp.day} C`}</div>
            },
            {
              name: 'Min Temperature',
              selector: 'temp.min',
              sortable:true,
              cell: row => 
              <div>{`${row.temp.night} C`}</div>
            },
            {
              name: 'Humidity',
              selector: 'humidity',
              sortable: true,
              cell: row => 
              <div>{`${row.humidity} %`}</div>
            },
            {
              name: 'Wind',
              selector: 'speed',
              sortable:true,
              cell: row => 
              <div>{`${row.speed} km/h`}</div>
            },
            
          
          ],
          rowData: []
        }
     
        this.fetchCityWeatherData.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (this.props.selectedCityId !== prevProps.selectedCityId && this.props.selectedCityId) {
        this.fetchCityWeatherData(this.props.selectedCityId);
      }
     }

    fetchCityWeatherData(cityId){
      getWeatherDataForCity(cityId, 10).then(weatherData => this.setState({rowData: weatherData}))
    }
    

    render(){
        return(
        <div> 
        <DataTable
          columns={this.state.columnDefs}
          data={this.state.rowData}
          pagination = { USE_PAGINATION_ON_TABLE }
          paginationPerPage = { DEFAULT_TABLE_ELEMENTS_PER_PAGE }
        />
        </div>
        )
    }

}

export default WeatherDetailComponent