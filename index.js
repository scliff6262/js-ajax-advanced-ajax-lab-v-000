function getRepositories(){
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories)
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}

function showRepositories(){
  const repos = JSON.parse(this.responseText)
  const repoList = `<ul>${repos.map(repo => '<li>' + repo.name + '</li>').join('')}`
}
