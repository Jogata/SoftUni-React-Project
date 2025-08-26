import { createContext, useState } from "react";

export const BlogContext= createContext();

import business from "../../images/test/business.jpg";
import celeb from "../../images/test/celeb.jpg";
import health from "../../images/test/health.jpg";
import politics from "../../images/test/politics.jpg";
import sport from "../../images/test/sport.jpg";
import tech from "../../images/test/tech.jpg";
import lady from "../../images/test/laddy1.jpg";

const data = [
    {
        id: 1,
        title: "President Zhully calls for order of millitary",
        blog_image: politics,
        category: "Politics",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 2,
        title: "Scientiest have discovered the health benefit of Garlic",
        blog_image: health,
        category: "Health",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 3,
        title: "Samsung relases new mobile flip phone",
        blog_image: tech,
        category: "Tech",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 4,
        title: "20% of Profit is said to be used for renovation",
        blog_image: business,
        category: "Business",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 5,
        title: "Popular Musician Zhully is said to have 1,000 subscribers on Youtube",
        blog_image: celeb,
        category: "Entertainment",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 6,
        title: "World Cup said to host in 2028",
        blog_image: sport,
        category: "Sport",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 7,
        title: "President Zhully calls for order of millitary",
        blog_image: politics,
        category: "Politics",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 8,
        title: "Scientiest have discovered the health benefit of Garlic",
        blog_image: health,
        category: "Health",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 9,
        title: "Samsung relases new mobile flip phone",
        blog_image: tech,
        category: "Tech",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 10,
        title: "20% of Profit is said to be used for renovation",
        blog_image: business,
        category: "Business",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 11,
        title: "Popular Musician Zhully is said to have 1,000 subscribers on Youtuber",
        blog_image: celeb,
        category: "Entertainment",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 12,
        title: "World Cup said to host in 2028",
        blog_image: sport,
        category: "Sport",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 13,
        title: "President Zhully calls for order of millitary",
        blog_image: politics,
        category: "Politics",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 14,
        title: "Scientiest have discovered the health benefit of Garlic",
        blog_image: health,
        category: "Health",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 15,
        title: "Samsung relases new mobile flip phone",
        blog_image: tech,
        category: "Tech",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 16,
        title: "20% of Profit is said to be used for renovation",
        blog_image: business,
        category: "Business",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 17,
        title: "Popular Musician Zhully is said to have 1,000 subscribers on Youtube",
        blog_image: celeb,
        category: "Entertainment",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 18,
        title: "World Cup said to host in 2028",
        blog_image: sport,
        category: "Sport",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 19,
        title: "President Zhully calls for order of millitary",
        blog_image: politics,
        category: "Politics",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 20,
        title: "Scientiest have discovered the health benefit of Garlic",
        blog_image: health,
        category: "Health",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 21,
        title: "Samsung relases new mobile flip phone",
        blog_image: tech,
        category: "Tech",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 22,
        title: "20% of Profit is said to be used for renovation",
        blog_image: business,
        category: "Business",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 23,
        title: "Popular Musician Zhully is said to have 1,000 subscribers on Youtube",
        blog_image: celeb,
        category: "Entertainment",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 24,
        title: "World Cup said to host in 2028",
        blog_image: sport,
        category: "Sport",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 25,
        title: "President Zhully calls for order of millitary",
        blog_image: politics,
        category: "Politics",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 26,
        title: "Scientiest have discovered the health benefit of Garlic",
        blog_image: health,
        category: "Health",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 27,
        title: "Samsung relases new mobile flip phone",
        blog_image: tech,
        category: "Tech",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 28,
        title: "20% of Profit is said to be used for renovation",
        blog_image: business,
        category: "Business",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 29,
        title: "Popular Musician Zhully is said to have 1,000 subscribers on Youtube",
        blog_image: celeb,
        category: "Entertainment",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },
    {
        id: 30,
        title: "World Cup said to host in 2028 ",
        blog_image: sport,
        category: "Sport",
        blogDetail: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            author_image: lady,
            author_name: 'Sarah Manson',
            date: '07-07-2024'
        },
    },


]

export function BlogContextProvider({children}) {
    const [blogs, setBlogs] = useState(data);

  return (
    <BlogContext.Provider value={{blogs}}>
      {children}
    </BlogContext.Provider>
  )
}

// export const userContext = createContext();

// export function AuthCont(props) {
//     const [user, setUser] = useState();

//     return (
//         <userContext.Provider value={{user, setUser}}>
//             {props.children}
//         </userContext.Provider>
//     )
// }