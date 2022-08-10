<template>
  <div>
    <v-data-table :headers="headers" :items="students" :search="search">
      <template v-slot:top>
        <v-toolbar flat>
          <div class="alig-items">
            <v-text-field
              v-model="search"
              label="Digite sua busca"
              append-icon="mdi-magnify"
            ></v-text-field>
          </div>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Registro acadêmico"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.calories"
                        label="Nome"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.fat"
                        label="CPF"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(students.id)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="getStudents"> Reset </v-btn>
      </template>
    </v-data-table>
    <v-app>
      <NewStudent />
    </v-app>
  </div>
</template>

<script>
import api from "@/api";
import NewStudent from "@/components/NewStudent.vue";

export default {
  data: () => ({
    search: "",
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "Registro acadêmico", value: "RA" },
      {
        text: "Nome",
        value: "name",
      },
      { text: "CPF", value: "CPF" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    students: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },
  created() {
    this.getStudents();
  },
  methods: {
    getStudents() {
      api.get("/users").then((response) => {
        this.students.push(...response.data);
      });
    },
    deleteItem(id) {
      api
        .delete(`/users/${id.id}`)
        .then(() => window.location.reload())
        .catch(() => {});
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
  components: { NewStudent },
};
</script>

<style>
.v-toolbar__content {
  margin-top: 10px;
}
.v-data-table__wrapper {
  margin-top: 50px;
}
.alig-items {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
</style>
