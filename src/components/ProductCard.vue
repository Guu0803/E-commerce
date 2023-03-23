<template>
    <div class="card-conteiner">
        <div class="card">
            <img src="@/assets/Rectangle11.svg" class="imgagem-card">
            <div class="nome-produto">
                Tenis vermelho
            </div>
        </div>
        <div class="botao">
            Visualizar
        </div>
    </div>
</template>
<script>
export default {
    name: "productCard"
}

</script> 
<style>
.card-conteiner {
    display: flex;
    flex-direction: column;
    width: 23vw;
    margin: 0 1vw;
    align-items: center;


}
.card {
    border-radius: 10px;
    box-shadow: 1vh 1vh 1vh lightgray;
}

.imgagem-card {
    width: 100%;
}

.nome-produto {
    background-color: #CA021C;
    margin-top: -1.5vh;
    border-radius: 0px 0px 10px 10px;
    color: white;
    text-align: center;
    padding: 1vh 0 2vh 0;
}

.botao {
    background-color: #CA021C;
    padding: 1vh 4vw;
    border-radius: 10px;
    box-shadow: 5px 5px 10px 3px lightgray;
    color: white;
    margin-top: -1vh;
    cursor: pointer;
}
</style>