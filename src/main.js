import { createApp } from 'vue'
import App from './App.vue'

// import Bootstrap 5
import './styles/all.scss';
//  import Bootstrap-icon
import 'bootstrap-icons/font/bootstrap-icons.css';

import router from './router';

createApp(App).use(router).mount('#app')
