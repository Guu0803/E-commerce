<template>
    <div>
        <img src="@/assets/Rectangle4.svg" class="banner" v-if="parametro == 'lancamentos'">
        <img src="@/assets/masculino.svg" class="banner" v-if="parametro == 'masculino'">
        <img src="@/assets/feminino.svg" class="banner" v-if="parametro == 'feminino'">
    </div>
    <div class="corpo">
        <div class="filtro">
            Filtro <br><br>
            Marcas
            <div class="barra-pesquisa">
                <span class="material-icons lupa">
                    search
                </span>
                <input type="search" placeholder="Pesquisar marcas">
            </div>
            <div class="checkbox">
                <div>
                    <input type="checkbox"> Goldstar
                </div>
                <div>
                    <input type="checkbox"> Nike
                </div>
                <div>
                    <input type="checkbox"> Jordan
                </div>
                <div>
                    <input type="checkbox"> Adidas
                </div>
            </div>

            Preço
            <input type="range" min="100" max="5000" style="cursor: pointer;">
            <div>
                <input type="number">
                <input type="number">
            </div>
            Cor
            <div class="barra-pesquisa">
                <span class="material-icons lupa">
                    search
                </span>
                <input type="search" placeholder="Pesquisar cor">
            </div>
            <div class="checkbox">
                <div>
                    <input type="checkbox"> Vermelho
                </div>
                <div>
                    <input type="checkbox"> Preto
                </div>
                <div>
                    <input type="checkbox"> Branco / Laranja
                </div>
                <div>
                    <input type="checkbox"> Rosa
                </div>
            </div>
            Tamanho
            <div class="barra-pesquisa">
                <span class="material-icons lupa">
                    search
                </span>
                <input type="search" placeholder="Pesquisar tamanho">
            </div>
            <div class="checkbox">
                <div>
                    <input type="checkbox"> 31
                </div>
                <div>
                    <input type="checkbox"> 32
                </div>
                <div>
                    <input type="checkbox"> 33
                </div>
                <div>
                    <input type="checkbox"> 34
                </div>
                <div>
                    <input type="checkbox"> 35
                </div>
            </div>
        </div>
        <NewArrivalTable  v-if="parametro == 'lancamentos'"/>
        <FemaleTable v-if="parametro == 'feminino'"/>
        <MaleTable v-if="parametro == 'masculino'"/>
    </div>
</template>
<script>
import MaleTable from '@/components/MaleTable.vue'
import FemaleTable from '@/components/FemaleTable.vue'
import NewArrivalTable from '@/components/NewArrivalTable.vue'
export default {
    name: "Products-page",
    components: {
        NewArrivalTable,
        FemaleTable,
        MaleTable
    },
    data() {
        return {
            parametro: undefined
        }
    },
    created() {
        console.log(this.$route.params.type)
        this.parametro = this.$route.params.type
    },
    watch: {
        "$route.params.type"() {
            this.parametro = this.$route.params.type
        }
    }
}
</script>
<style scoped>
.corpo {
    display: flex;
    align-items: center;
}
.filtro {
    background: #760909;
    border-radius: 0px 100px 100px 0px;
    width: fit-content;
    height: fit-content;
    color: white;
    font-size: 3vh;
    display: flex;
    flex-direction: column;
    padding: 4vh 1vw;
}

.barra-pesquisa {
    display: flex;
    background-color: white;
    align-items: center;
    width: fit-content;
    margin: 3vh 0;
}

.lupa {
    color: #A69F9F;
    font-size: 3.5vh;
}

.banner {
    width: 100%;
}

input[type=search] {
    border: none;
    padding: 1vh 0.5vh;
    width: 15vw;
}

input[type=number] {
    width: 8.2vw;
    margin-bottom: 3vh;
}
.checkbox {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    margin: 0.5vh 0 3vh 0;
    cursor: pointer;
}
</style>