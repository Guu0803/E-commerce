<template>
    <div class="cartao">
        <div class="quadro-inputs">
            <img src="@/assets/Vector.svg" class="logo">
            <input type="email" placeholder="E-mail" v-model="email" v-if="input == true">
            <input type="password" placeholder="Senha" v-model="senha" v-if="input == true">
            <div class="logado" v-if="logado == true">
                Logado
            </div>
        </div>
        <div class="conteiner-botao">
            <button class="criar-conta" v-on:click="login ()" v-if="input == true">
                Entrar
            </button>
        </div>

    </div>
</template>
<script>
export default {
    name:"loginComponent",
    props:["setLogin"],
    data () {
        return {
            email:"",
            senha:"",
            usuario: false,
            input: true,
            logado: false
        }
    },
    methods: {
        login () {
            let listaSalva = localStorage.getItem("listaUsuarios")
            listaSalva = JSON.parse(listaSalva)
            if (listaSalva == null) {
                console.log("Nome ou senha incorretos")
            } else {
                for (let index = 0; index < listaSalva.length; index++) {
                    const element = listaSalva[index];
                    if (this.email == element.email && this.senha == element.senha) {
                        this.usuario = true
                        console.log(this.email)
                        this.input = false
                        this.logado = true
                        this.setLogin (this.email) 
                    }
                }
            }
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
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:1vh 0;
}
.criar-conta:hover {
    background-color: black;
    color: white;
    transition: ease-in-out;
}
.logado {
    color: #B80B0B;
    font-size: 3vh;
    font-family: 'Inter';
    width: fit-content;
    padding: 1vw;
    background-color:#E2DFDE ;
    border-radius: 10px;
}
</style>
