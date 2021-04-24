export default {
    data: () => ({
        genericRules: {
            requiredRule: v => !!v && /\S/.test(v) || 'Required.',
            vselectRule: v => !!v || 'Required.',
            minRule: v => (v && v.length >= 3) || 'Min 3 characters',
            passwords: [
                v => !!v || 'Password is required.',
                v => (v && v.length >= 6) || 'Min 6 characters'
            ],
            emailRules: [
                v => !!v && /\S/.test(v) || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            nameRules: [
                v => !!v && /\S/.test(v) || 'Name is required.'
            ],

            usernameRules: [
                v => !!v || 'Username required.',
                v => (v && v.length >= 3) || 'Min 3 characters',
                v => !/\s/g.test(v) || 'No spaces'
            ],

            phoneRules: [
                //v => (v && v.length <= 10) || 'Max 10 characters',
                v => (!v || /^\d+$/.test(v)) || 'Only Numbers'
            ]
        }
    }),

    methods: {
        resetField(input) {
            if (input.value === '' || input.value === undefined) {
                input.reset()
            }
        },
        reset(form) {
            form.reset()
        },
        resetValidation(form) {
            form.resetValidation()
        },

        validateCurrentField($input) {
            return $input.validate()
        }
    }
}