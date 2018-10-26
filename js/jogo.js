let turno = 1;      //Verifica o turno ativo: 1 para X e -1 para O.

/* Vetor de cada tile do tabuleiro. Se a tile tiver valor 0, esta vazia;
se tiver valor 1, esta marcada com X; e tem -1 se estiver marcada com O.*/
let campo = [9];    

/* Vetor com o id de cada tile */
let id_vec = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];

let ganhou = 0;     //Indica se alguem ganhou.

/*Indica o numero de jogadas. Eh usado para verificar se deu velha:
se ganhou eh 0 e jogadas eh 9, deu velha.*/
let jogadas = 0;    

let bot_flag = 1;   //Flag pra indicar se o bot esta ativo
let jogadas_arr = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]); //Array de jogadas disponiveis pro bot
resetar();

/* Funcoes do menu:
    single_game: inicia o jogo contra o bot;
    mult_game: inicia um jogo de dois;
    op_grade: some o menu e aparece o jogo;
    sair: some o jogo e aparece o menu. */

function single_game() {
    bot_flag = 1;
    op_grade();
}

function mult_game() {
    bot_flag = 0;
    op_grade();
}

function op_grade() {
    document.getElementById("grade").style.display = 'flex';
    document.getElementById("menu").style.display = 'none';
}

function sair(){
    document.getElementById("grade").style.display = 'none';
    document.getElementById("menu").style.display = 'flex';
}
/************************************************/


/* Funcoes basicas do jogo:
    vitoria: confere todos os estados em que o jogo acabou e decide se alguem ganhou;
    resetar: limpa o tabuleiro e reinicia todas as variaveis para os valores iniciais;
    jogada: muda o valor da regiao selecionada do tabuleiro de acordo com o turno ativo;
    shuffle: embaralha o arranjo de jogadas disponiveis para o bot.*/
function vitoria() {
    if ((campo[0] == campo[1]) && (campo[1] == campo[2]) && (campo[0] != 0)) {
        if (campo[0] == 1) {
            incrementa_vitoria(1);
        }
        else {
            incrementa_vitoria(0);
        }
        ganhou = 1;
    } else if ((campo[3] == campo[4]) && (campo[4] == campo[5]) && (campo[3] != 0)) {
        if (campo[3] == 1) {
            incrementa_vitoria(1);
        }
        else {
            incrementa_vitoria(0);
        }
        ganhou = 1;
    } else if ((campo[6] == campo[7]) && (campo[7] == campo[8]) && (campo[6] != 0)) {
        if (campo[6] == 1) {
            incrementa_vitoria(1);
        }
        else {
            incrementa_vitoria(0);
        }
        ganhou = 1;
    } else if ((campo[0] == campo[3]) && (campo[3] == campo[6]) & (campo[0] != 0)) {
        if (campo[0] == 1) {
            incrementa_vitoria(1);
        }
        else {
            incrementa_vitoria(0);
        }
        ganhou = 1;
    } else if ((campo[1] == campo[4]) && (campo[4] == campo[7]) && (campo[1] != 0)) {
        if (campo[1] == 1) {
            incrementa_vitoria(1);
        }
        else {
            incrementa_vitoria(0);
        }
        ganhou = 1;
    } else if ((campo[2] == campo[5]) && (campo[5] == campo[8]) && (campo[2] != 0)) {
        if (campo[2] == 1) {
            incrementa_vitoria(1);
        }
        else {
            incrementa_vitoria(0);
        }
        ganhou = 1;
    } else if ((campo[0] == campo[4]) && (campo[4] == campo[8]) && (campo[0] != 0)) {
        if (campo[0] == 1) {
            incrementa_vitoria(1);
        }
        else {
            incrementa_vitoria(0);
        }
        ganhou = 1;
    } else if ((campo[2] == campo[4]) && (campo[4] == campo[6]) && (campo[2] != 0)) {
        if (campo[2] == 1) {
            incrementa_vitoria(1);
        }
        else {
            incrementa_vitoria(0);
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
            /* Se o bot estiver ligado, ele joga logo em seguida. */
            if (bot_flag == 1) {
                while (campo[jogadas_arr[0]] != 0) {
                    jogadas_arr = shuffle(jogadas_arr);
                }
                jogada(id_vec[jogadas_arr[0]]);
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
/************************************************/

/* Placar: */

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
/************************************************/
