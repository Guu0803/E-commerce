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
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
</template>
<script>

import ProductCard from '@/components/ProductCard.vue';
export default {
    name: "Home-page",
    components: {
        ProductCard
    }
}
</script>
<style>
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
}
</style>