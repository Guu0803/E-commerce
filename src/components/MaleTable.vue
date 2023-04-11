<template>
    <div class="produtos">
                <div class="escrita-lancamentos">
                    Masculino
                </div>
                <div class="fileira-lancamentos">
                    <ProductCard :imagem="require('@/assets/Rectangle11.svg')" textPreco="R$500,00" textTitulo="Tênis Nike" style="width: 22vw;"/>
                    <ProductCard :imagem="require('@/assets/oldSchool.svg')" textPreco="R$150,00" textTitulo="Tênis Old School" style="width: 22vw;"/>
                    <ProductCard :imagem="require('@/assets/vans.svg')" textPreco="R$500,00" textTitulo="Vans" style="width: 22vw;"/>
                </div>
                <div class="fileira-lancamentos">
                    <ProductCard :imagem="require('@/assets/nike.png')" textPreco="R$750,00" textTitulo="Tênis Nike" style="width: 22vw;"/>
                    <ProductCard :imagem= "require ('@/assets/estranho.png')"  textPreco="R$300,00"  textTitulo="Tênis Vermelho" style="width: 22vw;"/>
                    <ProductCard :imagem= "require ('@/assets/nike.png')"   textPreco="R$350,00" textTitulo="Salto Alto" style="width: 22vw;"/>
                </div>
                <div class="fileira-lancamentos">
                    <ProductCard :imagem= "require ('@/assets/new-balance.png')" textPreco="R$200,00" textTitulo="New Balance" style="width: 22vw;" />
                    <ProductCard :imagem= "require ('@/assets/sapato.png')" textPreco="R$500,00" textTitulo="Sapato Social" style="width: 22vw;" />
                    <ProductCard :imagem="require('@/assets/nike.png')" textPreco="R$750,00" textTitulo="Tênis Nike" style="width: 22vw;"  />
                </div>
            </div>
    </template>
    <script>
    import ProductCard from '@/components/ProductCard.vue'
    export default {
        name:"maleTableComponent",
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