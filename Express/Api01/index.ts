interface x {

}

class Pessoa implements x {
    list:Array<any>
    constructor(){
        this.list.push('a');
        this.list.push(1);
    }
}