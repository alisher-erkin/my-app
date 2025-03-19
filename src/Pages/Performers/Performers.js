import React, {Component} from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import CompanyList from "../../components/CompanyList/CompanyList";




export default class Performers extends Component {
    render() {
        return (
         <div>
           
            <SearchForm />
            <CompanyList />
            
         </div>
        )
    }
}