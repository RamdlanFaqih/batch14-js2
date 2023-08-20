const names = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
  ];
  
  function searchName(search, limit, callback) {
    const filteredNames = names.filter(name => name.toLowerCase().includes(search.toLowerCase()));
    callback(filteredNames.slice(0, limit));
   
  }
  
  function callback(result) {
    console.log(result);
  }
  
  searchName("an", 3, callback);
  