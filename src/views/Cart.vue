<template>
    <div>
        <div class="escrita-meu-carrinho">
            Meu Carrinho
        </div>
        <div class="faixa-vermelha">
           <div>
            Produtos
           </div>
           <div>
            Quantidade
           </div>
           <div>
            Total
           </div>
        </div>
        <div class="conteiner-carrinho">
            <div class="card">
                
                <div class="conteudo-card">
                    <img src="@/assets/Rectangle11.svg" class="img-card">
                    Tênis Nike <br> <br>
                    Vermelho - 10 <br> <br>
                    R$ 500,00
                </div>
                <div class="input-dinamico">
                    <div class="botao" v-on:click="subtracao('subtracao 1')">
                        -
                    </div>
                    <div class="numero-input">
                        {{unidade1}}
                    </div>
                    <div class="botao" v-on:click="adicao('adicao 1')">
                        +
                    </div>
                </div>
                <div>
                    R$ 500,00
                </div>
            </div>
            <div class="separacao-card">

            </div>
            <div class="card">
                
                <div class="conteudo-card"> 
                    <img src="@/assets/sapato.png" class="img-card">
                    Sapato Social <br> <br>
                    Marron - 29 <br> <br>
                    R$ 500,00
                </div>
                    
                
                <div class="input-dinamico">
                    <div class="botao" v-on:click="subtracao('subtracao 2')">
                        -
                    </div>
                    <div class="numero-input">
                        {{unidade2}}
                    </div>
                    <div class="botao"  v-on:click="adicao('adicao 2')">
                        +
                    </div>
                </div>
                <div>
                    R$ 500,00
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: "Cart-page",
    data () {
        return {
            unidade1: 1,
            unidade2: 1,
        }
    },
    methods: {
        adicao (option) {
            if (option == "adicao 1") {
                this.unidade1++
            } else {
                this.unidade2++
            }
            
            
        },
        subtracao (option) {
            if (option == "subtracao 1") {
            this.unidade1--
            } else {
                this.unidade2--
            }
        }
}
}
</script>
<style scoped>
.escrita-meu-carrinho {
    color: #CB031D;
    font-size: 2vw;
    margin: 2vh 0 2vh 2vh;
}
.faixa-vermelha {
    background-color: #840303;
    color: white;
    display: flex;
    font-size: 3vh;
    padding: 2vh 0vh;
    width: 65vw;
    justify-content: space-around;
}
.conteiner-carrinho {
    width: 65vw;
    background-color: #410E0E;
    display: flex;
    flex-direction: column;
}
.img-card {
    height: 23vh;
    border-radius: 10px;
}
.card {
    color:white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3vh;
}
.conteudo-card {
    display: flex;
    align-items: center;
    gap: 1vw;
}
.input-dinamico {
    display: flex;
}
.botao {
    width: 1.75vw;
    text-align: center;
    background-color:#EB1E1E;
    cursor: pointer;
}
.numero-input {
    width: 1.75vw;
    background-color: black;
    text-align: center;
    
}
.separacao-card {
    border-bottom: #FFFFFF 1px solid;
    width: 100%;
}
</style>