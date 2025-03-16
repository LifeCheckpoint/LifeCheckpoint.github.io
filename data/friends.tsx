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
    },
    {
        title: 'LifeCheckpoint',
        cname: "梓刻Zike",
        description: '想和小黑过一辈子',
        website: 'https://lifecheckpoint.github.io',
        avatar: 'https://avatars.githubusercontent.com/u/59783101?v=4',
        tips: "友链具有自反性~"
    },
    {
        title: 'JL LIU',
        cname: "uni",
        description: 'Auto.Major,SISE,NEU',
        website: 'https://uunniii.space',
        avatar: 'https://avatars.githubusercontent.com/u/182308101?v=4',
        tips: "These fleeting days are all we call youth......"
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
