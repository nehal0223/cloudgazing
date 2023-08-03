const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');

const temp_real_val = document.getElementById('temp_real_val');

const temp_status = document.getElementById('temp_status');

const data_hide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `Plz write the name before search!!`;
        data_hide.classList.add('data_hide');
    }else{
        try{
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f34ff369e14fb5e5c3b808fd32297110`;
        const response =await fetch(url);
        const data= await response.json();
        const arrData = [data];
        console.log(arrData);

        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
        temp_real_val.innerText = arrData[0].main.temp;
        // temp_status.innerText = arrData[0].weather[0].main;

        const tempMode = arrData[0].weather[0].main;

        //condition to check sunny or cloudy
        if(tempMode == "Clear"){
            temp_status.innerHTML=
            "<i class='fas fa-sun' style='color : #eccc68;'></i>"
        }else if(tempMode == "Clouds"){
            temp_status.innerHTML=
            "<i class='fas fa-cloud' style='color : #f1f2f6;'></i>"
        }else if(tempMode == "Rain"){
            temp_status.innerHTML=
            "<i class='fas fa-cloud-rain' style='color : #a4b0be;'></i>"
        }else{
            temp_status.innerHTML=
            "<i class='fas fa-cloud' style='color : #f1f2f6;'></i>"
        }

        data_hide.classList.remove('data_hide');

        }catch(err){
            console.log('Error..:', err);
            city_name.innerText =`PLease Enter City name Properly!!`;
            data_hide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click',getInfo);
