menu = [
   {
      es: "Biografía Vincent Willem van Gogh",
      en: "Vincent Willem van Gogh biography",
      ca: "Biografia de Vincent Willem van Gogh",
   },
   {
      es: "Primeros trabajos:\nde Etten a Amberes. 1881-1886.",
      en: "First works: from Etten to Amberes. 1881-1886",
      ca: "Primers treballs: de Etten a Anvers. 1881-1886",
   },
   { es: "París. 1886-1888 ", en: "Paris. 1886-1888", ca: "París. 1886-1888" },
   {
      es: "La vida en el sur:\nArlés. 1888-1889 ",
      en: "Life in the South: Arles. 1888-1889",
      ca: "La vida en el sud: Arlés. 1888-1889",
   },
   {
      es: "Ingreso en Saint Rémy de Provence. 1889-1890",
      en: "Get in Saint Rémy de Provence. 1889-1890",
      ca: "Ingrés en Saint Rémy de Provence. 1889-1890",
   },
   {
      es: "Últimos trabajos en Auvers-Sur-Oise.\n1890",
      en: "Latest works in Auvers-Sur-Oise. 1890",
      ca: "Últims treballs en Auvers-Sur-Oise. 1890",
   },
]

document.addEventListener("alpine:init", () => {
   console.log("init")
   Alpine.store("lang", window.localStorage.getItem('lang') || 'es')
   Alpine.store('menu', menu)
	Alpine.store('setLang', x => {
		console.log('setLang:', x)
		window.localStorage.setItem('lang', x)
		Alpine.store("lang", x)
	})
})
