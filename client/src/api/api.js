import axios from "axios";

const getRepoCommits = async (repoOwner, repoName) => {
  //Get all commits for given owner and repository name from API
  try {
    const { data } = await axios.get("http://localhost:3000/api/get-commits", {
      params: { repoOwner, repoName },
    });
    return data;
  } catch (error) {
    console.log("Error: ", error); //this can be changed for a logger tool or throw an exception or what client decides
  }
};

const getRepoName = async () => {
  //Runs command to get the name of the working github project from API
  try {
    const { data } = await axios.get("http://localhost:3000/api/repo-name");
    return data;
  } catch (error) {
    console.log("Error: ", error); //this can be changed for a logger tool or throw an exception or what client decides
  }
};

export { getRepoCommits, getRepoName };
