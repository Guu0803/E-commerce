<template>
    <div class="cartao">
        <div class="quadro-inputs">
            <img src="@/assets/Vector.svg" class="logo">
            <input type="email" placeholder="E-mail" v-model="email">
            <input type="password" placeholder="Senha" v-model="senha">
            <input type="password" placeholder="Confirmar senha" v-model="ConfirmarSenha">
        </div>
        <div class="conteiner-botao">
            <button class="criar-conta" v-on:click="criar ()">
                Criar conta
            </button>
        </div>

    </div>
</template>
<script>
export default {
    name: "modalComponent",

    data () {
        return {
            email:"",
            senha:"",
            ConfirmarSenha: "",
            listaUsuarios: []
        }
    },
    methods: {
        criar () {
            let  user = {
                email: this.email,
                senha: this.senha
            }
            this.listaUsuarios.push (user)
            localStorage.setItem("listaUsuarios", JSON.stringify(this.listaUsuarios))
            let listaSalva = localStorage.getItem("listaUsuarios")
            listaSalva = JSON.parse(listaSalva)
            console.log(listaSalva)
        }
    },
    created() {
        let listaSalva = localStorage.getItem("listaUsuarios")
        listaSalva = JSON.parse(listaSalva)
        if (listaSalva) {
            this.listaUsuarios = listaSalva
        }
    }
}
</script>
<style scoped>
.cartao {
    position: absolute;
    right: 10vw;
    top: 10vh;
    background-color: #CD081D;
    border-radius: 0 35px 0 35px;
}
.logo {
    padding: 2vh 0;
}
.quadro-inputs{
    display: flex;
    flex-direction: column;
    gap: 1vh;
    align-items: center;
    
    width: 20vw;
}

input {
    border: none;
    text-align: center;
    padding: 1vh;
    width: 15vw;
}

.criar-conta {
    width: 10vw;
    padding: 1vh;
    background-color: #E2DFDE;
    color: #B80B0B;
    border: none;
    border-radius: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 2.5vh;
    cursor: pointer;
}
.conteiner-botao {
    height: 8vh;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin:0 1vw 1vh 0;
}
</style>