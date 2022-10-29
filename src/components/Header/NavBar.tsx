import Logo from '../../assets/img/logo-colorido.png';
import {NavP, A, B, Img} from './style';
import {NavB} from './style';



import "./style"

export default function NavBar() {
    return (

        <NavP>
            <NavB>
                <div>
                    <Img src={Logo}/>
                </div>

                <div>
                    <span>
                        <A>
                            Olá, usuário |
                        </A>
                        <a href="#"> 
                        <B>
                            sair
                        </B>
                        </a>
                        
                    </span>
                </div>
            </NavB>
        </NavP>


    )
}
