import { Input, Button } from "./style";
import icone1 from "../../assets/img/icone1.png"
import 'bootstrap/dist/css/bootstrap.min.css'



export default function Feedinput(){ 

   
return ( 

<div className="container-fluid min-vh-100 d-flex flex-column">
   <div className="row flex-grow-1">
    <div className="col-md-6 offset-md-3 border-end border-start p-0">
       <div className="border-bottom px-4 py-5">
          <div className="row">
          <div className="col-3"> <img src={icone1}/> </div>

          <div className="col d-flex flex-column">
            <div className=" mb-3"> <Input type="text"/> </div>

            <div className="d-flex justify-content-end">
              <Button className="btn btn-primary"> Publicar </Button></div>
          </div>
        </div>
      </div>
    <div className="border-bottom p-4">publicação1</div>
      <div className="border-bottom p-4">publicação2</div>
      <div className="border-bottom p-4">publicação3</div>
    </div>
  </div>

</div>

)
};