import priceSelector from './price-selector.vue';

const priceInstaller = {
    install (Vue) {
        Vue.component(priceSelector.name, priceSelector)
    }
}

if (typeof window !== undefined && window.Vue) {
    window.Vue.use(priceSelector);
}

export default priceInstaller
