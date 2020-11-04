export const githubApi = () => {
  return fetch('https://api.github.com/users/Nate-Kruck/repos', {
    'method':'GET',
    'Accept': 'application/vnd.github.v3+json'
      .then(res => res.json())
      .then(json => json.type.map(repo => ({
        id: repo.id,
        repo_name: repo.name,
      })))
  });
};
