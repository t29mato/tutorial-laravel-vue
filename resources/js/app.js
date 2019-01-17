import './bootstrap'
import Vue from 'vue'

// ストアをインポートする
import store from './store'

// ルーティングの定義をインポートする
import router from './router'

// ルートコンポーネントをインポートする
import App from './App.vue'

const createApp = async() => {
    await store.dispatch('auth/currentUser')

    new Vue({
        el: '#app',
        router, // ルーティングの定義を書き込む
        store,
        components: { App }, // ルートコンポーネントの使用を宣言する
        template: '<App />'  // ルートコンポーネントを描画する
    })
}

createApp()
