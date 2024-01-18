// 导入模块
import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer';

// 配置
export default defineConfig({

  css: {
    cssCodeSplit: true,
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            'Android 4.1',
            'iOS 7.1',
            'Chrome > 31',
            'ff > 31',
            'ie >= 8',
            '> 1%',
          ],
          grid: true,
        }),
      ],
    },
  },
});