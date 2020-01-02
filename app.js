//new github request
const github = new GitHub;

const ui = new UI;

//search input
const searchUser = document.querySelector("#name-input");

//search input event listener

searchUser.addEventListener("keyup", (e) => {
  
  const userText = e.target.value;

  if(userText !== ""){
//make http call
    github.getUser(userText)
    .then(data => {
      console.log(data)
      if(!data.profile.login){
        //show alert

        ui.showUserNameError("User not found", "show");

      } else {
      
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      
       }
          
      
    })
} else {
  //clear profile
  ui.clearProfile();
}
  
});

