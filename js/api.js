addSubmitButton()


function handleSubmit(){
    racerYear=document.getElementsByName('year')[0].value
    console.log(racerYear)
    racerRound=document.getElementsByName('round')[0].value
    console.log(racerRound)
    doAPIcall(racerYear, racerRound)
}

function addSubmitButton(){
    button = document.createElement('button')
    button.innerText="Search";
    button.classList.add('btn', 'btn-primary');
    button.addEventListener('click',()=>handleSubmit());
    document.body.appendChild(button);
}


async function doAPIcall(year, round){
    result = await axios.get(`http://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
        .catch((e)=>{console.error(e);alert("Bad Racer Name!!!!!")})
            .finally(console.log("API request is Over"))
    console.log(result)
    console.log(result.data)
       
    
    result= result.data
    driverStandings =result.MRData.StandingsTable.StandingsLists[0].DriverStandings
    console.log(driverStandings)
    for (let driver of driverStandings ){
        console.log(driver)

        tbody = document.querySelector('#table_body');
       

        tr= document.createElement('tr');
        console.log(tbody)
        console.log(tr)
        tbody.appendChild(tr);

        th = document.createElement('th');
        th.scope='row';
        tr.innerText = driver.Driver.givenName;
        tr.appendChild(th)

        td = document.createElement('td');
        td.innerText = driver.Driver.familyName;
        tr.appendChild(td)

        td = document.createElement('td');
        td.innerText = driver.position;
        tr.appendChild(td)

        td = document.createElement('td');
        td.innerText = driver.wins;
        tr.appendChild(td)

        td = document.createElement('td');
        td.innerText = driver.Driver.dateOfBirth;
        tr.appendChild(td)

        td = document.createElement('td');
        td.innerText = driver.Driver.nationality;
        tr.appendChild(td)

        td = document.createElement('td');
        td.innerText = driver.Constructors[0].name;
        tr.appendChild(td)


        

    }


}
