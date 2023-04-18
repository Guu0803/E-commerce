<template>
  <div class="cabecalho">
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
      <router-link to="/carrinho" class="link">
        Meu carrinho
      </router-link>
    </div>
    <div style="display: flex;">
      <div class="barraPesquisa">
        <span class="material-icons lupa">
          search
        </span> <input type="search" placeholder="Pesquisa" class="input">
      </div>
      <img src="@/assets/menu.svg" class="menu">
    </div>
  </div>

  <router-view />

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
}</style>

