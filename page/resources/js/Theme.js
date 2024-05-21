// Vue
// 主题
const Theme = new Vue({
    el: '#Theme',
    data: {
        // 主题：true暗(默认)，false亮
        Theme: true,
        ThemeUrl: '',
    },
    // 处理逻辑函数
    methods: {
        // 获取主题
        getTheme() {
            const FMPageTheme = JSON.parse(localStorage.getItem('FM-Page-Theme'))
            this.Theme = FMPageTheme === null ? this.Theme : FMPageTheme
            this.ThemeUrl = this.Theme ? './css/ThemeDark.css' : './css/ThemeBright.css'
            return this.Theme
        },
        // 按钮切换
        upd(e) {
            this.Theme = e
            localStorage.setItem('FM-Page-Theme', JSON.stringify(this.Theme))
            this.getTheme()
        },
    },
})