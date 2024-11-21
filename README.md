# js-worksheet
weather App
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            display: inline-block; 
            display: flex;
            justify-content: center;
            align-items: center; 
         background-color: rgb(59, 210, 252); 
        height: 100vh; 
        }
        div{
            display: inline-block;
            height: 251px;
            width: 301px;
            background-color: aliceblue;
            border-radius: 11px;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

        }
        img{
            height: 300px;
        }
    </style>
</head>
<body>
    <div>
         <input/>
        <button>click</button> 
        <!-- <img   height="400px"/> -->
        <h2>  </h2>
        <p> </p>
  
    </div>
    <script   src="index.js"></script>
</body>
</html>

#----javascript-------# for weather app
let btn=  document.querySelector('button')
let inp=  document.querySelector('input')
let h2=  document.querySelector('h2')
let p=  document.querySelector('p')
btn.addEventListener('click',()=>{
    let apiKey='9f6290d6cda9a36a63755fadee71f83d'
let city=inp.value
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).
then((res)=>{
    return res.json()

}).then((data)=>{
    console.log(data,"heheh");
    h2.innerText=data.name
    p.innerText=data.main.temp
    

})

})


