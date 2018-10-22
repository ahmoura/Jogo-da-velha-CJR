let turno = 1;      /* Verifica o turno ativo: 1 para X e 0 para O. */
let campo = [9];    /* Vetor de cada tile do tabuleiro */
/* Vetor com o id de cada tile */
let id_vec = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
let ganhou = 0;     /* Verifica se o alguem ganhou */
let jogadas = 0;    /* Verifica o numero de jogadas no jogo atual (usado para conferir se deu velha) */
resetar();


/* Funcoes basicas do jogo.*/
function vitoria() {
    if ((campo[0] == campo[1]) && (campo[1] == campo[2]) && (campo[0] != 0)) {
        if (campo[0] == 1) {
            incrementa_vitoria(1);
        }
        else {
            incrementa_vitoria(0);
        }
        ganhou = 1;
    }
    else if ((campo[3] == campo[4]) && (campo[4] == campo[5]) && (campo[3] != 0)) {
        if (campo[3] == 1) {
            incrementa_vitoria(1);
        }
        else {
            incrementa_vitoria(0);
        }
        ganhou = 1;
    }
    else if ((campo[6] == campo[7]) && (campo[7] == campo[8]) && (campo[6] != 0)) {
        if (campo[6] == 1) {
            incrementa_vitoria(1);
        }
        else {
            incrementa_vitoria(0);
        }
        ganhou = 1;
    }
    else if ((campo[0] == campo[3]) && (campo[3] == campo[6]) & (campo[0] != 0)) {
        if (campo[0] == 1) {
            incrementa_vitoria(1);
        }
        else {
            incrementa_vitoria(0);
        }
        ganhou = 1;
    }
    else if ((campo[1] == campo[4]) && (campo[4] == campo[7]) && (campo[1] != 0)) {
        if (campo[1] == 1) {
            incrementa_vitoria(1);
        }
        else {
            incrementa_vitoria(0);
        }
        ganhou = 1;
    }
    else if ((campo[2] == campo[5]) && (campo[5] == campo[8]) && (campo[2] != 0)) {
        if (campo[2] == 1) {
            incrementa_vitoria(1);
        }
        else {
            incrementa_vitoria(0);
        }
        ganhou = 1;
    }
    else if ((campo[0] == campo[4]) && (campo[4] == campo[8]) && (campo[0] != 0)) {
        if (campo[0] == 1) {
            incrementa_vitoria(1);
        }
        else {
            incrementa_vitoria(0);
        }
        ganhou = 1;
    }
    else if ((campo[2] == campo[4]) && (campo[4] == campo[6]) && (campo[2] != 0)) {
        if (campo[2] == 1) {
            incrementa_vitoria(1);
        }
        else {
            incrementa_vitoria(0);
        }
        ganhou = 1;
    }
    if (ganhou == 1) {
        resetar();
    }
    else if (jogadas == 9) {
        alert("Deu velha!");
        resetar();
    }
}

function resetar() {
    for (i = 0; i < 9; i++) {
        campo[i] = 0;
        document.getElementById(id_vec[i]).style.backgroundImage = "none";
    }
    turno = 1;
    ganhou = 0;
    jogadas = 0;
}

function jogada(id) {
    if (campo[id_vec.indexOf(id)] == 0) {
        if (turno == 1) {
            document.getElementById(id).style.backgroundImage = "url('../img/x.png')";
        }
        else {
            document.getElementById(id).style.backgroundImage = "url('../img/o.png')";
        }
        campo[id_vec.indexOf(id)] = turno;
        turno = turno * (-1);
        jogadas++;
        vitoria();
    }
}



/* Contador de pontos de X.*/
let x_count = 0;
/* Contador de pontos de O. */
let o_count = 0;

/* Funcao para incrementar vitorias ou derrotas. */
function incrementa_vitoria(quem_ganhou) {
    if(quem_ganhou==1){
        x_count++;
        document.getElementById("conta_x").innerHTML = x_count;
        alert("X ganhou!");
    }
    else if(quem_ganhou==0){
        o_count++;
        document.getElementById("conta_y").innerHTML = o_count;
        alert("O ganhou!");
    }
}
