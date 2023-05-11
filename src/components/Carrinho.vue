<template>
    <div class="conteiner-carrinho">
        <span class="material-icons carrinho ">
            shopping_cart
        </span>
        <div class="contador">
            {{ contadorCarrinho }}
        </div>
    </div>
</template>
<script>
export default {
    name:"carrinhoAdd",
    props:["contadorCarrinho"]
}

</script>
<style scoped>
.conteiner-carrinho {
    color: white;
    position: fixed;
    bottom: 10vh;
    right: 8vw;
    display: flex;
    cursor: pointer;
}
.carrinho {
    font-size: 6vh;
    background-color: #CE091F;
    width: 5vw;
    height: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: -3vh;
}
.contador {
    width: 2vw;
    height: 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: black;
    
    
}
</style>