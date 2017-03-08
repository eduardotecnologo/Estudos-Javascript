import {Component} from 'angular2/core';
import {Cliente} from './cliente';

@Component({
    selector: 'meu-app',
    template: `
               <h1 class="title">Eduardo Alexandre</h1>
                <h2 class="subtitle">{{txtListagem}}</h2>
                <p>Cliente Selecionado: {{cliente.nome}}</p>
               <ul>
                     <li *ngFor="#cli of clientes; #i = index">
                     <a href="#" (click)="selecionar(i)">
                     {{cli.id}} - {{cli.nome}}
                     </a>
                     </li>
               </ul> 
    `
})
export class AppComponent{

    private txtListagem: string;
    private clientes: Cliente[];
    private cliente: Cliente;

    constructor(){
        this.txtListagem = 'Listagem de Clientes';
        this.clientes =[
        new Cliente(1, 'Manolo'),
        new Cliente(2, 'Manolo2')
    ];
    this.cliente = this.clientes[0];
}
selecionar(index: number): void{
    if (index < this.clientes.length){
    this.cliente = this.clientes[index];
        }
    }
}