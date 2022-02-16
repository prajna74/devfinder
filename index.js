function input(name)
{
    fetch(`https://api.github.com/users/${name}`)
    .then((response)=>(response.json()))
    .then((data)=>(
           datahandle(data)
    ));
}
function datahandle(data)
{
    if(!data.name)
    document.getElementById("message").style.display="block";
    else 
    {
   document.getElementById("namee").innerHTML=data.name;
   document.getElementById("followers").innerHTML=data.followers;
   document.getElementById("following").innerHTML=data.following;
   document.getElementById("bio").innerHTML=(data.bio==null)?"No bio to show":data.bio;
   document.getElementById("location").innerHTML=(data.location==null)?"Not available":data.location;
   document.getElementById("link").innerHTML=(data.blog)?data.blog:" Not available";
   document.getElementById("twitter").innerHTML=(data.twitter_username==null)?" Not available":data.twitter_username;
   document.getElementById("email").innerHTML=(data.email==null)?" Not available":data.email;
   document.getElementById("profilepic").src=(data.avatar_url==null)?"https://img.icons8.com/color/144/000000/github--v1.png":data.avatar_url;
   document.getElementById("repo").innerHTML=data.public_repos;
   document.getElementById("joined").innerHTML="Joined on: "+data.created_at.slice(0,10);
   document.getElementById("divout").style.display="flex";
   document.getElementById("user").value="";
    }
}
function cancel(){
    location.reload();
}