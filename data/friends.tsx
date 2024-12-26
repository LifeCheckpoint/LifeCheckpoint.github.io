export const Friends: Friend[] = [
    {
        title: 'Yan-Zero',
        cname: "言",
        description: '',
        website: 'https://yans-blog.vercel.app/',
        avatar: 'https://avatars.githubusercontent.com/u/32036413?v=4',
        tips: "A Student."
    },
    {
        title: 'zmx0142857',
        cname: "I could fran",
        description: '',
        website: 'https://zmx0142857.github.io/note',
        avatar: 'https://avatars.githubusercontent.com/u/25482626?v=4',
        tips: "Front-end programmer; interests in math typesetting and three.js."
    },
    {
        title: 'Nyuan Zhang',
        cname: "BlueGlassBlock",
        description: 'PKU EE freshman',
        website: 'https://blog.blueg.top',
        avatar: 'https://blog.blueg.top/avatar.jpg',
        tips: "Think and build more."
    },
    {
        title: 'Jim Zhou',
        cname: "Zhiyu Zhou",
        description: 'SUSTech freshman',
        website: 'https://jimzhou.cn',
        avatar: '/img/friends/JimZhou.png',
        tips: "Word is useless. Show me the code."
    }
]

export type Friend = {
    title: string
    cname?: string
    description: string
    website: string
    avatar?: string
    tips?: string
}
