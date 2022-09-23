'use strict'
import {showArray} from "./showArray.js"

const numbers = [10,17, 21, 50, 63, 70, 80, 95]
//MAP - percorre a array e retorna do mesmo tamanho modifido ou nao 
//sinatxe - array.map(callback)
//paramentros do callback
//1- Elemnto
//2- indice
//3-Array


// filter - percorre a array aplicando um callback e
// retorna um array do mesmo tamanho ou nao

//sintaxe - array.filter(callback)
//paremetro do callcack
// 1- elemento
// 2 - indice
//3 - Array 
// Retorna do back tem que ser booleano


// Reduce - percorre a array aplicando u callback 
// e retorna um valor unico
//Sintaxe - array.reduce (callback, valorInicial)
//1 - Acumulador
//2 - Elemenot
//3 - Indice
//4 - Array
// valor inicial pode ser qualquer tipo de variavel

// somar valores
const soma = (a, b) => a + b 
const valorTotal = numbers.reduce(soma, 0)
//filtrar elemento menor  que e tirar o desconto  
const desconto2 = (valor) => valor - 2
const numbersDesconto = numbers.map(desconto2)

const somarvalor = (valor) => valor + 100
const somar100 = numbers.map(somarvalor)

const getPar = (valor) => valor % 2 == 0
const par = numbers.filter(getPar)

const getValor = (valor) => valor - 4 
const desconto = numbers.map(getValor)

const Impar = (valor) => valor %2 != 0
const getImpar = numbers.filter(Impar) 
//const somarImpar = getImpar.map (numbers + 21)

const ImparSomar = (valor) => valor %2 != 0
const getImparSomar = numbers.filter(Impar) 

//filtrar os elemento menores que 20
const menor20 = (valor) => valor < 20
const valorMenor20 = numbers.filter(menor20)

showArray(numbers, 'main' ,'todos os elementos ')
showArray(numbersDesconto, 'main' ,'Desconto ')
showArray (valorMenor20, 'main', 'menor que 20')
showArray (somar100, 'main', 'valores somando 100')
showArray (par, 'main', 'valores pares')
showArray (desconto, 'main', 'produtos com desconto')
showArray (getImpar, 'main', 'numeros Impares')
showArray([valorTotal], 'main' ,'soma de todos os valores ')
// n tem como puxar o Valortotal 
