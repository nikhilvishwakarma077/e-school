import React from "react";

const TestimonialsData = [
    {
        id: 1,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
        delay: 0.2,
    },
    {
        id: 2,
        name: "Steve Smith",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102",
        delay: 0.5,
    },
    {
        id: 3,
        name: "Kristen",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/104/104",
        delay: 0.8,
    },
    {
        id: 5,
        name: "Ariana",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/103/103",
        delay: 1.1,
    },
];

const Testimonial = () => {
   
    return (
        <div className="py-14 mb-10">
            <div className="px-10 md:px-20">
                <div className="space-y-4 p-6 text-center max-w-150 mx-auto mb-6">
                    <h1 className="uppercase font-semibold text-orange-600">
                        OUR TESTIMONIALS
                    </h1>
                    <p className="font-semibold text-3xl ">
                        What Our Students Say About Us
                    </p>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
                        {TestimonialsData.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="flex flex-col  gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
                                        {/* upper section */}
                                        <div className="flex justify-start items-center gap-5">
                                            <img
                                                src={item.img}
                                                alt=""
                                                className="w-16 h-16 rounded-full"
                                            />
                                            <div>
                                                <p className="text-xl font-bold text-black/80">
                                                    {item.name}
                                                </p>
                                                <p>{item.name}</p>
                                            </div>
                                        </div>
                                        <div className="py-6 space-y-4">
                                            <p className="text-sm text-gray-500">{item.text}</p>
                                            <p>⭐⭐⭐⭐⭐</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div >
                </div>
            </div>
        </div>
    );
};

export default Testimonial;