import {
    ALERT_EMAIL_IN_USE,
    ALERT_USERNAME_IN_USE
} from "@/base/config"
import ApiService from '@/base/api/api.service'

export default {
    data: () => ({
        emailChecking: false,
        emailSuccess: false,
        emailErrorMessages: [],
        emailTimeout: null,
        usernameChecking: false,
        userNameErrorMessages: [],
        userNameSuccess: false,
        userNameTimeout: null
    }),

    methods: {
        checkUsername() {
            if (!this.$refs.username.validate()) {
                this.userNameSuccess = false
                return
            }

            if (this.userNameTimeout) clearTimeout(this.userNameTimeout)
            this.userNameTimeout = setTimeout(() => {
                if(this.$refs.username.value === this.user.username) {
                  this.userNameSuccess = false
                  this.userNameErrorMessages = []
                  return
                }
                this.usernameChecking = true
                ApiService.checkUsername(this.$refs.username.value)
                    .then(res => {
                        this.usernameChecking = false
                        if (res) this.userNameSuccess = true
                        this.userNameErrorMessages = []
                    })
                    .catch(() => {
                        this.usernameChecking = false
                        this.userNameSuccess = false
                        this.userNameErrorMessages.push(ALERT_USERNAME_IN_USE)
                    })
            }, 500)
        },

        checkEmail() {
            if (!this.$refs.email.validate()) {
                this.emailSuccess = false
                return
            }

            if (this.emailTimeout) clearTimeout(this.emailTimeout)
            this.emailTimeout = setTimeout(() => {
                if(this.$refs.email.value === this.user.email) {
                  this.emailSuccess = false
                  this.emailErrorMessages = []
                  return
                }
                this.emailChecking = true
                ApiService.checkEmail(this.$refs.email.value)
                    .then(res => {
                        this.emailChecking = false
                        if (res) this.emailSuccess = true
                        this.emailErrorMessages = []
                    })
                    .catch(() => {
                        this.emailChecking = false
                        this.emailSuccess = false
                        this.emailErrorMessages.push(ALERT_EMAIL_IN_USE)
                    })
            }, 500)
        }
    }
}