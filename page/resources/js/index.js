// Vue
const app = new Vue({
    el: '#app',
    // 数据
    data: {
        // 加载器
        loading: true,
        // 主题：true暗(默认)，false亮
        Theme: true,
        // vue资源数据
        vueRes: [
            { version: '2.7.16', developUrl: '../../res/vue/vue@2.7.16/vue.js', produceUrl: '../../res/vue/vue@2.7.16/vue.min.js' },
            { version: '2.7.15', developUrl: '../../res/vue/vue@2.7.15/vue.js', produceUrl: '../../res/vue/vue@2.7.15/vue.min.js' },
            { version: '2.7.14', developUrl: '../../res/vue/vue@2.7.14/vue.js', produceUrl: '../../res/vue/vue@2.7.14/vue.min.js' },
            { version: '2.7.10', developUrl: '../../res/vue/vue@2.7.10/vue.js', produceUrl: '../../res/vue/vue@2.7.10/vue.min.js' },
            { version: '2.6.10', developUrl: '../../res/vue/vue@2.6.10/vue.js', produceUrl: '../../res/vue/vue@2.6.10/vue.min.js' },
        ],
        // axios资源数据
        axiosRes: [
            { version: '1.6.5', developUrl: '../../res/axios/axios@1.6.5/axios.js', produceUrl: '../../res/axios/axios@1.6.5/axios.min.js' },
            { version: '1.6.2', developUrl: '../../res/axios/axios@1.6.2/axios.js', produceUrl: '../../res/axios/axios@1.6.2/axios.min.js' },
            { version: '1.3.6', developUrl: '../../res/axios/axios@1.3.6/axios.js', produceUrl: '../../res/axios/axios@1.3.6/axios.min.js' },
            { version: '0.18.0', developUrl: '../../res/axios/axios@0.18.0/axios.js', produceUrl: '../../res/axios/axios@0.18.0/axios.min.js' },
        ]
    },
    // 处理逻辑函数
    methods: {
        // 按钮切换
        btnSwitch() {
            Theme.upd(this.Theme)
        },
        // 资源下载
        ResDownload(who) {
            const number = prompt('输入要下载的版本号：')
            if (number === null) {
                return
            } else {
                if (number.trim()) {
                    axios({
                        url: `https://registry.npmjs.org/${who}/-/${who}-${number}.tgz`
                    }).then(() => {
                        window.location.href = `https://registry.npmjs.org/${who}/-/${who}-${number}.tgz`
                    }).catch(() => {
                        alert('请求错误，请输入正确版本号！')
                    })
                } else {
                    alert('输入内容不能为空')
                }
            }
        }
    },
    // 计算属性
    computed: {

    },
    // 侦听器
    watch: {

    },

    //创建阶段
    created() {
        this.Theme = Theme.getTheme()
        axios.get('https://hmajax.itheima.net/api/province').then(res => {
            // console.log(res)
            setTimeout(() => { this.loading = false }, 1500)
        })
    },
    // 挂载阶段
    mounted() {

    },
})