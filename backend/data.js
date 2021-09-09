import bcrypt from 'bcryptjs'
const data = {
    users: [
        {
            name:'Afreak_',
            email:'afreak@fakegmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: true,
        },
        {
            name:'Rfun',
            email:'rfun@fakegmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: false,
        },

    ],
    products: [
        {
            
            name:'Beef Bakso',
            category:'Food',
            image:'../images/p1.jpg',
            price:7,
            countInStock:10,
            brand:'Afreak Kitchen',
            rating:4.5,
            numReviews:10,
            description:'High quality taste of bakso',
        },
        {
            
            name:'Butter Chicken Set',
            category:'Food',
            image:'../images/p2.jpg',
            price:7,
            countInStock:20,
            brand:'Afreak Kitchen',
            rating:5.0,
            numReviews:17,
            description:'High quality taste of butter chicken',
        },
        {
            
            name:'Nasi Ayam Penyet',
            category:'Food',
            image:'../images/p3.jpg',
            price:7,
            countInStock:12,
            brand:'Afreak Kitchen',
            rating:4.0,
            numReviews:32,
            description:'High quality taste  ',
        },
        {
            
            name:'Chicken Chop',
            category:'Food',
            image:'../images/p4.jpg',
            price:10,
            countInStock:23,
            brand:'Afreak Kitchen',
            rating:4.5,
            numReviews:22,
            description:'High quality taste ',
        },
        {
            
            name:'Jus Buah',
            category:'Food',
            image:'../images/p5.jpg',
            price:3,
            countInStock:2,
            brand:'Afreak Kitchen',
            rating:4.5,
            numReviews:7,
            description:'High quality taste ',
        },
        {
           
            name:'Cupcake',
            category:'Food',
            image:'../images/p6.jpg',
            price: 1,
            countInStock:50,
            brand:'Afreak Kitchen',
            rating:4.5,
            numReviews:10,
            description:'High quality taste ',
        },
    ],
};
export default data

