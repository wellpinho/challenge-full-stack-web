<template>
  <v-dialog v-model="createStudent" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
        Cadastrar aluno
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Cadastro de aluno</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="fullname"
                :error-message="fullnameErrors"
                label="Nome completo*"
                required
                @input="$v.fullname.$touch()"
                @blur="$v.fullname.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                label="Email"
                required
                :error-messages="emailErrors"
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="ra"
                label="Informe registro acadêmico*"
                required
                :error-messages="raErrors"
                @input="$v.ra.$touch()"
                @blur="$v.ra.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="cpf"
                label="informe o número do documento*"
                required
                :error-messages="cpfErrors"
                type="number"
                @input="$v.cpf.$touch()"
                @blur="$v.cpf.$touch()"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close"> Fechar </v-btn>
        <v-btn :disabled="disabled" color="blue darken-1" text @click="post()">
          Criar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import api from "@/api";
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    fullname: { required },
    email: { required, email },
    ra: { required },
    cpf: { required, minLength: minLength(10) },
  },

  data: () => ({
    fullname: "",
    email: "",
    ra: "",
    cpf: "",

    createStudent: false,
    disabled: true,
    sended: false,
  }),

  watch: {
    // whenever question changes, this function will run
    cpf() {
      if (this.cpf !== "") {
        this.disabled = false;
      }
    },
    sended() {
      if (this.sended !== false) {
        window.location.reload();
      }
    },
  },

  computed: {
    fullnameErrors() {
      const errors = [];
      if (!this.$v.fullname.$dirty) return errors;
      !this.$v.fullname.minLength && errors.push("Insira o nome completo");
      !this.$v.fullname.required && errors.push("Nome é obrigatório.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Insira um email válido");
      !this.$v.email.required && errors.push("E-mail é obrigatório.");
      return errors;
    },
    raErrors() {
      const errors = [];
      if (!this.$v.ra.$dirty) return errors;
      !this.$v.ra.required && errors.push("RA é obrigatório.");
      return errors;
    },
    cpfErrors() {
      const errors = [];
      if (!this.$v.cpf.$dirty) return errors;
      !this.$v.cpf.required && errors.push("CPF é obrigatório");
      return errors;
    },
  },

  methods: {
    post() {
      const user = {
        name: this.fullname,
        email: this.email,
        RA: this.ra,
        CPF: this.cpf,
      };
      api
        .post("/users", user)
        .then(() => (this.createStudent = false), (this.sended = true))
        .catch(() => {
          alert("Whoops! User já existe. Verifique os dados e tente novamente");
        });
    },
    close() {
      this.createStudent = false;
    },
  },
};
</script>
