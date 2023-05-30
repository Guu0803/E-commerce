<template>
    <div style="padding-bottom: 15vh;">
        <img src="@/assets/banner.svg" class="banner">
        <div class="conteinerOferta">
            <div class="oferta">
                
                <div class="cash-back">
                    Ganhe 20% de cash back
                </div>
                <div>
                    <div>
                        Válida até dia 20/03
                    </div>
                    <div class="pagamento">
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
        <div class="conteiner-lancamentos">
            Lançamentos
        </div>
        <div class="fileira-lancamentos">
            <ProductCard  :carrinhoAdd="addContador" :imagem="require('@/assets/Rectangle11.svg')" textPreco="R$500,00" textTitulo="Tênis Nike" preco="500"/>
            <ProductCard  :carrinhoAdd="addContador" :imagem="require('@/assets/oldSchool.svg')" textPreco="R$150,00" textTitulo="Tênis Old School" preco="150"/>
            <ProductCard  :carrinhoAdd="addContador" :imagem="require('@/assets/estranho.png')" textPreco="R$300,00" textTitulo="Tênis estranho" preco="300"/>
            <ProductCard  :carrinhoAdd="addContador" :imagem="require('@/assets/nike.png')" textPreco="R$750,00" textTitulo="Tênis Nike Laranja" preco="750"/>
        </div> 
        <div class="fileira-lancamentos">
            <ProductCard  :carrinhoAdd="addContador" :imagem= "require ('@/assets/new-balance.png')" textPreco="R$200,00" textTitulo="New Balance" preco="200"  />
            <ProductCard  :carrinhoAdd="addContador" :imagem= "require ('@/assets/all-star.svg')" textPreco="R$520,00" textTitulo="All Star" preco="520" />
            <ProductCard  :carrinhoAdd="addContador" :imagem= "require ('@/assets/sapato.png')"  textPreco="R$800,00"  textTitulo="Sapato Social Democrata" preco="800" />
            <ProductCard  :carrinhoAdd="addContador" :imagem= "require ('@/assets/vans.svg')"   textPreco="R$450,00" textTitulo="Vans" preco="450"/>
        </div>
        <div class="conteinerOferta2">
            <div class="oferta">
                <div class="cash-back">
                    Ganhe 15% de cash back
                </div>
                <div>
                    <div>
                        Válida até dia 19/03
                    </div>
                    <div class="pagamento">
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
        <div class="conteiner-lancamentos">
            Em alta
        </div>
        <div class="fileira-lancamentos">
            <ProductCard :carrinhoAdd="addContador" :imagem="require('@/assets/Rectangle11.svg')" textPreco="R$500,00" textTitulo="Tênis Nike" preco="500"/>
            <ProductCard :carrinhoAdd="addContador" :imagem="require('@/assets/oldSchool.svg')" textPreco="R$150,00" textTitulo="Tênis Old School" preco="150"/>
            <ProductCard :carrinhoAdd="addContador" :imagem="require('@/assets/estranho.png')" textPreco="R$300,00" textTitulo="Tênis estranho" preco="300"/>
            <ProductCard :carrinhoAdd="addContador" :imagem="require('@/assets/nike.png')" textPreco="R$750,00" textTitulo="Tênis Nike Laranja" preco="750"/>
        </div>
        <RouterLink to="/carrinho">
            <Carrinho :contadorCarrinho="contador"/>
        </RouterLink>
        
    </div>
</template>
<script>
import Carrinho from '@/components/Carrinho.vue'
import ProductCard from '@/components/ProductCard.vue';
import { RouterLink } from 'vue-router';
export default {
    name: "Home-page",
    components: {
    ProductCard,
    Carrinho,
    RouterLink
},
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        addContador () {
            this.contador++
        }
    },
    created () {
        let contadorAtt = localStorage.getItem("item")
        contadorAtt = JSON.parse(contadorAtt)
        if (contadorAtt) {
            this.contador = contadorAtt.length
        } else {
            this.contador = 0
        }
    }
}
</script>
<style scoped>
.banner {
    width: 100%;
}

.conteinerOferta {
    background-color: #DCF7FB;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5vw;
    font-weight: 600;
    color: #CE091F;
    font-style: normal;
}

.oferta {
    padding: 7vh 10vh;
}

.cash-back {
    font-size: 2vw;
    padding-bottom: 1vw;
}

.pagamento {
    display: flex;
    align-items: center;
    gap: 1vw;
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

button:hover {
    background-color: #960316;
    transition: 300ms;
}

.tenis-oferta {
    width: 30vw;
    padding-right: 10vw;
}

.conteiner-lancamentos {
    color: #CB031D;
    font-size: 2vw;
    margin: 4vh 0 3vh 2vw;
}
.fileira-lancamentos {
    display: flex;
    padding-top: 3vh;
}
.conteinerOferta2 {
    background-color: #DCF7FB;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5vw;
    font-weight: 600;
    color: #CE091F;
    font-style: normal;
    margin-top: 6vh;
}

</style>