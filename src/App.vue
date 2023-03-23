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
</style>

