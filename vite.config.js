import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
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
