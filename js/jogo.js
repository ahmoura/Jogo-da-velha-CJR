let turno = 1;
let campo = [9];
let id_vec = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
let ganhou = 0;
let jogadas = 0;
resetar();

function vitoria() {
    if ((campo[0] == campo[1]) && (campo[1] == campo[2]) && (campo[0] != 0)) {
        if (campo[0] == 1) {
            alert("X ganhou!");
        }
        else {
            alert("O ganhou!");
        }
        ganhou = 1;
    }
    else if ((campo[3] == campo[4]) && (campo[4] == campo[5]) && (campo[3] != 0)) {
        if (campo[3] == 1) {
            alert("X ganhou!");
        }
        else {
            alert("O ganhou!");
        }
        ganhou = 1;
    }
    else if ((campo[6] == campo[7]) && (campo[7] == campo[8]) && (campo[6] != 0)) {
        if (campo[6] == 1) {
            alert("X ganhou!");
        }
        else {
            alert("O ganhou!");
        }
        ganhou = 1;
    }
    else if ((campo[0] == campo[3]) && (campo[3] == campo[6]) & (campo[0] != 0)) {
        if (campo[0] == 1) {
            alert("X ganhou!");
        }
        else {
            alert("O ganhou!");
        }
        ganhou = 1;
    }
    else if ((campo[1] == campo[4]) && (campo[4] == campo[7]) && (campo[1] != 0)) {
        if (campo[1] == 1) {
            alert("X ganhou!");
        }
        else {
            alert("O ganhou!");
        }
        ganhou = 1;
    }
    else if ((campo[2] == campo[5]) && (campo[5] == campo[8]) && (campo[2] != 0)) {
        if (campo[2] == 1) {
            alert("X ganhou!");
        }
        else {
            alert("O ganhou!");
        }
        ganhou = 1;
    }
    else if ((campo[0] == campo[4]) && (campo[4] == campo[8]) && (campo[0] != 0)) {
        if (campo[0] == 1) {
            alert("X ganhou!");
        }
        else {
            alert("O ganhou!");
        }
        ganhou = 1;
    }
    else if ((campo[2] == campo[4]) && (campo[4] == campo[6]) && (campo[2] != 0)) {
        if (campo[2] == 1) {
            alert("X ganhou!");
        }
        else {
            alert("O ganhou!");
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
