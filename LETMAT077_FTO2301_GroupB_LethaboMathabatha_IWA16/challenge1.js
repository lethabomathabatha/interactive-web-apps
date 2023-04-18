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
    const [latestRace] = races.slice(-1); // destructuring last item of the races array

    // Create the title and list elements
    const dl = document.createElement('dl');
    const dt1 = document.createElement('dt');
    const dd1 = document.createElement('dd');
    const dt2 = document.createElement('dt');
    const dd2 = document.createElement('dd');
    const dt3 = document.createElement('dt');
    const dd3 = document.createElement('dd');
    const dt4 = document.createElement('dt');
    const dd4 = document.createElement('dd');

    
    const list = document.createElement('dl');

    // athlete name and title
    const h2 = document.createElement('h2');
    h2.textContent = `${id}`;

    dt1.textContent = 'Athlete: ';
    dd1.textContent = `${firstName} ${surname}`;

    // total races
    dt2.textContent = 'Total Races: ';
    dd2.textContent = races.length;

    // latest race date
    dt3.textContent = 'Event Date (Latest): ';
    dd3.textContent = new Date(latestRace.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
    });

    // latest race time, formatted to minutes
    const totalTime = latestRace.time.reduce((acc, curr) => acc + curr, 0);
    const hours = Math.floor(totalTime / 60).toString().padStart(2, '0');
    const minutes = (totalTime % 60).toString().padStart(2, '0');
  
    // total time
    dt4.textContent = 'Total Time (Latest): ';
    dd4.textContent = `${hours}:${minutes}`;

   // append elements to list
    dl.appendChild(h2);
    dl.appendChild(dt1);
    dl.appendChild(dd1);
    dl.appendChild(dt2);
    dl.appendChild(dd2);
    dl.appendChild(dt3);
    dl.appendChild(dd3);
    dl.appendChild(dt4);
    dl.appendChild(dd4);

    return dl;
  };
  
  const NM372 = 'NM372';
  const SV782 = 'SV782';
  document.querySelector(`#${NM372}`).appendChild(createHtml(data.response.data[NM372]));
  document.querySelector(`#${SV782}`).appendChild(createHtml(data.response.data[SV782]));
