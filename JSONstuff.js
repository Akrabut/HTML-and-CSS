// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));


function updateRecords(id, prop, value) {
  //if tracks array is to be changed but there's no tracks array, initialize an array
  if (prop === "tracks" && collection[id][prop] === undefined) 
    collection[id][prop] = [];
  //if tracks array exists and value isn't null, append value to tracks
  if (prop === "tracks" && value != "" && value != undefined)
    collection[id][prop].push(value)
  //if prop isn't tracks, value isn't null append value to given prop, if prop doesn't exist for given record add attribute to record and add value
  if (prop != "tracks" && value != "" && value != undefined) 
    collection[id][prop] = value
  //(pre determined) if value is empty delete the given prop
  if (value === "")
    delete collection[id][prop]
  return collection;
}


// tests



