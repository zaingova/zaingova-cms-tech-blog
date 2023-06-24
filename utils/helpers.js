module.exports = {
  // formats date into simpler formar
  format_time: (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(options) + " at " + date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  },
}