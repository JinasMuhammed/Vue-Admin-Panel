import {
    SIGN_OUT_USER
} from '@/store/actions.type'

import {
    SET_ACCOUNT_ERROR,
    SET_SETTINGS_DRAWER
} from '@/store/mutations.type'

import {
    DATE_FORMAT
} from "@/base/config"

import {
    SHARE_API_URL
} from "@/base/api/config"


export default {
    data: () => ({
        dateFormat: DATE_FORMAT // Format for date
    }),
    /*
     * Destroying Component events and scenes
     */
    destroyed() {
        // Kill scenes on component destroy
        this.destroyScenes()
    },

    /*
     * Computed for all
     */
    computed: {
        isDesktop() {
            return this.$vuetify.breakpoint.mdAndUp
        },

        // Check if loged in
        isLogedIn() {
            return this.$store.getters.getLogedInStatus
        },

        // User details
        user(){
            return this.$store.getters.getUser
        },

        // For User Loading
        userLoading() {
            return this.$store.getters.getUserLoading
        },

        // Login related errors
        getUserError() {
            return this.$store.getters.getAccountError
        },

        // Share API url 
        ShareUrl() {
            return SHARE_API_URL
        }
    },

    /**
     * Methods
     * For all
     */
    methods: {

        /*
         * Destroyer of scenes
         */
        destroyScenes() {
            if (this.scrollController) this.scrollController = null
            if (this.scene) this.scene = null
        },

        /*
        * User setting drawer
        */
        callUserSettingDrawer(value) {
            this.$store.commit(SET_SETTINGS_DRAWER, value)
        },

        /*
        * Accounts
        */
        signOut() {
            this.$store.dispatch(SIGN_OUT_USER)
        },

        clearAccountError() {
            this.$store.commit(SET_ACCOUNT_ERROR, null)
        },

        roleFinder(val) {
            return this.$store.state.account.accountTypes.find(role => role.value === val).label
        }
    }
}