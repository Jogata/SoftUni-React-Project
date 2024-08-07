export const getAccessToken = () => {
    const authJSONData = localStorage.getItem("auth");

    if (!authJSONData) {
        return "";
    }

    const authData = JSON.parse(authJSONData);

    return authData.accessToken;
}