import React, {Component} from 'react';
import './../index.css';
import logo from './../imagenes/logo.png';

class Menu extends Component {
    constructor() {
        super();
    }
        render() {
            return(
                <div className="menu mt-4">
                    <img src={logo} className="logo" alt="logo" />
                    <p> <i class="material-icons fonts">
                        wb_incandescent
                    </i>
                        Smart Filters
                    </p>
                    <hr/>
                    <div className="row">
                        <div className="col">
                            <i className="material-icons font">
                            new_releases
                            </i>
                        </div>
                        <div className="col md-2">
                            <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <i className="material-icons font">
                            calendar_today
                            </i>
                        </div>
                        <div className="col md-2">
                            <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <i className="material-icons font">
                            favorite_border
                            </i>
                        </div>
                        <div className="col md-2">
                            <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <hr/>
                    <p>Status</p>
                    <input className="form-control mr-10 " type="search" placeholder="Search"/>
                    <button type="button" class="btn btn-light mt-3 delivered" type="submit">DELIVERED</button>
                </div>
            )
        }
}
export default Menu;

