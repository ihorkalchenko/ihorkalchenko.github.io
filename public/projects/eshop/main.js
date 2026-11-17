
// header
Vue.component('app-header', {
    props: ['logo'],

    template: `
        <header class="header">
            <div class="container">
                <a href="#" class="logo" v-html="logo"></a>

                <slot></slot>
            </div>
        </header>
    `
});

// footer
Vue.component('app-footer', {
    template: `
        <footer class="footer">
            <div class="container">
                <p>&copy; {{ copyright }} Eshop. The experimental product page.</p>
            </div>
        </footer>
    `,

    computed: {
        copyright() {
            return new Date().getFullYear();
        }
    }
});

// cart
Vue.component('app-cart', {
    props: ['cart'],

    template: `
        <div class="cart">
            <span class="cart-icon"></span>
            <transition name="show-up" mode="out-in">
                <span class="cart-text" :key="cart">{{ cart }}</span>
            </transition>
        </div>
    `
});

// breadcrumb
Vue.component('app-breadcrumb', {
    template: `
        <nav class="breadcrumb">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li class="is-active"><a href="#">Apple Sillicon Case</a></li>
            </ul>
        </nav>
    `
});

// product
Vue.component('app-product', {
    template: `
        <div class="product">
            <div class="product-image">
                <div class="full-image">
                    <div class="full-image-inner">
                        <img :src="image" />
                    </div>
                </div>
            </div>
            <div class="product-info">
                <div class="product-content">
                    <div class="product-title">
                        <h1>{{ product }}</h1>
                    </div>

                    <div class="product-sku">
                        <p>SKU: {{ sku }}</p>
                    </div>

                    <div class="product-price">
                        <p>{{ priceFilter }}</p>
                    </div>

                    <div class="product-stock">
                        <p>{{ inStock ? 'In Stock' : 'Out of stock' }}</p>
                    </div>

                    <div class="product-colors">
                        <div 
                            class="variant"
                            v-for="variant in variants"
                            :key="variant.variantId"
                            :style="{backgroundColor: variant.variantColor}"
                            @mouseover="updateVariant(variant.variantImage)"
                        >
                        </div>
                    </div>

                    <div class="product-details">
                        <h4>Detail(s):</h4>
                        <ul>
                            <li v-for="detail in details">{{ detail }}</li>
                        </ul>
                    </div>

                    <button type="button" class="btn is-green" @click="addToCart">Add To Cart</button>
                </div>
            </div>
        </div>
    `,

    data() {
        return {
            product: 'iPhone Case',
            sku: 2232,
            price: 15,
            inStock: true,
            image: 'https://images-na.ssl-images-amazon.com/images/I/419rCJZ2xfL._SL1024_.jpg',
            details: [
                "Designed for iPhone 8, this silicone case fits snugly over the volume buttons, side button, and curves of your device without adding bulk",
                "A soft microfiber lining on the inside helps protect your iPhone.",
                "The silky-soft finish of the silicone exterior feels great in your hand.",
                "And you can keep it on all the time, even when you’re charging wirelessly."
            ],
            variants: [
                {
                    variantId: 2232,
                    variantColor: 'black',
                    variantImage: 'https://images-na.ssl-images-amazon.com/images/I/41a3A179dIL._SL1024_.jpg'
                },
                {
                    variantId: 2233,
                    variantColor: 'white',
                    variantImage: 'https://images-na.ssl-images-amazon.com/images/I/412kSjgSfAL._SL1024_.jpg'
                },
                {
                    variantId: 2234,
                    variantColor: 'red',
                    variantImage: 'https://images-na.ssl-images-amazon.com/images/I/417Cse5NZpL._SL1024_.jpg'
                },
                {
                    variantId: 2235,
                    variantColor: 'darkblue',
                    variantImage: 'https://images-na.ssl-images-amazon.com/images/I/419rCJZ2xfL._SL1024_.jpg'
                }
            ]
        }
    },

    methods: {
        addToCart: function() {
            this.$emit('add-to-cart');
        },
        updateVariant: function(variantImage) {
            this.image = variantImage;
        }
    },

    computed: {
        priceFilter: function() {
            return '$' + this.price.toFixed(2);
        }
    }
});


var app = new Vue({
    el: '#app',
    
    data: {
        title: 'Eshop',
        cart: 0
    },

    methods: {
        updateCart() {
            this.cart += 1
        }
    },

    computed: {
        logo() {
            return '<b>' + this.title[0] + '</b>' + this.title.slice(1);
        }
    }
});