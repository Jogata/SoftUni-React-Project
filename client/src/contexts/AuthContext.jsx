import { createContext, useState } from "react";

import usePersistedState from "../hooks/usePersistedState";
// import { useNavigate } from "r.eact-router-dom";

export const AuthContext = createContext({
    userID: "",
    email: "",
    accessToken: "",
    isAuthenticated: "",
    changeAuthState: () => null, 
    // logout: () => null,
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState("auth", {});

    const changeAuthState = (state) => {
        // localStorage.setItem("accessToken", state.accessToken);
        setAuthState(state);
    }

    // const logout = () => {
        // setAuthState({});
        // console.log(authState);
        // const navig = useNavigate();
        // navig("/");
    // }

    const contextData = {
        userID: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: Boolean(authState.email),
        changeAuthState, 
        // logout
    };

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}






import glass1 from "../components/travel/images/estates/glass1.jpg";
import glass2 from "../components/travel/images/estates/hero.jpg";
import glass3 from "../components/travel/images/estates/glass3.jpg";
import smart3 from "../components/travel/images/estates/smart3.jpg";
import smart2 from "../components/travel/images/estates/smart2.jpg";
import smart1 from "../components/travel/images/estates/smart1.jpg";
import apartment1 from "../components/travel/images/estates/apartment1.jpg";
import apartment2 from "../components/travel/images/estates/apartment2.jpg";
import apartment3 from "../components/travel/images/estates/apartment3.jpg";
import bungalow1 from "../components/travel/images/estates/bungalow1.jpg";
import bungalow2 from "../components/travel/images/estates/bungalow2.jpg";
import bungalow3 from "../components/travel/images/estates/bungalow3.jpg";
import office1 from "../components/travel/images/estates/office1.jpg";
import office2 from "../components/travel/images/estates/office2.jpg";
import office3 from "../components/travel/images/estates/office3.jpg";
import villa1 from "../components/travel/images/estates/villa1.jpg";
import villa2 from "../components/travel/images/estates/villa2.jpg";
import villa3 from "../components/travel/images/estates/villa3.jpg";

const data = [
    {
        id: 1,
        name: "Ocean Breeze Apartment",
        price: "200000",
        country: "UK",
        beds: 4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        baths: 3,
        image: smart1,
        property: "Apartment",
    },
    {
        id: 2,
        name: "Jackson House ",
        price: "250000",
        country: "Canada",
        beds: 5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        baths: 4,
        image: apartment1,
        property: "House",

    },
    {
        id: 3,
        name: "Lakeside Villa",
        price: "300000",
        country: "USA",
        beds: 3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        baths: 2,
        image: villa1,
        property: "Villa",
    },
    {
        id: 4,
        name: "Ocean Breeze Villa",
        price: "100000",
        country: "UK",
        beds: 4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        baths: 3,
        image: bungalow1,
        property: "Villa",
    },
    {
        id: 5,
        name: "Jackson Apartment",
        price: "306000",
        country: "Canada",
        beds: 5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        baths: 4,
        image: office1,
        property: "Apartment",
    },
    {
        id: 6,
        name: "Lakeside House",
        price: "300000",
        country: "USA",
        beds: 3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        baths: 2,
        image: glass1,
        property: "House",
    },
    {
        id: 7,
        name: "Ocean Breeze House",
        price: "350000",
        country: "UK",
        beds: 4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        baths: 3,
        image: smart2,
        property: "House",
    },
    {
        id: 8,
        name: "Jackson Apartment",
        price: "205000",
        country: "Canada",
        beds: 5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        baths: 4,
        image: apartment2,
        property: "Apartment",
    },
    {
        id: 9,
        name: "Lakeside Villa",
        price: "300000",
        country: "USA",
        beds: 3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        baths: 2,
        image: villa2,
        property: "Villa",
    },
    {
        id: 10,
        name: "Ocean Breeze Apartment",
        price: "350000",
        country: "UK",
        beds: 4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        baths: 3,
        image: bungalow2,
        property: "Apartment",
    },
    {
        id: 11,
        name: "Jackson Villa",
        price: "205000",
        country: "Canada",
        beds: 5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        baths: 4,
        image: office2,
        property: "Villa",
    },
    {
        id: 12,
        name: "Lakeside House",
        price: "300000",
        country: "UK",
        beds: 3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        baths: 2,
        image: glass2,
        property: "House",
    },
    {
        id: 13,
        name: "Ocean Breeze Apartment",
        price: "200000",
        country: "UK",
        beds: 4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        baths: 3,
        image: smart3,
        property: "Apartment",
    },
    {
        id: 14,
        name: "Jackson Apartment",
        price: "205000",
        country: "Canada",
        beds: 5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        baths: 4,
        image: apartment3,
        property: "Apartment",
    },
    {
        id: 15,
        name: "Lakeside Villa",
        price: "300000",
        country: "USA",
        beds: 3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        baths: 2,
        image: villa3,
        property: "Villa",
    },
    {
        id: 16,
        name: "Ocean Breeze Villa",
        price: "350000",
        country: "UK",
        beds: 4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        baths: 3,
        image: bungalow3,
        property: "Villa",
    },
    {
        id: 17,
        name: "Jackson glass",
        price: "205000",
        country: "Canada",
        beds: 5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        baths: 4,
        image: office3,
        property: "Apartment",
    },
    {
        id: 18,
        name: "Lakeside Cottage",
        price: "300000",
        country: "USA",
        beds: 3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        baths: 2,
        image: glass3,
        property: "House",
    },
];

export const PropertiesContext = createContext();

export function PropertiesContextProvider(props) {
    const [properties] = useState(data);

    function isDefault(value) {
        return value === "default";
    }

    const [country, setCountry] = useState("default");
    const [property, setProperty] = useState("default");
    const [price, setPrice] = useState("default");

    const ctx = {
        properties
    };

    return (
        <PropertiesContext.Provider value={ctx}>
            {props.children}
        </PropertiesContext.Provider>
    )
}