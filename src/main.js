import { createApp } from 'vue';
import { createPrismic } from '@prismicio/vue';
import App from './App.vue';

import 'normalize.css';
import './styles/index.scss';

const prismic = createPrismic({
  endpoint: 'https://comment-module.cdn.prismic.io/api/v2',
});

createApp(App).use(prismic).mount('#app');
