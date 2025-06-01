// import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import 'viewerjs/dist/viewer.min.css'
import imageViewer from 'vitepress-plugin-image-viewer'
import { useRoute } from 'vitepress'
import './custom.css'

export default {
  Layout,
  setup() {
    const route = useRoute()
    imageViewer(route)
  },
}
