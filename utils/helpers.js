module.exports = {
   // formats date into simpler formar
   formatDate: (date) => {
      return date.toLocalDateString();
   },

   // formats name into first_name + last_name
   formatName: (user) => {
      return user.first_name + user.last_name
   }
}