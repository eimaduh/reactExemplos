import React from 'react';
import Movies from './Movies';


class Movieslist extends React.Component {

    emitAlert(){
        alert('Você cliclou na div')
    }

    changeToGray(){
        document.getElementById('list').style.color = 'gray';
    }

    changeToBlack(){
        document.getElementById('list').style.color = 'black';
    }

    render() {
        return(
            <div id='list'
            onClick = { this.emitAlert }
            onMouseOver = { this.changeToGray }
            onMouseOut = { this.changeToBlack }
            >
                <Movies title='Matrix' score={10} genres={['Ficção']}/>
                <Movies title='Star Wars 8' score={6} genres={['Ficção', 'Ação']}/>
                <Movies title='Shark' score={3} genres={['Ficção', 'Ação']}/>

            </div>
        )
    }
}

export default Movieslist