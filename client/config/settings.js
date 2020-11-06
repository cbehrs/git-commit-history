const settings = {
  dev: {
    getRepoNameEndpoint: "http://localhost:3000/api/repo-name",
    getRepoCommitsEndpoint: "http://localhost:3000/api/get-commits",
  },
  prod: {
    getRepoNameEndpoint: "PROD-https://xxxxx",
    getRepoCommitsEndpoint: "PROD-https://xxxxx",
  },
};

const getCurrentSettings = () => {
  return process.env.NODE_ENV === "development" ? settings.dev : settings.prod;
};

export default getCurrentSettings;
