const { Octokit } = require('@octokit/rest');
const octokit = new Octokit({
  auth: 'YOUR_PERSONAL_ACCESS_TOKEN', // Replace with your personal access token
});

const newRepoName = 'your-new-repo-name'; // Replace with your desired repository name

octokit.repos
  .createForAuthenticatedUser({
    name: newRepoName,
    private: false, // Set to true for private repositories
  })
  .then((response) => {
    console.log(`Successfully created the repository: ${response.data.name}`);
  })
  .catch((error) => {
    console.error('Error creating the repository:', error.message);
  });
