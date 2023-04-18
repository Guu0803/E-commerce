<template>
    <div>
        <div class="escrita">
            Meu Carrinho
        </div>
        <div class="divisao-carrinho">
            <div>
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
                                {{ unidade1 }}
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
                                {{ unidade2 }}
                            </div>
                            <div class="botao" v-on:click="adicao('adicao 2')">
                                +
                            </div>
                        </div>
                        <div>
                            R$ 500,00
                        </div>
                    </div>

                </div>
            </div>
            <div class="resumo-compra">
                <div class="total">
                    <div>
                        Sub total <br>
                        Frete
                    </div>
                    <div>
                        R$1000,00 <br>
                        R$ 0,00
                    </div>
                </div>
                <div class="separacao">
                </div>
                <div class="total">
                    <div>
                        Total
                    </div>
                    <div>
                        R$1000,00
                    </div>
                </div>
                <div class="pagamento">
                    Pagamento
                </div>
                <div class="pagamento-conteiner">
                    <div class="empresas">
                        <img src="@/assets/rec.svg">
                    </div>
                    <div class="empresas">
                        <img src="@/assets/image4.svg">
                    </div>
                </div>
                <div class="pagamento-entrega">
                    <div class="empresas">
                        Pagamento na entrega
                    </div>
                </div>

            </div>
        </div>
        <div class="escrita">
            Recemente visto
        </div>
        <div class="fileira-produtos">
            <ProductCard :imagem="require('@/assets/Rectangle11.svg')" textPreco="R$500,00" textTitulo="Tênis Nike" />
            <ProductCard :imagem="require('@/assets/oldSchool.svg')" textPreco="R$150,00" textTitulo="Tênis Old School" />
            <ProductCard :imagem="require('@/assets/estranho.png')" textPreco="R$300,00" textTitulo="Tênis estranho" />
            <ProductCard :imagem="require('@/assets/nike.png')" textPreco="R$750,00" textTitulo="Tênis Nike" />
        </div>
        <div class="conteiner-oferta">
            <div class="oferta">
                <div class="cash-back">
                    Ganhe 20% de cash back
                </div>
                <div>
                    <div>
                        Válida até dia 20/03
                    </div>
                    <div class="via-oferta">
                        Via:
                        <img src="@/assets/Rectangle7.svg"> <img src="@/assets/image1.svg">
                    </div>
                </div>
                <div>
                    Entrega GRÁTIS
                </div>
                <button>
                    Compre Agora
                </button>
            </div>
            <div>
                <img src="@/assets/Rectangle9.svg" class="tenis-oferta">
            </div>
        </div>

    </div>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
    name: "Cart-page",
    components: {
        ProductCard
    },
    data() {
        return {
            unidade1: 1,
            unidade2: 1,
        }
    },
    methods: {
        adicao(option) {
            if (option == "adicao 1") {
                this.unidade1++
            } else {
                this.unidade2++
            }


        },
        subtracao(option) {
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
.escrita {
    color: #CB031D;
    font-size: 2vw;
    margin: 2vh 0 2vh 2vh;
}

.divisao-carrinho {
    display: flex;
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
    color: white;
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
    background-color: #EB1E1E;
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

.resumo-compra {
    background-color: #410E0E;
    margin: 0 1vw;
    width: 33vw;
    color: white;
    padding: 1vh;
}

.total {
    display: flex;
    justify-content: space-between;
    padding: 3vh 1vh 1vh 1vh;
}

.separacao {
    border-bottom: #FFFFFF 1px solid;
}

.pagamento-conteiner {
    display: flex;
    justify-content: space-around;
    margin: 2vh 0 6vh 0;
}

.pagamento {
    padding: 2vh;
}

.empresas {
    background-color: white;
    padding: 1vh 3vh;
    width: fit-content;
    border-radius: 25px;
    display: flex;
    align-items: center;
    color: #D90505;
    font-size: 3vh;
    cursor: pointer;
}

.pagamento-entrega {
    display: flex;
    justify-content: center;
}

.fileira-produtos {
    display: flex;
    margin-bottom: 3vh;
}
.conteiner-oferta {
    background-color: #DCF7FB;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5vw;
    font-weight: 600;
    color: #CE091F;
    font-style: normal;
    padding: 0 3vw;
}
button {
    background-color: #CB031D;
    font-size: 1vw;
    padding: 1vh;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 1vw;
}
.via-oferta {
    display: flex;
    align-items: center;
    gap: 1vw;
}
.cash-back {
    font-size: 2vw;
    padding-bottom: 1vw;
}
.tenis-oferta {
    width: 30vw;
    padding-right: 10vw;
}
.oferta {
    padding: 7vh 10vh;
}

</style>