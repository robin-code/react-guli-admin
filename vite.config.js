import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:9000', // 目标后端服务器的地址
                changeOrigin: true, // 是否改变请求源
                rewrite: (path) => path.replace(/^\/api/, ''), // 可选：重写路径，例如去掉 `/api`
            },
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                // 在此处配置 Less 选项
                javascriptEnabled: true,
                modifyVars: {
                    '@primary-color': '#1DA57A', // 修改全局变量
                },
            },
        },
    },
})
