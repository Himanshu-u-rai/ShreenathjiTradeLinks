import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";
import P1 from "../../assets/plant/P1.jpg";
import P2 from "../../assets/plant/P2.jpg";
import P3 from "../../assets/plant/P3.jpg";
import P4 from "../../assets/plant/P4.jpg";
import P5 from "../../assets/plant/P5.jpg";

const PlantData = [
    { id: 1, image: P1 },
    { id: 2, image: P2 },
    { id: 3, image: P3 },
    { id: 4, image: P4 },
    { id: 5, image: P5 }
];

const PlantComp = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === PlantData.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white py-10">
            <section data-aos="fade-up" className="container mx-auto px-4 md:px-10">
                <h1 className="my-8  border-l-8 border-primary/50 py-2 pl-2 text-2xl md:text-3xl font-semibold">
                    Plant Images
                </h1>
                <div className="flex justify-center">
                    <PlantCard {...PlantData[currentIndex]} />
                </div>
            </section>
        </div>
    );
};

export default PlantComp;
