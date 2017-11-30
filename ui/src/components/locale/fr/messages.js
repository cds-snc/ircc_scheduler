module.exports = {
  l: {
    p: function(n, ord) {
      if (ord) return n === 1 ? 'one' : 'other'
      return n >= 0 && n < 2 ? 'one' : 'other'
    }
  },
  m: { Home: "Page d'accueil", 'Thank you': 'Merci', HOME: "Page d'accueil" }
}
