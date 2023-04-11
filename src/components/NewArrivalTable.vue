<template>
<div class="produtos">
            <div class="escrita-lancamentos">
                Lançamentos
            </div>
            <div class="fileira-lancamentos">
                <ProductCard :imagem="require('@/assets/Rectangle11.svg')" textPreco="R$500,00" textTitulo="Tênis Nike" style="width: 22vw;"/>
                <ProductCard :imagem="require('@/assets/oldSchool.svg')" textPreco="R$150,00" textTitulo="Tênis Old School" style="width: 22vw;"/>
                <ProductCard :imagem="require('@/assets/sapato-fem5.svg')" textPreco="R$500,00" textTitulo="Bota" style="width: 22vw;"/>
            </div>
            <div class="fileira-lancamentos">
                <ProductCard :imagem="require('@/assets/nike.png')" textPreco="R$750,00" textTitulo="Tênis Nike" style="width: 22vw;"/>
                <ProductCard :imagem= "require ('@/assets/sapato-fem9.svg')"  textPreco="R$300,00"  textTitulo="Bota Cano Baixo" style="width: 22vw;"/>
                <ProductCard :imagem= "require ('@/assets/sapato-fem8.svg')"   textPreco="R$350,00" textTitulo="Salto Alto" style="width: 22vw;"/>
            </div>
            <div class="fileira-lancamentos">
                <ProductCard :imagem= "require ('@/assets/new-balance.png')" textPreco="R$200,00" textTitulo="New Balance" style="width: 22vw;" />
                <ProductCard :imagem= "require ('@/assets/sapato-fem4.svg')" textPreco="R$500,00" textTitulo="Tênis Esportivo" style="width: 22vw;" />
                <ProductCard :imagem="require('@/assets/nike.png')" textPreco="R$750,00" textTitulo="Tênis Nike" style="width: 22vw;"  />
            </div>
        </div>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
    name:"newArrivalTableComponent",
    components: {
        ProductCard
    }
    
}
</script>
<style>
.produtos {
    display: flex;
    flex-direction: column;
    gap:3vh;
    margin-bottom: 3vh;
    align-items: center;
    flex: 1;
}
.escrita-lancamentos {
    color: #CB031D;
    font-size: 2vw;
    margin: 1vh 0 2vh 2vw;
}
.fileira-lancamentos{
    display: flex;
}
</style>