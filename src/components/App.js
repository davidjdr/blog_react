import React, { Component } from 'react';

class App extends Component {
  
  ponerFilas = () => [
      <tr>
        <td>
          Rodolfo
        </td>
        <td>
          rodolfo@saldivar.com
        </td>
        <td>
          Rodolfo.com
        </td>
      </tr>,
      <tr>
        <td>
          Platzi
        </td>
        <td>
          platzi@platzi.com
        </td>
        <td>
          platzi.com
        </td>
      </tr>
  ]
  
  render () {
    return (
      <div className='margen'>
        <table className='tabla'>
          <thead>
            <tr>
              <th>
                Nombre
              </th>
              <th>
                Correo
              </th>
              <th>
                Enlace
              </th>
            </tr>
          </thead>
          <tbody>
            { this.ponerFilas() }
          </tbody>
        </table>
      </div>
        
    );
  }
}

export default App;
