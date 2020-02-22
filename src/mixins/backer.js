

export default {
    data() {
        return {
            prev_url: null,
        }
    },
    methods: {
        back() {
            this.$router.push(this.prev_url);
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.prev_url = from
        });
    }
}