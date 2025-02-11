// 检测系统颜色模式并切换
function toggleColorScheme() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// 监听系统颜色模式变化
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', toggleColorScheme);

// 初始化
toggleColorScheme();