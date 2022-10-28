import Logo from '../../assets/img/logo-colorido.png';
import { NavP } from './style';


import "./style"

export default function NavBar(){
    return(

      <NavP>  
        <nav className="navbar bg-light nav">
        <div className="container-fluid">
        <img src={Logo}/>
        </div>
      </nav>
      </NavP>
      

    )
}