import {Component} from 'angular2/core';

@Component({
    selector: 'meu-app',
    template: `
               <h1 class="title">Eduardo Alexandre</h1>
                <h2 class="subtitle">Listagem de Tarefas</h2>
               <ul>
                     <li *ngFor="#tarefa of tarefas;  #i = index">
                        {{tarefa}} <a (click)="remover(i)" class="button is-danger">Remover</a>
                     </li>
               </ul> 
                <p class="control">
                <input class="input" style="width: 500px;" type="text" name="tarefa" placeholder="Digite a Tarefa" [(ngModel)]="txtTarefa">
                <button (click)="adicionar()" class="button is-success">Adicionar</button>
                </p>
    `
})
export class AppComponent{
    public tarefas: string[] = [];

    // Método para adicionar tarefas
    public txtTarefa: string;
    adicionar(){
        if(this.txtTarefa != '') {
            this.tarefas.push(this.txtTarefa);
            this.txtTarefa = ''; //Limpa o campo de texto.
        }
    }
    remover(index:number){
        this.tarefas.splice(index, 1);
    }
}