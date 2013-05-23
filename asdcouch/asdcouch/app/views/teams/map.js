function(doc) {
  if (doc._id.substr(0,5) === "team:") {
    emit(doc._id);
  }
};