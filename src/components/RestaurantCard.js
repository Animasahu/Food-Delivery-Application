import {useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {loggedInUser} = useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="p-4 m-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg w-[150px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name} </h3>
      <h4>{cuisines.join(", ")} </h4>
      <h4>{avgRating} stars </h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString} </h4>
      <h4> user : {loggedInUser} </h4>
      
    </div>
  );
};

export default RestaurantCard;
