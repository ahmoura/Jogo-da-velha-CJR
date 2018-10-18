var turno = 1;
var campo = [9];
var id_vec = ["a1","a2","a3","b1","b2","b3","c1","c2","c3"];

function vitoria(){
    if((campo[0] && campo[1]) && (campo[1] && campo[2])){
        if(campo[0] == 1){
            alert("X ganhou!");    
        }
        else {
            alert("O ganhou!");
        }
    } else if((campo[3] && campo[4]) && (campo[4] && campo[5])){
        if(campo[3] == 1){
            alert("X ganhou!");    
        }
        else {
            alert("O ganhou!");
        }
    }

    else if((campo[6] && campo[7]) && (campo[7] && campo[8])){
        if(campo[1] == 1){
            alert("X ganhou!");    
        }
        else {
            alert("O ganhou!");
        }
    }

    else if((campo[0] && campo[3]) && (campo[3] && campo[6])){
        if(campo[0] == 1){
            alert("X ganhou!");    
        }
        else {
            alert("O ganhou!");
        }
    }

    else if((campo[1] && campo[4]) && (campo[4] && campo[7])){
        if(campo[1] == 1){
            alert("X ganhou!");    
        }
        else {
            alert("O ganhou!");
        }
    }

    else if((campo[2] && campo[5]) && (campo[5] && campo[8])){
        if(campo[2] == 1){
            alert("X ganhou!");    
        }
        else {
            alert("O ganhou!");
        }
    }

    else if((campo[0] && campo[4]) && (campo[4] && campo[8])){
        if(campo[0] == 1){
            alert("X ganhou!");    
        }
        else {
            alert("O ganhou!");
        }
    }

    else if((campo[2] && campo[4]) && (campo[4] && campo[6])){
        if(campo[1] == 1){
            alert("X ganhou!");    
        }
        else {
            alert("O ganhou!");
        }
    }
}

function resetar(){
    for (i = 0; i < 9; i++) {
        campo[i] = 0;
        document.getElementById("a1").innerHTML = "";
    }
}

function jogada(id) {
    if (id != "usado") {
        if (turno == 1) {
            document.getElementById(id).innerHTML = "<p class=\"jogo_p jogo_x\">X</p>";
        }
        else {
            document.getElementById(id).innerHTML = "<p class=\"jogo_p jogo_o\">O</p>";
        }
        campo[id_vec.indexOf(id)] = turno;
        document.getElementById(id).id = "usado";
        turno = turno * (-1);
    }

}
