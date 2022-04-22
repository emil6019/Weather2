window.addEventListener('load', ()=>{
    let lon;
    let lat;
    let key = '220cdf330c36d800193fc7954dc6220d';
    let temperatureDescription = document.getElementById('melumat')
    let temperatureDegree = document.getElementById('derece')
    let locationTimezone = document.getElementById('erazi')
    let degreeSection = document.getElementById('section')
    let span = document.getElementById('span')
    
        if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            lon = position.coords.longitude;
            lat = position.coords.latitude
            console.log(position)
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
            
            fetch(api)
            .then(response => {
                return response.json()
            })
            .then(data => {
                
                const temp = data.main.temp;
                const description = data.weather[0].description
                const country = data.sys.country
                const region = data.name
                const hava = data.weather[0].icon
                temperatureDegree.textContent = temp
                temperatureDescription.textContent = description
                locationTimezone.textContent = country + '/' + region
                document.getElementById("sekil").src=`https://openweathermap.org/img/wn/${hava}@2x.png`;
                let celcius = (temp - 273.15)
                degreeSection.addEventListener('click', () =>{
                    if(span.textContent === 'K'){
                        span.textContent = "C"
                        temperatureDegree.textContent = celcius
                    }
                    else{
                        span.textContent = 'K'
                        temperatureDegree.textContent = temp
                    }
                })
                



            })
        
        })

        
    }


    
})
