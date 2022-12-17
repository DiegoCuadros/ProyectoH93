import { Component, OnInit} from '@angular/core';
import { ListaClientes } from '../lista-clientes';

@Component({
  selector: 'app-modulodirectivo',
  templateUrl: './modulodirectivo.component.html',
  styleUrls: ['./modulodirectivo.component.css']
})
export class ModulodirectivoComponent implements OnInit {
//se agrego fuera de tiempo
  lcliente:ListaClientes[];
  ngOnInit(): void {
    this.lcliente = [
      {
        "codCliente":1,
        "apellCliente":"Caceda",
        "correoCliente":"lopez1@gmail.com",
        "dniCliente":"57101206",
        "nombCliente":"Marco"
    },
    {
      "codCliente":2,
      "apellCliente":"Lopez",
      "correoCliente":"as10@gmail.com",
      "dniCliente":"13213554",
      "nombCliente":"Pedro"
    }
  ];
  }

}



