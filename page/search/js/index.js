const app = new Vue({
    el: '#app',
    data: {
        // 搜索框数据
        url: 'https://www.baidu.com/s',
        text: '百度一下',
        name: 'wd',
        inpValue: '',
        searchList: [
            { title: '百度', url: 'https://www.baidu.com/s', text: '百度一下', name: 'wd' },
            { title: 'Bing', url: 'https://cn.bing.com/search', text: '微软Bing搜索', name: 'q' }
        ],
        tagList: [
            [
                { url: 'https://fanyi.baidu.com/', img: 'https://fanyi-cdn.cdn.bcebos.com/webStatic/translation/img/favicon/favicon.ico', text: '百度翻译' },
                { url: 'https://www.bilibili.com/', img: 'https://www.bilibili.com/favicon.ico', text: '哔哩哔哩' },
                { url: 'https://www.csdn.net/', img: 'https://g.csdnimg.cn/static/logo/favicon32.ico', text: 'CSDN' },
                { url: 'https://chat18.aichatos.xyz/', img: 'https://chat18.aichatos.xyz/favicon.ico', text: 'AIchatOS' },
            ],
        ]
    },
    methods: {
        // 搜索列表切换方法
        searchListBtn(e) {
            if (e.target.tagName === 'A') {
                const data = this.searchList.filter(item => item.title === e.target.innerText)
                const { url, text, name } = data[0]
                this.url = url
                this.text = text
                this.name = name
                document.querySelector('.list-btn-on').classList.remove('list-btn-on')
                e.target.classList.add('list-btn-on')
                this.inpOn()
            }
        },
        // 判断搜索方法
        searchBtn(e) {
            const value = this.inpValue.trim()
            if (value) {
                this.inpValue = value
            } else {
                this.inpValue = ''
                e.preventDefault()
            }
        },
        // 自动选中输入框方法
        inpOn() {
            const inp = document.querySelector('.main-search form input:nth-child(1)')
            inp.focus()
        }
    },
    created() {
    },
    mounted() {
        // 进页面自动选中输入框
        this.inpOn()
    }
})