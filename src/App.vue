<template>
  <div class="cabecalho" v-on:click="fechar()">
    <router-link to="/">
      <img src="@/assets/Vector.svg" class="logo">
    </router-link>
    <div class="escritaCabecalho">
      <router-link to="/produtos/lancamentos/" class="link">
        Lançamentos
      </router-link>
      <router-link to="/produtos/masculino/" class="link">
        Masculino
      </router-link>
      <router-link to="/produtos/feminino/" class="link">
        Feminino
      </router-link>
    </div>
    <div style="display: flex;">
      <div class="barraPesquisa">
        <span class="material-icons lupa">
          search
        </span> <input type="search" placeholder="Pesquisa" class="input">
      </div>
    </div>
    <div class="cojunto-usuario" v-on:click.stop>
      <div class="menu-usuario" v-on:click="criar()" v-if="botaoOff == true">
        <span class="material-icons icones-menu">
          person
        </span>
        Criar Conta
      </div>
      <div class="menu-usuario" v-on:click="loginMetodo()" v-if="botaoOff == true">
        <span class="material-icons icones-menu">
          login
        </span>
        Login
      </div>
      <div class="menu-usuario" v-if="userOn == true">
        <span class="material-icons">
          account_circle
        </span>
        {{ email }}
      </div>
      <div class="menu-usuario">
        <span class="material-icons icones-menu">
          shopping_cart
        </span>
        <router-link to="/carrinho" class="link">
          Carrinho
        </router-link>
        <!-- <div>
          {{ numeroCarrinho }}
        </div> -->
      </div>
    </div>
  </div>
  <conta v-if="criarConta == true" />
  <login v-if="loginVariavel == true" :setLogin="setLogin" />

  <router-view v-on:click="fechar()" />

  <div class="rodape">
    <div class="contatos">
      <div>
        Sobre nós
      </div>
      <div>
        Blogs
      </div>
      <div>
        Contatos
      </div>
      <div>
        Loja
      </div>
    </div>
    <div>
      <div class="parceiros">
        Parceiros
      </div>
      <div class="conteiner-parceiros">
        <img src="@/assets/Rectangle17.svg" class="imagem-parceiros">
        <img src="@/assets/image3.svg" class="imagem-parceiros2">
      </div>
    </div>

    <div class="email">
      Mantenha conectado com a gente
      <input placeholder="Insira seu email" class="input-email">
      <button class="botao-inscrever">
        Inscreva-se
      </button>
      <div class="rede-social">
        <img src="@/assets/akar-icons_instagram-fill.svg" class="logo-rede-social">
        <img src="@/assets/akar-icons_facebook-fill.svg" class="logo-rede-social">
        <img src="@/assets/akar-icons_twitter-fill.svg" class="logo-rede-social">

      </div>
    </div>

  </div>
</template>
<script>
import conta from '@/components/CardConta.vue'
import login from '@/components/CardLogin.vue'
export default {
  components: {
    conta,
    login
  },
  data() {
    return {
      criarConta: false,
      loginVariavel: false,
      botaoOff: true,
      userOn: false,
      email: "",
      numeroCarrinho: 0
    }
  },
  methods: {
    criar() {
      if (this.loginVariavel == true) {
        this.loginVariavel = false
        this.criarConta = true
      } else {
        this.criarConta = true
      }

    },
    fechar() {
      this.criarConta = false
      this.loginVariavel = false
    },
    loginMetodo() {
      if (this.criarConta == true) {
        this.criarConta = false
        this.loginVariavel = true
      } else {
        this.loginVariavel = true
      }
    },
    setLogin(valor) {
      this.botaoOff = false
      this.userOn = true
      this.email = valor
    },
    addCarrinho () {
      this.numeroCarrinho++
    }
  }
}


</script>
<style>
body {
  margin: 0;
  font-family: 'Inter';
}

.cabecalho {
  background-color: #CD081D;
  height: 8vh;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.logo {
  width: 2vw;
  padding: 0 2vw;
}

.escritaCabecalho {
  color: white;
  display: flex;
  gap: 3vw;
  cursor: pointer;
  font-size: 1.5vw;

}

.menu-usuario {
  font-size: 2vh;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 1vh;
}

.cojunto-usuario {
  display: flex;
  gap: 1vw;
  color: white;
  margin: 1vw;


}

.link {
  text-decoration: none;
  color: white;
}

.barraPesquisa {
  display: flex;
  background-color: white;
  padding: 0.5vh 1vh;
}

.menu {
  width: 2vw;
  padding: 0 2vw;
}

.input {
  border: none;
  outline: none;
}

.lupa {
  color: #A69F9F;
  font-size: 3.5vh;
}

.rodape {
  background-color: #312D32;
  padding: 3vw 2vw 4vw 2vw;
  display: flex;
  justify-content: space-between;
  color: white;
}

.contatos {
  display: flex;
  flex-direction: column;
  gap: 2vh;
  font-style: normal;
  font-weight: 500;
  font-size: 3vh;
  cursor: pointer;
}

.parceiros {
  font-style: normal;
  font-weight: 500;
  font-size: 3vh;
  text-align: center;
}

.conteiner-parceiros {
  display: flex;
  align-items: center;
}

.imagem-parceiros {
  height: 10vh;
  cursor: pointer;
}

.imagem-parceiros2 {
  height: 18vh;
  cursor: pointer;
}

.email {
  display: flex;
  flex-direction: column;
  gap: 2vh;
  font-style: normal;
  font-weight: 500;
  font-size: 3vh;
}

.input-email {
  border-radius: 8px;
  border: none;
  padding: 1.5vh;
  font-style: normal;
  font-weight: 500;
  font-size: 3vh;
}

.botao-inscrever {
  border-radius: 8px;
  padding: 1.5vh;
  font-style: normal;
  font-weight: 500;
  font-size: 3vh;
}

.rede-social {
  display: flex;
  justify-content: center;
  gap: 2vw;
}

.logo-rede-social {
  height: 4vh;
  cursor: pointer;
}
</style>

