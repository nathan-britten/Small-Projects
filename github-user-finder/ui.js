class UI {

  constructor() {
    this.profile = document.getElementById("profile");
    this.repo = document.getElementById("repo");
  }

  showProfile(user){
    this.profile.innerHTML = `
      <div class="card">
        <div id="image-holder">
          <img class="profilepic" src="${user.avatar_url}">
          <button class="profilebutton" target="_blank"><a href="${user.html_url}">View Profile</a></button>
        </div>

        <div id="info-holder">
          <ul class="list-container">
          <li id="a" class="info-buttons">Public Repos: ${user.public_repos}</li>
          <li id="b" class="info-buttons">Public Gists: ${user.public_gists}</li>
          <li id="c" class="info-buttons">Followers: ${user.followers}</li>
          <li id="d" class="info-buttons">Following: ${user.following}</li>
          </ul>

          <ul>
          <li class="info-list">Company: ${user.company}</li>
          <li class="info-list">Website: ${user.blog}</li>
          <li class="info-list">Location: ${user.location}</li>
          <li class="info-list">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    `
  }


  showRepos(repos){
  
    let result = "";
    console.log(repos)
    repos.forEach(function(repo){
      console.log(repo.forks_count)
      result += `
      <span class="repo-item">

        <div>
          <li id="ia" class="inside"><a href="${repo.html_url}">${repo.name}</a></li>
        </div>
        <div id="right-side">
        
          <li id="ib" class="inside right">Forks: ${repo.forks_count}</li>
          <li id="ic" class="inside right">Watchers: ${repo.watchers_count}</li>
          <li id="id" class="inside right">Stars: ${repo.stargazers_count}</li>
        </div>
      </span>`;
    })

    result = `<h3>Latest Repos</h3>` + result;
   console.log(result)

    document.getElementById("repo").innerHTML = result;
  
  }


  //show alert message
  showUserNameError(message, className){
    //clear remaining erros 
    this.clearAlert();

    const li = document.createElement("li");
    //add class
    li.className = className
    //add text
    li.appendChild(document.createTextNode(message));

    //get parent
    const parContainer = document.querySelector("#input");
    //get search box
    const searchBox = document.querySelector("input");

    //insert
    parContainer.insertBefore(li, searchBox);

    //timeoutafter two seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);

  } 

  //clear alert messgae
  clearAlert(){

    const currentAlert = document.querySelector(".show")
    
    if(currentAlert){
      currentAlert.remove();
    }
  }


  clearProfile(){
    this.profile.innerHTML = " ";

    this.repo.innerHTML = " ";

  }

}


// const userImageContainer = document.createElement("li");
// const userImage = `<img src="${data.profile.avatar_url}">`;
// console.log(userImageContainer)
// userImageContainer.innerHTML = userImage;
// const output =  document.querySelector(".output");

// output.appendChild(userImageContainer);