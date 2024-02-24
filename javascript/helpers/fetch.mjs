export const apiUrl = "https://v2.api.noroff.dev/rainy-days";


export const fetchApi = async(url) => {
    let jacketList = localStorage.getItem("jacketList");
    if(jacketList){
        return jacketList;
    }
    try {
        let response = await fetch(url);
        let jackets = await response.json();
        localStorage.setItem("jacketList", JSON.stringify(jackets.data));
        console.log("jackets",jackets);
        
    } catch (error) {
        console.error("Could not fetch data" + error);
    }
}

