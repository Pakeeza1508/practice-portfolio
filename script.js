const icons = document.querySelectorAll(".accounts i");

const links = [
  "https://github.com/Pakeeza1508/Pakeeza1508.github.io",     
  "https://github.com/Pakeeza1508/Pakeeza1508.github.io",  
  "https://www.linkedin.com/in/pakeeza-khalid-3128b62b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
];

icons.forEach((icon, index) => {
  const link = document.createElement("a");
  link.href = links[index];  
  link.target = "_blank";    
  
  icon.parentNode.insertBefore(link, icon);
  link.appendChild(icon);
});
