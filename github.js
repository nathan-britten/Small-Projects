class GitHub {

  constructor(){
    this.client_id = "ce8752ecb138f5c8b846";
    this.client_secret = "c2c9f31582ed87f18a95f0d1f857676cfbe9706f";
    this.repos_count = 8;
    this.repos_sort = "created: asc"
  }


  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return{
      profile,
      repos
    }
  }


}