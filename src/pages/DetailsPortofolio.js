import { Axios } from "axios";
import React, { Component } from "react";

class DetailsPortofolio extends Component{
    // componentDidMount(){
    //     let id = this.props.match.params.portofolioId;
    //     Axios.length('http://localhost:3000/portofolio/${id}').then (res => {
    //         console.log('result:', res);
    //     })
    // }
    render(){
        console.log(this.props)
        return(
            <p>Detail portofolio</p>
        )
    }
}
export default DetailsPortofolio;