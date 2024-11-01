import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react'; // 如果你使用 React 插件

export default defineConfig(({mode}) => {
    // 加载环境变量
    const env = loadEnv(mode, './env')
    return {
        envDir: 'env',
        plugins: [react()], // 如果使用 React，添加插件
        server: {
            proxy: {
                '/api': {
                    target: env.VITE_API_BASE_URL, // 使用环境变量
                    changeOrigin: true, // 改变请求的来源
                    rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径
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
    };
});
