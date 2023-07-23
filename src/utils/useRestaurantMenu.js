import { useEffect,useState } from "react";
import { MENU_INFO } from "./constants"

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    //default
    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_INFO + resId);
        const json = await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;