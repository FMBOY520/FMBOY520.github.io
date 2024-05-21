/* -------------------- **** -------------------- */
const app = new Vue({
    el: '#app',
    data: {
        // 轮播图图片
        imgList: [
            { img: '../../public/resources/image/Cat/001.jpg' },
            { img: '../../public/resources/image/Cat/002.jpg' },
            { img: '../../public/resources/image/Cat/003.jpg' },
            { img: '../../public/resources/image/Cat/004.jpg' },
        ],
        commonList: [
            { url: 'https://fanyi.baidu.com/', text: '百度翻译' },
            { url: 'https://www.bilibili.com/', text: '哔哩哔哩' },
            { url: 'https://www.csdn.net/', text: 'CSDN' },
            { url: 'https://gitee.com/', text: 'Gitee' },
            { url: 'https://github.com/login', text: 'GitHub' },
            { url: 'https://chat18.aichatos.xyz/', text: 'AIcharOS' },
        ],
        toolsList: [
            { url: 'https://pc.woozooo.com/', text: '蓝奏·云存储' },
            { url: 'https://www.speedtest.cn/', text: '测速网' },
            { url: 'https://cli.im/', text: '草料二维码生成器' },
            { url: 'http://zhouql.vip/bilibili/', text: 'B站视频下载工具 | 极简纯净' },
        ]
    },
})

// 轮播图
let div = document.querySelector('.body-carousel-img div')
// 克隆第一张图片
let clonefirstImg = div.firstElementChild.cloneNode()
// 将第一张图片添加至图片列表的末尾
div.appendChild(clonefirstImg)
// 图片索引
let index = 0
// 自动轮播
setInterval(() => {
    index++
    div.style.transition = ".8s"
    div.style.left = index * -100 + "%";
    if (index === app.imgList.length) {
        index = 0;
        setTimeout(() => {
            div.style.left = 0;
            // 取消过渡 800毫秒之后切换第一张
            div.style.transition = "none";
        }, 800);
    }
}, 2000);
/* -------------------- **** -------------------- */