const Links_Social_Media = {
    github: 'lucas5050',
    youtube: 'channel/UCIxGxV2DoxWswOMMtOkgSRA',
    facebook: 'lucas.pascoal.54',
    instagram: 'lucas_pascoal_de_lima',
    twitter: 'LucasPascoal90'           
  }

  function Change_Social_Media_Links() {
      for (let li of Social_Links.children){
      const social = li.getAttribute('class')
      
      li.children[0].href = `https://${social}.com/${Links_Social_Media[social]}`         
      
      // User_Name.textContent = 'Lucas Pascoal de Lima'
    }
}

Change_Social_Media_Links()

function getGitHubProfileInfos() {

    const url = `https://api.github.com/users/${Links_Social_Media.github}`
    
   fetch(url)
   .then(response => response.json())
   .then(data => {
     // User_Name.textContent = data.name
     // User_Bio.textContent = data.bio
     // User_GitHub.href = data.html_url
     // User_Image.src = data.avatar_url
     // User_Login.textContent = data.login
   })

}

  getGitHubProfileInfos()