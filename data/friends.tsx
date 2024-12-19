export const Friends: Friend[] = [
    {
        title: 'Yan-Zero',
        cname: "言",
        description: '',
        website: 'https://yans-blog.vercel.app/',
        avatar: 'https://avatars.githubusercontent.com/u/32036413?v=4',
        tips: ""
    },
]

export type Friend = {
    title: string
    cname?: string
    description: string
    website: string
    avatar?: string
    tips?: string
}