// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  const createHtml = (athlete) => {
    const {firstName, surname, id, races} = athlete;  
    const [latestRace] = races.slice(-1);
    // [{date, time}] = races.reverse()

   const fragment = document.createDocumentFragment();
    
  

    // Calculate total race time to minutes
    const totalTimeInMinutes = time.reduce((acc,val) => acc + val, 0);
    const hours = Math.floor(totalTimeInMinutes/60).toString().padStart(2, '0');
    const minutes = (totalTimeInMinutes % 60).toString().padStart(2, '0');

    // Create the title and list elements
    const title = document.createElement('h2');
    title.textContent= id;
    fragment.appendChild(title);
  
    // create list
    const list = document.createElement('dl');
    
    // Listing names, dates, total races
    const fullName = document.createElement('dt');
    fullName.textContent = 'Full name';
    list.appendChild(fullName);
    const fullNameValue = document.createElement('dd');
    fullNameValue.textContent = `${firstName} ${surname}`;
    list.appendChild(fullNameValue);


    const totalRaces = document.createElement('dt');
    totalRaces.textContent = 'Total Races';
    list.appendChild(totalRaces);
    const totalRacesValue = document.createElement('dd');
    totalRacesValue.textContent = races.length.toString();
    list.appendChild(totalRacesValue);

    const dateLabel = document.createElement("dt");
    dateLabel.textContent = "Event Date (Latest)";
    list.appendChild(dateLabel)
    
   
  const latestEventDate = document.createElement("dt");
  latestEventDate.textContent = "Date of most recent race (format: dd MM YYYY)";
  list.appendChild(latestEventDate);
  const latestEventDateValue = document.createElement("dd");
  const latestEventDateObj = new Date(latestRace.date);
  latestEventDateValue.textContent = latestEventDateObj.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  list.appendChild(latestEventDateValue);
 
    // Formate the race date
    // const eventDate = new Date(date);
    // const formattedDate = eventDate.toLocaleDateString('en-US', {
    //     day: 'numeric',
    //     month: 'short' ,
    //     year: 'numeric',
    // });


    const latestEventDuration = document.createElement("dt");
    latestEventDuration.textContent = "Duration of most recent race (format: hh:mm)";
    list.appendChild(latestEventDuration);
    const latestEventDurationValue = document.createElement("dd");
    const hours = Math.floor(latestRace.time / 60);
    const minutes = latestRace.time % 60;
    latestEventDurationValue.textContent = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    list.appendChild(latestEventDurationValue);
  
//Appending all additions to the DOM
dl.appendChild(ful);
dl.appendChild(dd1);
dl.appendChild(dt2);
dl.appendChild(dd2);
dl.appendChild(dt3);
dl.appendChild(dd3);
dl.appendChild(dt4);
dl.appendChild(dd4);
added.appendChild(dl);
return added;
  };
  
  [NM372], [SV782] = data
  document.querySelector(NM372).appendChild(createHtml(NM372));
  document.querySelector(SV782).appendChild(createHtml(SV782));
}