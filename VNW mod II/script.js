//📌01 - Estrutura de dados

// Crie uma variável que receba um nome;
let nome ="Paula"
console.log(nome)
// Crie uma variável que receba um número;
let num = 7
console.log(num)
// Crie uma variável com o ano atual e subtraia pelo número que você guardou;
let anoAtual = 2022
let resultado = anoAtual - num
console.log(resultado)
// Agora mostre no console o resultado da soma das duas variáveis guardadas anteriormente;
console.log(anoAtual + num)
//Mostre no console a mensagem "Estou mexendo no console.log";
console.log("Estou colocando os desafios em dia");
// Crie uma variável chamada “quartaFeira” e atribua à ela o valor booleano que representa verdadeiro ou falso e mostre a saída no console;
let quartaFeira = false
console.log(quartaFeira)
// Exiba no console o tipo de dado da váriavel quartaFeira;
console.log(typeof quartaFeira)

//📌 02 -  if/else


//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 15
if(idade >=18){ console.log("Você é obrigado a trabalhar")}
else{console.log("Existe Jovem Aprendiz")}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let vegano= false if(idade>=18) && (vegano===true){
    console.log ("Não implique com os canívoros")} 
    else{console.log("Você é joinha")}

 //3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let mes = "Fevereiro"
if(mes==="Janeiro"||mes==="Dezembro"){
    console.log("Boas Festas!")
}else{
    console.log("Não é seu aniversário!")}

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
const nome = "Jurema"
if(nome[0]==="R"){
    console.log("Seu nome é bacana!")
}else{
    console.log("Seu nome é ah,tá!")}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
const nome1="Ertrudes"
const sobrenome="Brum"
isFinite(sobrenome.length>6|| nome1[0]==="E"){
    console.log("Que exuberante!")}else{
        console.log("Ah, tá!")
    }

// 📌 03 -  for/while

//1 - Criar um loop que conte de 1 até 10 usando FOR
for(let i=1; i<= 10; i++){
    console.log(i)
}
//2 - Criar um loop que conte de 10 até 1 usando WHILE
let contadorD=10
while(contadorD >=1){
    console.log(contadorD--)}
    
//3 - Criar um loop que conte todos os números ímpares de 1 até 100
for(let impar = 1; impar<=100; impar+2){
    console.log(impar)}

//4- Criar um loop que conte todos os números pares de 0 a 100
let number=0
while(number<=100){
    console.log(number) number +=2}
  
//📌 04 -  Funções


//1 - crie uma função que exiba uma mensagem no console
funtion(){
    console.log("Tudo certinho?")}
ola()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function nome(name){
    console.log(`Bem-vindo,${name}!`)
}
nome("Clodoaldo")

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function about(name,age,music){
    console.log(`Meu nome é${name}, tenho${age} anos e gosto de ouvir ${music}!`)
}
about("Ana",20,"pop")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function popCulture(movie,music){
    console.log(`Meu filme favorito é ${movie} e minha música favorita é ${music}`)
}
popCulture("Sinatra","O Casamento do meu melhor amigo")

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function conta(x){
    return x*3
}
console.log(conta(3))

//📌 05 - Estrutura de dados complexos


 // Crie um array que receba 5 itens e exiba no console.
let frutas = ["banana","maçã","pera","mamão","abacate"];

// Utilize um método para adicionar um nome ao inicio do array.
frutas.unshift("Morango")
console.log(frutas);

// Utilize um método para remover o último nome do array.
frutas.pop();
console.log(frutas);

// Utilize um método para adicionar dois nomes ao fim do array.
frutas.push("uva","manga");
console.log(frutas);

// Utilize um método para remover o primeiro nome do array.
frutas.shift();
console.log(frutas);

// Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]
numeros.sort(function(a-b){return a-b})
console.log(numeros);


//📌06 - Estrutura de dados complexos (Objeto)

// Crie um objeto que receba ao menos três propriedades sobre você.
let sobreMim={
    nome:"Tulani",
    cidade:"RJ",
    bairro:"Bangu";
    true
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
sobreMim.time="Vasco";
console.log(sobreMim);

// Remova uma propriedade desse objeto.

//Mostre no console todas as propriedades desse objeto.
console.log(sobreMim);

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro=[{
    nome:"Genoveva",
    idade:20,
    telefone:3467-7070
    amigos:["Gianna","Joseph","John","Mariah"]
}]
// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[1]
console.log(cadastro[2].amigos[2]
console.log(cadastro[3].amigos[3]