// Item array removal
//test
/* I assume there might be a simplier solution to this because wewere given:
const nameToRemove = "Ahmad";
Hovewer this option worked as well.
*/

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
const start = 1;
const deleteCount = 1;
const removedItem = names.splice(start, deleteCount);

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']


// When will we be there??

/*So there are 2 questions regarding this solution I've made but didn't fully understand.

At first i made it like this:
const timeInMin = (travelInformation[0] / 60);
const rawTime = (travelInformation[1] / timeInMin)

and it wasn't working. Also, this part was on top:
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
  When I put this part down and changed for dot notation it somehow worked.
  Hovewer, I don't fully understand why (i changed it becaused I googled a lot).
  So data.speed and data.destinationDistance are appealing to the property which is supposed to belong(be inside) to data.
  Hovewer, these properties belong to an object travelInformation.
*/

function realTime(data) {
const timeInMin = (data.speed / 60);
const rawTime = (data.destinationDistance / timeInMin);
const timeInHours = Math.floor(rawTime/60);
const timeInMinutes = Math.round(rawTime % 60);
return (timeInHours + " hours" + " and " + timeInMinutes + " minutes");
}
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
const travelTime = realTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes


// Series duration of my life


const seriesDurations = [
  {
    title: "Fleishman Is In Trouble",
    days: 0,
    hours: 3,
    minutes: 20,
  },
  {
    title: "The Peripheral",
    days: 0,
    hours: 16,
    minutes: 40,
  },
  {
    title: "Bad Sisters",
    days: 0,
    hours: 8,
    minutes: 40,
  },
  {
    title: "Kastanjemanden",
    days: 0,
    hours: 22,
    minutes: 10,
  }
];

function logOutSeriesText(data) {
const lifespan = 80;
const lifespanInMinutes = (lifespan * 365 * 24 * 60);
for (let i = 0; i < seriesDurations.length; ++i) {
let serie = seriesDurations[i];
let seriesTime = serie.minutes + serie.hours * 60 + serie.days * 24 * 60;
let seriesPercentage = (seriesTime * 100) / lifespanInMinutes;
console.log(serie.title + " " + " gave " + seriesPercentage.toPrecision(2) + " % of joy to my life")
}
}

logOutSeriesText(1);


// NOnoN0nOYes (Note taking app)


const notes = [];

function saveNote(content, id) {
  notes.push(
    {
      content: content,
      id: id
    }
  );
}

saveNote("Finish HYF homework", 1);
saveNote("Read something interesting", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// Get a note

function getNote(id) {
if (!id || !Number.isInteger(id)) {
  console.log("error");
}
const note = notes.find(note => {
  return note.id === id;
});
return note;
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function allNotes() {
  return notes;
}

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; ++i) {
    console.log("The note with id: " + notes[i].id + ", has the following note text: "
  + notes[i].content);
  }
}

logOutNotesFormatted();
