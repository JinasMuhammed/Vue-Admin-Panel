export default {
    methods: {
        /**
         * Scroll Loading Helpers
         * For all
         */
        documentHeight() {
            let B = document.body,
                H = document.documentElement,
                height
            if (typeof document.height !== 'undefined') {
                height = document.height // For webkit browsers
            } else {
                height = Math.max(B.scrollHeight, B.offsetHeight, H.clientHeight, H.scrollHeight, H.offsetHeight);
            }
            return height
        },

        onScrollY(e) {
            let targetElem = e.target.dataset ? e.target.dataset.target : false
            let viewPortHeight = targetElem ? e.target.getBoundingClientRect().height : window.outerHeight || window.innerHeight
            let offsetTop = e.target.scrollTop !== undefined ? e.target.scrollTop : e.target.documentElement.scrollTop || e.target.scrollingElement.scrollTop
            let contentHeight = null
            if (targetElem) {
                contentHeight = e.target.querySelector('[data-content="scrollable"]').getBoundingClientRect().height - viewPortHeight
            } else {
                contentHeight = this.documentHeight() - viewPortHeight
            }

            let scrollPercentage = (offsetTop / contentHeight)

            if (this.onReachScrollBottom !== undefined) {
                if (scrollPercentage * 100 > 90) {
                    this.onReachScrollBottom(true)
                } else {
                    this.onReachScrollBottom(false)
                }
            }
        },

        onScrollX(e) {
            let viewPortWidth = e.target.getBoundingClientRect().width
            let offsetLeft = e.target.scrollLeft
            let cols = e.target.querySelectorAll('.col')
            let contentWidth = null
            cols.forEach(function(element) {
                contentWidth = element.getBoundingClientRect().width * cols.length
            })

            contentWidth = contentWidth - viewPortWidth

            let scrollPercentage = (offsetLeft / contentWidth)
            if (this.onReachScrollRight !== undefined) {
                if (scrollPercentage * 100 > 90) {
                    this.onReachScrollRight(true)
                } else {
                    this.onReachScrollRight(false)
                }
            }

        },
    }
}