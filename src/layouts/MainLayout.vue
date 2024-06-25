<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated id="barra-topo">
      <q-toolbar>
        <q-btn 
         id="btn"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title id="titulo"> Bruno Mariano </q-toolbar-title>

        <div>
          <img
            id="logo-principal"
            src="~assets/images/logo.png"
            alt="Bruno logo"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer 
    v-model="leftDrawerOpen" 
     bordered
     breakpoint="500"
     >
     
      <q-list>
        <q-item-label header id="barra-layout">
          <img
            src="~assets/images/logo.png"
            alt="Bruno logo"
            id="logo-layout"
          />
        </q-item-label>

        <q-item class="list"
          clickable
          exact
          to="/menu"
          >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Menu</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="list"
          clickable
          exact
          to="/servicos"
          >
          <q-item-section avatar>
            <q-icon name="content_cut" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Serviços</q-item-label>
          </q-item-section>
        </q-item>


        <q-item class="list"
          clickable
          exact
          to="/agenda"
          >
          <q-item-section avatar>
            <q-icon name="calendar_month" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Agenda</q-item-label>
          </q-item-section>
        </q-item>

      


        <EssentialLink
          class="list"
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";


defineOptions({
  name: "MainLayout",
});

const linksList = [

  {
    title: "Localização",
    caption: "",
    icon: "share_location",
    link: "https://www.google.com/maps/place/R.+Juriti,+35+-+Passo+das+Pedras,+Gravata%C3%AD+-+RS/@-29.9422875,-51.0080517,17z/data=!3m1!4b1!4m5!3m4!1s0x95190b49c16cdb0b:0x47cd965a09622666!8m2!3d-29.9422875!4d-51.0054768?entry=ttu",
  },

  {
    title:"Instagram", 
    caption: "", 
    icon:"link", 
    link:"https://www.instagram.com/bruno_marianobarber?igsh=bzh1Z200NjhhOG9h"
  }
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}


</script>

<style scoped>
#barra-topo {
  height: 100px;
}

#btn {
  color: rgb(184, 184, 184);
  
}

#btn:hover {
  color: rgb(255, 255, 255);
}

#barra-layout {
  padding: 30px;
  background-color: #000000;
  
}
#titulo {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1.9em;
  color: rgb(184, 184, 184);
}

#titulo:hover {
  color: white;
}

#logo-principal {
  width: 90px;
  height: 90px;
  text-align: center;
}

#logo-layout {
  width: 200px;
  height: 200px;
  margin: auto;
}

.list {
  padding: 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1.3em;
  margin-top: 15px;
}
</style>
