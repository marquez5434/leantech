import React, {Component} from 'react';

class NavBars extends Component{
    constructor(){
        super();
    }
        render(){
            return(
                <div className="navbars mt-5">
                    <nav class="nav nav-pills nav-fill">
                    <a class="nav-item nav-link activ edit" href="#"> 
                    <i class="material-icons fontNav">
                    home
                    </i>
                    <br/> 
                    home
                    </a>
                    
                    <a class="nav-item nav-link edit" href="#"> 
                    <i class="material-icons fontNav">
                    message
                    </i>
                    <br/> 
                    Messages
                    </a>

                    <a class="nav-item nav-link edit" href="#"> 
                    <i class="material-icons fontNav">
                    star
                    </i>
                    <br/> 
                    Wishlist
                    </a>

                    <a class="nav-item nav-link edit" href="#"> 
                    <i class="material-icons fontNav">
                    settings
                    </i>
                    <br/> 
                    Settings
                    </a>

                    <a class="nav-item nav-link edit" href="#"> 
                    <i class="material-icons fontNav">
                    people
                    </i>
                    <br/> 
                    My account
                    </a>
                    </nav>         
                </div>
            )
        }
}
export default NavBars