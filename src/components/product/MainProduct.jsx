import React from "react";
import DetailsProduct from "@/components/product/col-details/DetailsProduct";
import MainImages from "@/components/product/col-images/MainImages";

import imgProduct1 from '@/assets/images/image-product-1.jpg'
import imgProduct2 from '@/assets/images/image-product-2.jpg'
import imgProduct3 from '@/assets/images/image-product-3.jpg'
import imgProduct4 from '@/assets/images/image-product-4.jpg'
import imgProductSmall1 from '@/assets/images/image-product-1-thumbnail.jpg'
import imgProductSmall2 from '@/assets/images/image-product-2-thumbnail.jpg'
import imgProductSmall3 from '@/assets/images/image-product-3-thumbnail.jpg'
import imgProductSmall4 from '@/assets/images/image-product-4-thumbnail.jpg'

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4]
const ARRAY_IMG_SMALL = [imgProductSmall1,imgProductSmall2,imgProductSmall3,imgProductSmall4]

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2">
      <MainImages ARRAY_IMGS={ARRAY_IMGS} ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}/>
      <DetailsProduct />
    </main>
  );
};

export default MainProduct;
