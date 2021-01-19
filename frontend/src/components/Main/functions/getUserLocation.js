/**
 * Try to retrieve the device's current location and return it.
 * Otherwise return lat and lon for Warsaw
 */
export const getCoords = async () => {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }).catch(e => console.log(e));
    if(pos){
      return {
        lon: pos.coords.longitude,
        lat: pos.coords.latitude,
      };
    }else{
      return {
        lat: "52,2297",
        lon: "21,0122",
      };
    }
    
};
