// config.js

const configurations = {
    1: {
      id: 1,
      logo: "https://img.innoloft.de/logo.svg",
      mainColor: "#272e71",
      height:"55px" ,
      width: "100%",
      display: "fixed",
      hasUserSection: true
    },
    2: {
      id: 2,
      logo: "https://example.com/logo.svg",
      mainColor: "#ff0000",
      hasUserSection: false
    }
  };
  
  const getAppConfiguration = () => {
    const appId = import.meta.env.VITE_APP_ID || 1;
    console.log(appId,"--applicationID")
    return configurations[appId];
  };
  
  export default getAppConfiguration;
  