<template>
    <v-form ref="loginForm" v-model="loginValid" lazy-validation @submit.prevent="validate">
        <div class="px-6 my-3">
            <v-text-field ref="email" v-model="email"  label="Email" required color="grey" outlined dense validate-on-blur filled hide-details="auto" clearable clear-icon="mdi-refresh" @blur="resetField($refs.email)">
                <template slot="append">
                    <v-icon class="success-icon" color="success">mdi-check</v-icon>
                    <v-icon class="error-icon" color="error">mdi-close</v-icon>
                </template>
            </v-text-field>
        </div>
        <div class="px-6 my-3">
            <v-text-field ref="password" v-model="password" label="Password" type="password" required color="grey" outlined dense validate-on-blur filled hide-details="auto" clearable clear-icon="mdi-refresh" @blur="resetField($refs.password)">
                <template slot="append">
                    <v-icon class="success-icon" color="success">mdi-check</v-icon>
                    <v-icon class="error-icon" color="error">mdi-close</v-icon>
                </template>
            </v-text-field>
        </div>
        <!-- <div class="px-6 my-3" v-if="getUserError">
            <v-alert type="error">
                <v-row align="center">
                    <v-col class="grow py-0">
                        {{ getUserError | userError }}
                    </v-col>
                    <v-col class="shrink py-0">
                        <v-btn icon small @click="clearAccountError">
                            <v-icon>mdi-close-circle-outline</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
               
            </v-alert>
        </div> -->
        <div class="px-6 my-3">
            <v-btn color="blue" @click="validate" block class="text-capitalize white--text" type="submit" :loading="userLoading" :disabled="userLoading">
                Login
            </v-btn>
        </div>
    </v-form>
</template>
<script>
import formMixins from "../../mixins/mixin-forms"
export default {
    mixins: [formMixins],
    data: () => ({
        loginValid: false,
        email: '',
        password: ''
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