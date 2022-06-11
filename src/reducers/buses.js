const initialState = [
  {
    id: '214',
    name: 'Vijayalakshmi Travels',
    depatureTime: '18:30',
    arrivalTime: '06:15',
    fare: '1000',
    boardingPoints: ['Koyembedu', 'Ashok Pillar', 'Guindy', 'Tambaram'],
    droppingPoints: ['Salem', 'Erode', 'Erode ByPass'],
    date: "2022-11-06"
  },
  {
    id: '102',

    name: 'Mettur special Travels',
    depatureTime: '22:30',
    arrivalTime: '08:15',
    fare: '1200',
    boardingPoints: ['Koyembedu', 'Ashok Pillar', 'Guindy', 'Tambaram'],
    droppingPoints: ['Salem', 'Erode', 'Erode ByPass'],
    date: "2022-11-06"
  },
  {
    id: '786',
    name: 'Garuda special Travels',
    depatureTime: '22:30',
    arrivalTime: '08:15',
    fare: '1200',
    boardingPoints: ['Koyembedu', 'Ashok Pillar', 'Guindy', 'Tambaram', 'surat'],
    droppingPoints: ['Salem', 'Erode', 'Erode ByPass', 'mumbai'],
    date: "2022-11-06"
  },
  {
    id: '618',
    name: 'Ram special Travels',
    depatureTime: '22:30',
    arrivalTime: '08:15',
    fare: '1200',
    boardingPoints: ['Koyembedu', 'Ashok Pillar', 'Guindy', 'Tambaram'],
    droppingPoints: ['Salem', 'Erode', 'Erode ByPass'],
    date: "2022-11-06"
  },
];
const buses = (state = initialState, action) => {  //state reducer
  return state;
};

export default buses;