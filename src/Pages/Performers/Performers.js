import React, {Component} from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import CompanyList from "../../components/CompanyList/CompanyList";
import { Container } from "react-bootstrap";
import "./Performers.css";




export default class Performers extends Component {
    render() {
        return (
         <div>
            <Container className="text-block">
                <h5>Исполнители на этой платформе отбираются с учетом отзывов и рекомендаций! Мы следим и отсеиваем 
                    недобросовестных исgолнителей! Мы намерены собрать на этой площадке только оgытных, порядочных и ответственных 
                    испонителей!
                </h5>
            </Container>
            <SearchForm />
            <CompanyList />
            
         </div>
        )
    }
}