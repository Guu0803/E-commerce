<template>
    <div class="produtos">
                <div class="escrita-lancamentos">
                    Feminino
                </div>
                <div class="fileira-lancamentos">
                    <ProductCard :imagem="require('@/assets/sapato-fem1.svg')" textPreco="R$500,00" textTitulo="Salto Alto" style="width: 22vw;"/>
                    <ProductCard :imagem="require('@/assets/sapato-fem2.svg')" textPreco="R$250,00" textTitulo="Salto Alto" style="width: 22vw;"/>
                    <ProductCard :imagem="require('@/assets/sapato-fem3.svg')" textPreco="R$500,00" textTitulo="Bota Lenhador Feminino" style="width: 22vw;"/>
                </div>
                <div class="fileira-lancamentos">
                    <ProductCard :imagem= "require ('@/assets/sapato-fem4.svg')" textPreco="R$500,00" textTitulo="Tênis Esportivo" style="width: 22vw;" />
                    <ProductCard :imagem="require('@/assets/sapato-fem5.svg')" textPreco="R$500,00" textTitulo="Bota" style="width: 22vw;"/>
                    <ProductCard :imagem= "require ('@/assets/sapato-fem6.svg')"  textPreco="R$300,00"  textTitulo="Bota Cano Medio" style="width: 22vw;"/>
                    
                </div>
                <div class="fileira-lancamentos">
                    <ProductCard :imagem= "require ('@/assets/sapato-fem7.svg')"   textPreco="R$800,00" textTitulo="Salto Alto" style="width: 22vw;"/>
                    <ProductCard :imagem= "require ('@/assets/sapato-fem8.svg')"   textPreco="R$350,00" textTitulo="Salto Alto" style="width: 22vw;"/>
                    <ProductCard :imagem= "require ('@/assets/sapato-fem9.svg')"  textPreco="R$300,00"  textTitulo="Bota Cano Baixo" style="width: 22vw;"/>
                </div>
            </div>
    </template>
    <script>
    import ProductCard from '@/components/ProductCard.vue'
    export default {
        name:"FemaleTableComponent",
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