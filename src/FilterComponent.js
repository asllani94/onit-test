import React from "react"
import ReactSearchBox from 'react-search-box'


class FilterComponent extends React.Component{


    render(){
        return(
            <ReactSearchBox
            placeholder="Search city..."
            data = {  this.props.cities}
            onSelect = { (selectedOption)=> {   
                if( selectedOption.key){
        
                    this.props.onSelectCityIdChange(selectedOption.key)}
                }
            }
          />
        )
         
    }
}


export default FilterComponent