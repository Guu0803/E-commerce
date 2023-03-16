<template>
  <div class="cabecalho">
    <router-link to="/">
      <img src="@/assets/Vector.svg" class="logo">
    </router-link>
    <div class="escritaCabecalho">
      <router-link to="/products" class="link">
        Lançamentos
      </router-link>
      <router-link to="/products" class="link">
        Masculino
      </router-link>
      <router-link to="/products" class="link">
        Feminino
      </router-link>
      <router-link to="/products" class="link">
        Marcas
      </router-link>
    </div>
    <div class="barraPesquisa">
      <span class="material-icons lupa">
        search
      </span> <input type="search" placeholder="Pesquisa" class="input">
    </div>
    <img src="@/assets/menu.svg" class="menu">
  </div>
  <router-view />
</template>
<style>
body {
  margin: 0;
}

.cabecalho {
  background-color: #CD081D;
  height: 8vh;
  display: flex;
  align-items: center;
  width: 100vw;
}

.logo {
  width: 2vw;
  margin-left: 2vw;
}

.escritaCabecalho {
  color: white;
  display: flex;
  gap: 3vw;
  cursor: pointer;
  margin-left: 30vw;
}

.link {
  text-decoration: none;
  color: white;
}

.barraPesquisa {
  margin-left: 16vw;
  display: flex;
  background-color: white;
  padding: 0.5vh 1vh;
}

.menu {
  width: 2vw;
  margin-left: 2vw;
}

.input {
  border: none;
  outline: none;
}

.lupa {
  color: #A69F9F;
  font-size: 3.5vh;
}
</style>

