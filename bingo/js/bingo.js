/**
 * for(iteracion1=0; iteracion1<5; iteracion1++){
    
    for(iteracion2=0; iteracion2<5; iteracion2++){
        console.log(bingo[iteracion1][iteracion2]+" ");
    }
    console.log("\n");
}
 */


let bingo=[];
let iteracion1;
let iteracion2;
let contador=0;
let tabla;

for(iteracion1=0; iteracion1<5; iteracion1++){
    let interno=[];
    for(iteracion2=0; iteracion2<5; iteracion2++){
        contador=contador+1;
        tabla=contador*2;
        interno.push(tabla);
    }
    bingo.push(interno);
}
console.log(bingo);

console.log("LETRA B \n");
for(iteracion2=0; iteracion2<5; iteracion2++){

    console.log(bingo[iteracion2][0]+" ");

}

console.log("LETRA I \n");
for(iteracion2=0; iteracion2<5; iteracion2++){

    console.log(bingo[iteracion2][1]+" ");
    
}

console.log("LETRA N \n");
for(iteracion2=0; iteracion2<5; iteracion2++){

    console.log(bingo[iteracion2][iteracion2][2]+" ");
    
}

console.log("LETRA G \n");
for(iteracion2=0; iteracion2<5; iteracion2++){

    console.log(bingo[iteracion2][3]+" ");
    
}

console.log("LETRA O \n");
for(iteracion2=0; iteracion2<5; iteracion2++){

    console.log(bingo[iteracion2][4]+" ");
    
}

console.log("X1")   
for(iteracion1=0; iteracion1<3; iteracion1++){

    for(iteracion2=0; iteracion2<3; iteracion2++){

        if(iteracion1%2==0 && iteracion2%2==0){
            console.log(bingo[iteracion1][iteracion2]);

        }
        else if (iteracion1%2==1 && iteracion2%2==1){
            console.log(bingo[iteracion1][iteracion2]);

        }

        else{
            console.log(" ");
        }
    }
}

console.log("X2")
for(iteracion1=0; iteracion1<3; iteracion1++){

    for(iteracion2=2; iteracion2<5; iteracion2++){

        if(iteracion1%2==0 && iteracion2%2==0){
            console.log(bingo[iteracion1][iteracion2]);

        }
        else if (iteracion1%2==1 && iteracion2%2==1){
            console.log(bingo[iteracion1][iteracion2]);

        }
        
        else{
            console.log(" ");
        }
    }
}

console.log("X3")
for (iteracion1 = 2; iteracion1 < 5; iteracion1++){
  for (iteracion2 = 1; iteracion2 < 4; iteracion2++){
    if (iteracion1 %2 == 1 && iteracion2 %2 == 0){
      console.log(bingo[iteracion1][iteracion2]);
    }
    else if (iteracion1 %2 == 0 && iteracion2 %2 == 1){
      console.log(bingo[iteracion1][iteracion2]);
    }
    else{
      console.log(" ")
    } 
  }
}


console.log("Xx GRANDE")
for (iteracion1 = 1; iteracion1 < 1; iteracion1++){
  for (iteracion2 = 0; iteracion2 < 2; iteracion2++){
    if (iteracion1 %2 == 1 && iteracion2 %2 == 1){
      console.log(bingo[iteracion1][iteracion2]);
    }
    else if (iteracion1 %2 == 0 && iteracion2 %2 == 0){
      console.log(bingo[iteracion1][iteracion2]);
    }
    else{
      console.log(" ")
    } 
  }
}
