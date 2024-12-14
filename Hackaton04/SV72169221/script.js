
function sumadosnumeros(num1,num2){
    return num1+num2;
}

function potencia(exp,base){
    return base**exp;
}
function sumOfCubes(num1,num2,num3){
    return (num1**3)+(num2**3)+(num3**3);
}
function triArea(base,altura){
    return (base*altura)/2;
}
function calculator(num1,operator,num2){
    let respuesta;
    switch (operator) {
        case "+":
            respuesta=num1+num2;
            break;
        case "-":
            respuesta=num1-num2;
            break;
        case "*":
            respuesta=num1*num2;
            break;
        case "/":
            respuesta=num1/num2;
            break;
        case "%":
            respuesta=num1%num2;
            break;
        default:
            respuesta=NaN;
            break;
    }
    return respuesta;
}

let presentacion=(nombre,apellido,edad)=>{
    alert(`Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`);


}
function tipoDeValor(valor){
    console.log(`El tipo del valor `,valor,` es `,typeof(valor));
}

//3) Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
console.log("Ejercicio 3");
tipoDeValor(42);
tipoDeValor("Hola");
tipoDeValor([]);
tipoDeValor({});
tipoDeValor(null);
tipoDeValor(Symbol());
tipoDeValor(BigInt(145));
tipoDeValor(function(){});
tipoDeValor(undefined);
tipoDeValor(true);


function sumarest(...numeros){
    return numeros.reduce((suma, numero) => suma + numero, 0);
}





//5) Crear una función que reciba un array de valores y filtre los valores que no son string
console.log("Ejercicio 5")
function filtroDeStrings(arr){
    let soloStrings=arr.filter(element=>typeof element==="string");
    return soloStrings;
}

let arrayRandom=["Hola",false,21,{},"Chau",true,45,"JavaScript"];
console.log(filtroDeStrings(arrayRandom));

let arrayRamdom=[41,52,36,20,100,47,12]
function minMax(arr){
    min=Math.min.apply(null,arr);
    max=Math.max.apply(null,arr);
    arrayOrdenado=[min,max];
    return arrayOrdenado;
}

console.log(`Ejercicio 6`)
console.log(minMax(arrayRamdom));



arrayEnteros=[0,1,2,3,4,5,6,7,8,9]

function formatPhoneNumber(array){
    let phoneArray=["(",5,7,5,")",7,8,5,"-",6,2,5,7];
    let strPhone="";
    for (let i = 0; i < phoneArray.length; i++) {
        if (!isNaN(phoneArray[i])){
            phoneArray[i]=Math.floor(Math.random() * 10);
        }
        strPhone+=phoneArray[i];
        
    }
    return strPhone;
}

console.log(`Ejercicio 7`)//Cada vez que se actualiza la página imprime un número telefónico diferente
console.log(`Cada vez que se actualiza la página imprime un número telefónico diferente`);
console.log(formatPhoneNumber(arrayEnteros));



matrizNumeros=[[3,4,12],[432,89,54],[45,70,3]];

function findLargestNums(arrayArg){
    let arrayOrdenado=[]
    for (let i = 0; i < arrayArg.length; i++) {
        if (Array.isArray(arrayArg[i])) {
            arrayOrdenado.push(Math.max.apply(null,arrayArg[i]));
        }
        
    }

    return arrayOrdenado;
}

console.log(`Ejercicio 8`)
console.log(findLargestNums(matrizNumeros));



function charIndex(palabra,caracter){
    let index=[];
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i]==caracter) {
            index.push(i);
        }
        
    }
    return index;
}
console.log(`Ejercicio 9`);
console.log("Aeropuerto");
console.log(`El caracter "e" aparece en los índices `,charIndex("Aeropuerto","e"));



function toArray(object){
    objetoArray=Object.keys(object);
    arrayObject=[];
    for (let i = 0; i < objetoArray.length; i++) {
        let arrayKeyValue=[];
        arrayKeyValue.push(objetoArray[i]);
        arrayKeyValue.push(object[objetoArray[i]]);
        arrayObject.push(arrayKeyValue);
    }
    return arrayObject;
}

let objeto1={a:74,b:150,c:21,d:45};

console.log(`Ejercicio 10`)
console.log(toArray(objeto1));



arrObjsPresupuestos=[{name:"Pedrito",age:21,budget:14000},{name:"Sara",age:70,budget:5000},{name:"Carlos",age:25,budget:60000}];
function getBudgets(arrObjs){
    let sumBudget=0;
    arrObjs.forEach(objeto => {
        let arrKeys=Object.keys(objeto);
        arrKeys.forEach(keys => {
            if (keys=="budget"){
                sumBudget+=objeto[keys];
            }
        });
    });
    return sumBudget;

}

console.log(`Ejercicio 11`);
console.log(getBudgets(arrObjsPresupuestos));



let arrObjStudents=[{name:"Steve"},{name:"Alex"},{name:"Jimmy"}];

function getStudentsNames(arrObjs){
    let arrNombres=[];
    arrObjs.forEach(Obj=>{
        let key=Object.keys(Obj);
        arrNombres.push(Obj[key]);
    })
    return arrNombres;

}
console.log(`Ejercicio 12`);
console.log(getStudentsNames(arrObjStudents));


let objMedia={likes:2,dislikes:6,followers:21}
function objectToArray(objeto){
    let arrKeysValues=[]
    let keys=Object.keys(objeto);
    keys.forEach(key => {
        let arrTemp=[];
        arrTemp.push(key,objeto[key]);
        arrKeysValues.push(arrTemp);
    });
    return arrKeysValues;

}
console.log(`Ejercicio 13`);
console.log(objectToArray(objMedia));






$("#suma").on("click",async(e)=>{
    e.preventDefault();
    let num1,num2;
    num1=Number.parseInt(prompt(`Escriba el primer numero`));
    num2=Number.parseInt(prompt(`Escriba el segundo numero`));
    alert(`La suma de los dos números es ${sumadosnumeros(num1,num2)}`)


})



$("#potencia").on("click",async(e)=>{
    e.preventDefault();
    let num1,num2;
    num1=Number.parseInt(prompt(`Escriba la base`));
    num2=Number.parseInt(prompt(`Escriba el exponente`));
    alert(`${num1} elevado a ${num2} es ${potencia(num2,num1)}`);



})

$("#sumcubos").on("click",async(e)=>{
    e.preventDefault();
    let num1,num2,num3;
    num1=Number.parseInt(prompt(`Escriba el primer numero`));
    num2=Number.parseInt(prompt(`Escriba el segundo numero`));
    num3=Number.parseInt(prompt(`Escriba el tercer numero`));
    alert(`La suma de los cubos de los números es ${sumOfCubes(num1,num2,num3)}`);
    

})


$("#areatri").on("click", async(e)=>{
    e.preventDefault();
    base=Number.parseInt(prompt(`Escriba la base del triángulo`));
    altura=Number.parseInt(prompt(`Escriba la altura del triángulo`));
    alert(`El área del triángulo de base ${base} y altura ${altura} es ${triArea(base,altura)}`);


})
$("#calculator").on("click",async(e)=>{
    e.preventDefault();
    let num1,num2,operador;
    num1=Number.parseInt(prompt(`Escriba el primer numero`));
    operador=prompt(`Escriba uno de los siguientes operadores (+ - * / %)`);
    num2=Number.parseInt(prompt(`Escriba el segundo numero`));
    resp=calculator(num1,operador,num2);
    if (Number.isNaN(resp)){
        alert(`El parámetro no es reconocido`);
    }
    else{
        alert(`${num1}${operador}${num2}=${resp}`);
    }

});

$("#pregunta").on("click",async (e)=>{
    e.preventDefault();
    alert(`En realidad el motor de JavaScript no tiene un límite mínimo de argumentos, 
        sin embargo declarar muchos argumentos es poco legible y afecta el 
        rendimiento del sistema.`);
});


$("#presentacion").on("click",async (e)=>{

    e.preventDefault();
    let nom=prompt(`Ingresa tu nombre`);
    let apell=prompt(`Ingresa tu apellido`);
    let eda=prompt(`Ingresa tu edad`);

    presentacion(nom,apell,eda);


});


$("#sumarest").on("click",async (e)=>{
    e.preventDefault();
    let numeros=[];
    let continuar=true;

    while(continuar==true){
        let input=prompt(`Ingresa un número (escribe fin para dejar de poner números)`);
        if (input.toLowerCase()==="fin"){
            continuar=false;
        }
        else{
            let number=Number.parseFloat(input);
            if (!isNaN(number)){
                numeros.push(number);
            }
            else{
                alert(`Por favor ingrese un número válido`)
            }
        }
    }
    let suma=sumarest(...numeros)
    alert(`La suma de todos los números introducidos es ${suma}`);


})






// document.getElementById("suma").addEventListener("click",(e)=>{
//     e.preventDefault
//     let num1,num2;
//     num1=Number.parseInt(prompt(`Escriba el primer numero`));
//     num2=Number.parseInt(prompt(`Escriba el segundo numero`));
//     alert(`La suma de los dos números es ${sumadosnumeros(num1,num2)}`)


// })







