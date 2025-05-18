import React from "react";
import { star } from "../../assets/icons";

const CustomerReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div key={customerName} className="flex flex-col justify-center items-center px-20">
      <div className="">
        <img src={imgURL} alt={customerName} height={120} width={120} className="rounded-full object-cover"/>
      </div>
      <p className="lg:max-w-sm text-slate-gray text-xl mt-7 text-center">{feedback}</p>
      <div className="flex gap-2 text-2xl text-slate-gray font-palanquin mt-4">
        <img src={star} alt="star" className="h-7 w-7" />
        <span>({rating})</span>
      </div>
      <h1 className="text-3xl font-bold">{customerName}</h1>
    </div>
  );
};

export default CustomerReviewCard;
