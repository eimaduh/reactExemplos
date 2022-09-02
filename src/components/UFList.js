import React, { Component } from 'react';
import '../assets/css/ufs.css';

class UFList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            UFs : []
        }
    }

    componentDidMount(){
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
        .then(response => response.json())
        .then(data => {
            this.setState(()=> {
                return {UFs: data}
            })
        })
        
    }

    render() {
        return(
            <div className="container">
                <h3>Unidades Federativas do Brasil:</h3>
                {
                    this.state.UFs.map( UF => {
                        return(
                            <p key={UF.id}> {UF.nome} </p>
                        )
                    })
                }
            </div>
                
        )
    }
}

export default UFList;