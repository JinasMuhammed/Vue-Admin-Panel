import { gsap } from "gsap"
import { DrawSVGPlugin } from "@/plugins/gsap/DrawSVGPlugin.min.js"
import {
    SET_ACCOUNT_LOGO_ANIMATION_DONE
} from '@/store/mutations.type.js'
gsap.registerPlugin(DrawSVGPlugin)

export default {
    methods: {
        /*
         * Signup animation helpers
         */
        signupEntry() {
            let tl = gsap.timeline({ delay: 0.2 })

            // Drawing logo of first time
            if (!this.$store.state.account.accountLogoAnimationDone) {
                tl.add(this.animateLogo())
                this.$store.commit(SET_ACCOUNT_LOGO_ANIMATION_DONE, true)
            }
            // Adding body reveal animation
            tl.add(this.bodyReveal())
        },

        // Logo animation
        animateLogo() {
            let iconWrapper = this.$el.querySelector('.icon-wrapper'),
                symbolPaths = this.$el.querySelectorAll('.icon-logo__symbol > path'),
                logoTexts = this.$el.querySelectorAll('.icon-logo--texts > path'),
                tl = gsap.timeline()

            gsap.set(iconWrapper, {autoAlpha: 1})
            gsap.set(symbolPaths, { x: 85})

            tl.from(symbolPaths, {
                    duration: 0.8,
                    autoAlpha: 0
                })
                .to(symbolPaths, { duration: 1, fill: '#000' }, 0.1)
                .to(symbolPaths, {
                    duration: 0.5,
                    x: 0
                }, 0.5)
                .from(logoTexts, {
                    duration: 0.5,
                    x: 50,
                    autoAlpha: 0,
                    stagger: 0.05
                }, 0.8)

            

            return tl
        },

        // Body reveal
        bodyReveal() {
            let body = this.$refs.body,
                bodyContentHeight = body.querySelector('.signup-body__content').getBoundingClientRect().height,
                tl = gsap.timeline(),
                revealItems = body.querySelectorAll('.reveal-item')

            tl.to(body, {
                    duration: 0.8,
                    height: bodyContentHeight + 30,
                    //ease: "back.out(1.7)"
                })
                .from(revealItems, {
                    duration: 0.5,
                    y: 50,
                    stagger: 0.05,
                    autoAlpha: 0
                }, 0.2)

            return tl
        },

        // Body leave
        bodyLeave(callBack) {
            let body = this.$refs.body,
                tl = gsap.timeline(),
                revealItems = body.querySelectorAll('.reveal-item')

            tl.to(revealItems, {
                    duration: 0.5,
                    y: 50,
                    stagger: -0.05,
                    autoAlpha: 0
                })
                .to(body, {
                    duration: 0.5,
                    height: 0,
                }, 0.4)
                .add(callBack)


            return tl
        }
    }
}