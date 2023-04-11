<template>
    <div class="card-conteiner">
        <div class="card">
            <img :src="imagem" class="imgagem-card">
            <div class="nome-produto">
               {{textTitulo}}
            </div>
            <div class="preco">
                {{textPreco}}
            </div>
        </div>
        <div class="botao">
            Visualizar
        </div>
    </div>
</template>
<script>

export default {
    name: "productCard",
    props: ["textTitulo", "textPreco","imagem"]
}

</script> 
<style scoped>
.card-conteiner {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 1vw;
    align-items: center;
}
.card {
    border-radius: 17px;
    box-shadow: 1vh 1vh 1vh lightgray;
    background-color: #CA021C;
    color: white;
    text-align: center;
}

.imgagem-card {
    width: 100%;
}

.nome-produto {
    margin-top: -1.5vh;
    border-radius: 0px 0px 10px 10px;
    padding: 1vh 0 1vh 0;
}
.preco {
    padding-bottom: 2vh;
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