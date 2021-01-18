<template>
  <div id="app">
    <v-app id="inspire" class="pa-12">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="User.name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="User.surname"
          :counter="20"
          :rules="surnameRules"
          label="Surname"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="User.pesel"
          label="PESEL"
          required
        ></v-text-field>
        <v-text-field
          v-model="User.dateOfBirth"
          label="Date of birth"
          required
        ></v-text-field>
        <v-text-field
          v-model="User.address"
          label="Address"
          required
        ></v-text-field>

        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
          Reset Form
        </v-btn>

        <v-btn color="warning" @click="resetValidation">
          Reset Validation
        </v-btn>
      </v-form>
      <v-snackbar v-model="snackbar">
        {{ text }}

        <v-snackbar v-model="snackbar" :vertical="vertical">
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-snackbar>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "Users",

  data: () => ({
    snackbar: false,
    text: "User registered succesfully",
    User: {
      name: "",
      surname: "",
      pesel: "",
      address: "",
      dateOfBirth: "",
    },
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    Address: "",
    surname: "",
    surnameRules: [
      (v) => !!v || "Surname is required",
      (v) => (v && v.length <= 20) || "Surname must be less than 20 characters",
    ],
    pesel: "",
    dateOfBirth: "",
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();

      this.$http
        .post("https://localhost:5001/Customers", this.User)
        .then((result) => {
          //throw snackbar
          this.snackbar = true;
          setTimeout(function() {
            this.snackbar = false;
          }, 3000);
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
