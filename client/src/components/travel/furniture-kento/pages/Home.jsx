import { useState } from "react";
import { Hero } from "../components/hero/Hero";
import { Categories } from "../components/category/Category";
import { Products } from "../components/products/Products";

export function Home() {
    const [category, setCategory] = useState("All");

    return (
        <>
            <Hero />
            <Categories setCategory={setCategory} />
            <Products category={category} />
        </>
    )
}

{/* <ScrollToTop />
<ProductsContextProvider>
  <ShopContextProvider>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/about' element={<About />} />
      <Route path='/product/:id' element={<Product />} />
    </Routes>
  </ShopContextProvider>
</ProductsContextProvider>
<Footer /> */}