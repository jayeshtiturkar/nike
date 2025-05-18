import React from "react";

const ShoeCart = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {

    const handleOnCilck = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
    return (
        <div
            className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe
                    ? "border-coral-red"
                    : "border-transparent"
                } cursor-pointer max-sm:flex-1`}

            onClick={handleOnCilck}
        >
            <div className="flex justify-center itmes-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img src={imgURL.thumbnail} alt="Shoe Collection" width={127} height={103} className="" />
            </div>
        </div>
    );
};

export default ShoeCart;
