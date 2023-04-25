import { LightningElement } from "lwc";

export default class App extends LightningElement {
  
  //criar variavel e atributos

 empresa = "Dunder Mifflin";
 cnpj = "153468531016";
 endereço = "Scranton";

 produto = "Papéis";
 descricao = "Compre conosco";
 preco = "222,99";

 oferta1 = "200,80";
 oferta2 = "175,99";

 visible = true;

 esconderValores(){
   this.visible = !this.visible;
 }
