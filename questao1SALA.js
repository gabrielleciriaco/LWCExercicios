import { LightningElement } from "lwc";

export default class App extends LightningElement {
  
  //criar variavel e atributos

  nome = "Gabrielle";
  telefone = "649864135";
  cpf = "153468531016";
  idade = "25";

 email = "gabizinha@gmail.com";
 linkedin = "https://www.google.com";
 instagram = "https://www.globo.com";
 mensagem = "Hello world";

 /*visible = true;*/

 /*trocarDiv(){
   this.visible = !this.visible;
 }*/

alternarValores() {
   // Cria um objeto com os valores atuais
    const valoresAtuais = {
    Nome: this.nome,
    Idade: this.idade,
    Telefone: this.telefone,
    CPF: this.cpf,

    Email: this.email,
    Linkedin: this.linkedin,
    Instagram: this.instagram,
    Mensagem: this.mensagem
    };

    // Troca os valores entre si
    this.nome = valoresAtuais.Mensagem;
    this.telefone = valoresAtuais.Instagram;
    this.cpf = valoresAtuais.Linkedin;
    this.idade = valoresAtuais.Email;

    this.email = valoresAtuais.CPF;
    this.linkedin = valoresAtuais.Telefone;
    this.instagram = valoresAtuais.Idade;
    this.mensagem = valoresAtuais.Nome;
}
  
}
