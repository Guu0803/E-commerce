<template>
    <div>
        <div class="escrita">
            Meu Carrinho
        </div>
        <div class="divisao-carrinho">
            <div>
                <div class="faixa-vermelha">
                    <div class="subtitulosProd">
                        Produtos
                    </div>
                    <div class="subtitulosQtda">
                        Quantidade
                    </div>
                    <div class="subtitulosTotal">
                        Total
                    </div>
                </div>
                <div class="conteiner-carrinho">

                    <div v-for="item in listaItens" :key="item.titulo" class="card">

                        <div class="conteudo-card">
                            <img :src="item.imagem" class="img-card">
                            {{ item.titulo }}<br> <br>
                            {{ item.preco }}
                        </div>

                        <div class="input-dinamico">
                            <div class="botao" v-on:click="subtracao(item)">
                                -
                            </div>
                            <div class="numero-input">
                                {{ item.unidade }}
                            </div>
                            <div class="botao" v-on:click="adicao(item)">
                                +
                            </div>
                        </div>
                        <div>
                            R$ {{ parseFloat(item.precoTotal).toFixed(2) }}
                        </div>
                        <div class="lixeira">
                            <span class="material-icons delete" v-on:click="apagar(item)">
                                delete
                            </span>
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
                        R$ {{ pegarSubTotal() }} <br>
                        R$ {{ frete }}
                    </div>
                </div>
                <div class="separacao">
                </div>
                <div class="total">
                    <div>
                        Total
                    </div>
                    <div>
                        R$ {{ total() }}
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
            <ProductCard :att="atualizacao" :imagem="require('@/assets/Rectangle11.svg')" textPreco="R$500,00"
                textTitulo="Tênis Nike" preco="500" />
            <ProductCard :att="atualizacao" :imagem="require('@/assets/oldSchool.svg')" textPreco="R$150,00"
                textTitulo="Tênis Old School" preco="150" />
            <ProductCard :att="atualizacao" :imagem="require('@/assets/estranho.png')" textPreco="R$300,00"
                textTitulo="Tênis estranho" preco="300" />
            <ProductCard :att="atualizacao" :imagem="require('@/assets/nike.png')" textPreco="R$750,00"
                textTitulo="Tênis Nike Laranja" preco="750" />
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
            listaItens: [],
            frete: 25,
        }
    },
    methods: {
        adicao(item) {
            item.unidade++
            item.precoTotal = item.unidade * item.precoUnitario
        },
        subtracao(item) {
            if (item.unidade <= 1) {
                return
            } else {
                item.unidade--
                item.precoTotal = item.unidade * item.precoUnitario
            }

        },
        atualizacao() {
            let item = localStorage.getItem("item")
            item = JSON.parse(item)
            if (item) {
                this.listaItens = item
            }
            for (let index = 0; index < this.listaItens.length; index++) {
                const element = this.listaItens[index];
                element.precoTotal = element.unidade * element.precoUnitario
            }
        },
        pegarSubTotal() {
            let subTotal = 0
            for (let index = 0; index < this.listaItens.length; index++) {
                const element = this.listaItens[index];
                subTotal = subTotal + parseFloat(element.precoTotal)
            }
            if (this.listaItens.length == 0) {
                this.frete = 0
            } else {
                if (subTotal >= 700) {
                    this.frete = 0
                } else {
                    this.frete = 25
                }
            }

            return subTotal
        },
        total() {
            let total = this.pegarSubTotal()
            let valorTotal = total + this.frete
            return valorTotal
        },
        apagar(item) {
            for (let index = 0; index < this.listaItens.length; index++) {
                const element = this.listaItens[index];
                if (item.titulo == element.titulo) {
                    this.listaItens.splice(index, 1)
                }
            }
            localStorage.setItem("item", JSON.stringify(this.listaItens))
        }
    },
    created() {
        let item = localStorage.getItem("item")
        item = JSON.parse(item)
        if (item) {
            this.listaItens = item
        }
        for (let index = 0; index < this.listaItens.length; index++) {
            const element = this.listaItens[index];
            element.precoTotal = element.unidade * element.precoUnitario
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
    border-bottom: #FFFFFF 1px solid;
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

.lixeira {
    height: 23vh;
}

.delete {
    cursor: pointer;
}

.subtitulosQtda {
    width: 25%;
}

.subtitulosProd {
    width: 45%;
    padding-left: 5%;
}</style>