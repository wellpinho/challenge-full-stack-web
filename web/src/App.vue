<template>
  <v-container grid-list-md text-xs-center>
    <div class="box">
      <v-row>
        <v-col class="col-12">
          <v-card-text class="px-0 logo">
            <img src="./assets/grupoa.svg" alt="" />
          </v-card-text>
        </v-col>

        <v-col cols="12" md="3" class="bg-menu">
          <v-card-text class="px-0">
            <p>Módulo Acadêmico</p>
          </v-card-text>
        </v-col>
        <v-col cols="12" md="9" class="students">
          <v-card-text class="px-0">
            <p class="p">Alunos</p>
          </v-card-text>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">
          <v-card-text class="px-0">
            <p>Alunos</p>
          </v-card-text>
        </v-col>
        <v-col cols="12" md="9">
          <v-card-text class="px-0">
            <Students />
          </v-card-text>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Students from "./components/Students.vue";

export default {
  name: "App",

  components: {
    Students,
  },

  data: () => ({}),
};
</script>

<style scoped>
.box {
  max-width: 1040px;
  margin: 0 auto;
}
.logo img {
  max-width: 8rem;
}

.bg-menu {
  border-radius: 0.2rem;
  color: #fff;
  background-color: #757575;
}
.bg-menu p {
  font-weight: 900;
  font-size: large;
}

.df {
  display: flex;
}

.students {
  border: 1px solid #757575;
}
.p {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
}
</style>
