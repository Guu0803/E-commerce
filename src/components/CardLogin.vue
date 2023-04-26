<template>
    <div class="cartao">
        <div class="quadro-inputs">
            <img src="@/assets/Vector.svg" class="logo">
            <input type="email" placeholder="E-mail" v-model="email">
            <input type="password" placeholder="Senha" v-model="senha">
        </div>
        <div class="conteiner-botao">
            <button class="criar-conta" v-on:click="login ()">
                Entrar
            </button>
        </div>

    </div>
</template>
<script>
export default {
    name:"loginComponent",
    data () {
        return {
            email:"",
            senha:"",
            usuario: false
        }
    },
    methods: {
        login () {
            let listaSalva = localStorage.getItem("listaUsuarios")
            listaSalva = JSON.parse(listaSalva)
            // console.log(listaSalva)
            if (listaSalva == null) {
                console.log("Nome ou senha incorretos")
            } else {
                for (let index = 0; index < listaSalva.length; index++) {
                    const element = listaSalva[index];
                    if (this.email == element.email && this.senha == element.senha) {
                        this.usuario = true
                        
                        console.log(this.email)
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
    height: 8vh;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin:0 1vw 1vh 0;
}
</style>
