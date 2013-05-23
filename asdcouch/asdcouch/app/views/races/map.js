function(doc) {
  if (doc._id.substr(0,5) === "team:") {
    emit(doc._id.substr(5), {
         "teamname": doc.teamname,
         "Race1": doc.Race1,
         "Race2": doc.Race2
    });
  }
};