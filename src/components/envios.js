import React, {Component} from 'react';

const data =[{
    fecha: 'Monday 10th 2:28 PM',
    lugarE: 'Houston, TX, 33619',
    lugarL: 'Atlanta, GA, 30123',
    precio: 2500.00, 
},
{
    fecha: 'Monday 10th 2:28 PM',
    lugarE: 'Houston, TX, 33619',
    lugarL: 'Atlanta, GA, 30123',
    precio: 2500.00, 
},
{
    fecha: 'Monday 10th 2:28 PM',
    lugarE: 'Houston, TX, 33619',
    lugarL: 'Atlanta, GA, 30123',
    precio: 2500.00, 
}]

class Enviar extends Component{
    constructor() {
        super();
        this.state = {
            data
       } 
    }  
        render() {
            const data = this.state.data.map((data, i) => {
                return(
                    <div className="row">
                        <div className="col-md-2 ml-3 mt-5">
                            <i class="material-icons check">
                                check_circle
                            </i>
                        </div>
                        <div className="card col-md-9 mt-4">
                        <div className="row">
                            <div className="col-md-2 envio2">
                                <br/>
                                {data.fecha}
                            </div>

                            <div className="col-md-4 envio2">
                                {data.lugarE}
                            <br/>
                            <i className="material-icons fontEnv">
                                expand_more
                            </i>
                            <br/>
                                {data.lugarL}
                            </div>
                            <div className="col-md-2 envio2">
                                <br/>
                                <i class="material-icons fontEnv1">
                                    airport_shuttle
                                </i>
                            </div>
                            <div className="col-md-2 envio3">
                                <br/>
                                <p>${data.precio}</p>
                            </div>
                            <div className="col-md-2 envio2">
                                <br/>   
                                <button type="button" class="btn btn-danger btn1">1</button>
                                <i class="material-icons punto">
                                    more_vert
                                </i>
                            </div>
                        </div>
                    </div> 
                </div>      
            )
        })
        return(
            <div>
                <div className="row">
                    <div className="col-md-1 mt-3">
                        <i class="material-icons check">
                            check_circle
                        </i>
                    </div>
                        <div className="col-md-11 mt-3">
                            <input className="form-control search" type="search" placeholder="Search"/>
                        </div>
                    {data}
                </div>
                    <div className="">
                    <i className="material-icons add">
                        add_circle 
                    </i>
                    </div>
            </div>
        )
        }
}
export default Enviar;