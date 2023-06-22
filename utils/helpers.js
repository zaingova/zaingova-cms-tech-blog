module.exports = {
  // formats date into simpler formar
  format_time: (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(options) + " at " + date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  },

  // formats name into first_name + last_name
  formatName: (user) => {
    return user.first_name + user.last_name
  }
}