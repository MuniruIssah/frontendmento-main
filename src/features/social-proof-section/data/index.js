import colton from '../images/image-colton.jpg'
import irene from '../images/image-irene.jpg'
import anne from '../images/image-anne.jpg'
export const ratings=[
    {description:"Rated 5 Stars in Reviews",extraClasses:'self-start'},
    {description:"Rated 5 Stars in Report Guru",extraClasses:'self-center'},
    {description: "Rated 5 Stars in BestTech",extraClasses:'self-end'}

]


export const comments=[
    {
        name:'Colton Smith',
        title:'Verified Buyer',
        description:'We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!',
        image:colton,
        extraClasses:'self-start'
    },
    {
        name:'Irene Roberts',
        title:'Verified Buyer',
        description:'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.',
        image:irene,
        extraClasses:'self-center'
    },
    {
        name:'Anne Wallace',
        title:'Verified Buyer',
        description:'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!',
        image:anne,
        extraClasses:'self-end'
    }
]