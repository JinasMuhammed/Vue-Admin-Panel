<template>
  <v-container
    id="Login"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Login
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="12"
                >
                  <v-text-field
                    label="Email Address"
                    class="purple-input"
                  />
                </v-col>
         <v-col
          cols="12"
           md="12"
        >
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"

          ></v-text-field>
        </v-col>

                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="success"
                    class="mr-0"
                    to="/"
                  >
                    LOGIN
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>

   
    </v-row>
  </v-container>
</template>

<script>
  export default {
    //   mixins: [formMixins],
    data: () => ({
   loginValid: false,
   password: '',
   show1: false,
        show2: true,
        show3: false,
        show4: false,
   rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
        email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
        
    }),
    methods: {
        validate() {
            if (this.$refs.loginForm.validate()) {
                this.$emit('sendData', {
                    email: this.email,
                    password: this.password
                })

            }
        }
    }
  }
</script>
