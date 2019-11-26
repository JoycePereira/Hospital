namespace hospital{
    export abstract class pessoa{
        private _nome: string;
        private _cpf: string;

        public setNome(){
            return this._nome;
        }
        public getNome(nome: string){
            this._nome = nome;
        }
        public setCpf(){
            return this._cpf;
        }
        public getCpf(cpf: string){
            this._cpf = cpf;
        }
    } 
}