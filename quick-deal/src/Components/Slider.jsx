import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image, Flex, Text, Box } from "@chakra-ui/react"



let data = [{
    "name": "David Crew - 100% Cotton Regular Fit Green Men's T-Shirt ( Pack of 1 )",
    "image": "https://n3.sdlcdn.com/imgs/k/e/t/David-Crew-100-Cotton-Green-SDL559120798-1-895b4.jpg",
    "price": "349",
    "strikedOfprice": "669",
    "rating": "4",
    "id": 1,
    "size": "M"
},

{
    "name": "ASIAN Blue Running Shoes",
    "image": "https://n4.sdlcdn.com/imgs/i/e/r/230X258_sharpened/ASIAN-Blue-Running-Shoes-SDL243004409-1-d0751.jpeg",
    "price": "599",
    "strikedOfprice": "999",
    "rating": "4",
    "id": 2,
    "size": "8"
},

{
    "name": "ASIAN POPCORN-02 Gray Running Shoes",
    "image": "https://n3.sdlcdn.com/imgs/j/o/n/Campus-Black-Casual-Shoes-SDL266461164-4-428e2.jpeg",
    "price": "799",
    "strikedOfprice": "999",
    "rating": "4.5",
    "id": 3,
    "size": "6"
},
{
    "name": "Veirdo - 100% Cotton Regular Fit Blue Men's T-Shirt ( Pack of 1 )",
    "image": "https://n1.sdlcdn.com/imgs/k/e/t/Veirdo-100-Cotton-Regular-Fit-SDL468526198-2-caf53.jpg",
    "price": "599",
    "strikedOfprice": "999",
    "rating": "4",
    "id": 2
},
{
    "name": "Bhakarwadi - Silk Blend Black With Blouse Piece ( Pack of 1 )",
    "image": "https://n2.sdlcdn.com/imgs/k/b/m/Bhakarwadi-Black-Art-Silk-Saree-SDL762653447-1-eb79c.jpg",
    "price": "329",
    "strikedOfprice": "1799",
    "rating": "4.5",
    "id": 3
},]

const MySlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className="slider"   >
            <Slider  {...settings}>
                {data.map((item) => (
                    <div key={item.id} className="card" >
                        <div className="card-Top" >
                            <Image src={item.image}  ></Image>

                        </div>
                        <div className="card-bottom" >
                            <Text size="sm" >{item.name}</Text>

                            <Text>  Price: {item.price} </Text>



                        </div>
                    </div>
                ))}
            </Slider>
        </div>

    )


}


export default MySlider



// export default class AutoPlay extends Component {
//     render() {
//         const settings = {
//             dots: true,
//             infinite: true,
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             autoplay: true,
//             speed: 2000,
//             autoplaySpeed: 2000,
//             cssEase: "linear"
//         };
//         return (
//             <div style={{ border: "3px solid blue" }}  >
//                 <h2>Auto Play</h2>
//                 <Slider {...settings}>
//                     {data.map((item) => (
//                         <div key={item.id} className="card" >
//                             <div className="card-Top" >
//                                 <Image src={item.image}  ></Image>

//                             </div>
//                             <div className="card-bottom" >
//                                 <Text size="sm" >{item.name}</Text>

//                                 <Text>  Price: {item.price} </Text>



//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         );
//     }
// }