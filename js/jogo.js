let turno = 1;
let campo = [9];
let id_vec = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
let ganhou = 0;
let jogadas = 0;
let bot_flag = 2; //Flag pra indicar se o bot esta ativo
let jogadas_arr = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]); //Array de jogadas disponiveis pro bot
resetar();

function vitoria() {
    if ((campo[0] == campo[1]) && (campo[1] == campo[2]) && (campo[0] != 0)) {
        if (campo[0] == 1) {
            alert("X ganhou!");
        } else {
            alert("O ganhou!");
        }
        ganhou = 1;
    } else if ((campo[3] == campo[4]) && (campo[4] == campo[5]) && (campo[3] != 0)) {
        if (campo[3] == 1) {
            alert("X ganhou!");
        } else {
            alert("O ganhou!");
        }
        ganhou = 1;
    } else if ((campo[6] == campo[7]) && (campo[7] == campo[8]) && (campo[6] != 0)) {
        if (campo[6] == 1) {
            alert("X ganhou!");
        } else {
            alert("O ganhou!");
        }
        ganhou = 1;
    } else if ((campo[0] == campo[3]) && (campo[3] == campo[6]) & (campo[0] != 0)) {
        if (campo[0] == 1) {
            alert("X ganhou!");
        } else {
            alert("O ganhou!");
        }
        ganhou = 1;
    } else if ((campo[1] == campo[4]) && (campo[4] == campo[7]) && (campo[1] != 0)) {
        if (campo[1] == 1) {
            alert("X ganhou!");
        } else {
            alert("O ganhou!");
        }
        ganhou = 1;
    } else if ((campo[2] == campo[5]) && (campo[5] == campo[8]) && (campo[2] != 0)) {
        if (campo[2] == 1) {
            alert("X ganhou!");
        } else {
            alert("O ganhou!");
        }
        ganhou = 1;
    } else if ((campo[0] == campo[4]) && (campo[4] == campo[8]) && (campo[0] != 0)) {
        if (campo[0] == 1) {
            alert("X ganhou!");
        } else {
            alert("O ganhou!");
        }
        ganhou = 1;
    } else if ((campo[2] == campo[4]) && (campo[4] == campo[6]) && (campo[2] != 0)) {
        if (campo[2] == 1) {
            alert("X ganhou!");
        } else {
            alert("O ganhou!");
        }
        ganhou = 1;
    }
    if (ganhou == 1) {
        return resetar();
    } else if (jogadas == 9) {
        alert("Deu velha!");
        return resetar();
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
    return 1;
}

function jogada(id) {
    if (campo[id_vec.indexOf(id)] == 0) {
        if (turno == 1) {
            document.getElementById(id).style.backgroundImage = "url('../img/x.png')";
            campo[id_vec.indexOf(id)] = turno;
            turno = turno * (-1);
            jogadas++;
            if (vitoria()) {
                return;
            }
            if (bot_flag == 1) {
                while (campo[jogadas_arr[0]] != 0) {
                    jogadas_arr = shuffle(jogadas_arr);
                }
                jogada(id_vec[jogadas_arr[0]]);
            }
            if (bot_flag == 2) {
                if (campo[0] == 1 && campo[1] == 1 && campo[2] == 0) {
                    console.log("tenis");
                    document.getElementById(id_vec[2]).style.backgroundImage = "url('../img/o.png')";
                    campo[id_vec.indexOf(id)] = turno;
                    turno = turno * (-1);
                    jogadas++;
                }
                if (campo[1] == 1 && campo[2] == 1 && campo[0] == 0) {
                    console.log("tenis");
                    document.getElementById(id_vec[0]).style.backgroundImage = "url('../img/o.png')";
                    campo[id_vec.indexOf(id)] = turno;
                    turno = turno * (-1);
                    jogadas++;
                }
                if (campo[3] == 1 && campo[4] == 1 && campo[5] == 0) {
                    console.log("tenis");
                    document.getElementById(id_vec[5]).style.backgroundImage = "url('../img/o.png')";
                    campo[id_vec.indexOf(id)] = turno;
                    turno = turno * (-1);
                    jogadas++;
                }
                if (campo[4] == 1 && campo[5] == 1 && campo[3] == 0) {
                    console.log("tenis");
                    document.getElementById(id_vec[3]).style.backgroundImage = "url('../img/o.png')";
                    campo[id_vec.indexOf(id)] = turno;
                    turno = turno * (-1);
                    jogadas++;
                }
                if (campo[6] == 1 && campo[7] == 1 && campo[8] == 0) {
                    console.log("tenis");
                    document.getElementById(id_vec[8]).style.backgroundImage = "url('../img/o.png')";
                    campo[id_vec.indexOf(id)] = turno;
                    turno = turno * (-1);
                    jogadas++;
                }
                if (campo[7] == 1 && campo[8] == 6 && campo[6] == 0) {
                    console.log("tenis");
                    document.getElementById(id_vec[6]).style.backgroundImage = "url('../img/o.png')";
                    campo[id_vec.indexOf(id)] = turno;
                    turno = turno * (-1);
                    jogadas++;
                }
                if (campo[0] == 1 && campo[3] == 1 && campo[6] == 0) {
                    console.log("tenis");
                    document.getElementById(id_vec[6]).style.backgroundImage = "url('../img/o.png')";
                    campo[id_vec.indexOf(id)] = turno;
                    turno = turno * (-1);
                    jogadas++;
                }
                if (campo[1] == 1 && campo[4] == 1 && campo[7] != -1) {
                    console.log("tenis");
                    document.getElementById(id_vec[7]).style.backgroundImage = "url('../img/o.png')";
                    campo[id_vec.indexOf(id)] = turno;
                    turno = turno * (-1);
                    jogadas++;
                }
                if (campo[2] == 1 && campo[5] == 1 && campo[8] == 0) {
                    console.log("tenis");
                    document.getElementById(id_vec[8]).style.backgroundImage = "url('../img/o.png')";
                    campo[id_vec.indexOf(id)] = turno;
                    turno = turno * (-1);
                    jogadas++;
                }
                if (campo[3] == 1 && campo[6] == 1 && campo[0] == 0) {
                    console.log("tenis");
                    document.getElementById(id_vec[0]).style.backgroundImage = "url('../img/o.png')";
                    campo[id_vec.indexOf(id)] = turno;
                    turno = turno * (-1);
                    jogadas++;
                }
                if (campo[4] == 1 && campo[7] == 1 && campo[1] == 0) {
                    console.log("tenis");
                    document.getElementById(id_vec[1]).style.backgroundImage = "url('../img/o.png')";
                    campo[id_vec.indexOf(id)] = turno;
                    turno = turno * (-1);
                    jogadas++;
                }
                if (campo[5] == 1 && campo[9] == 1 && campo[2] == 0) {
                    console.log("tenis");
                    document.getElementById(id_vec[2]).style.backgroundImage = "url('../img/o.png')";
                    campo[id_vec.indexOf(id)] = turno;
                    turno = turno * (-1);
                    jogadas++;
                } else {
                    var roll = 0;
                    while (campo[roll] != 0) {
                        roll++
                    }
                    jogada(id_vec[roll]);
                }
            }
        } else {
            document.getElementById(id).style.backgroundImage = "url('../img/o.png')";
            campo[id_vec.indexOf(id)] = turno;
            turno = turno * (-1);
            jogadas++;
            vitoria();
        }
    }
}



function shuffle(arr) {
    var i = arr.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i + 1));

        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

    }

    return arr;
}
console.log("teste");