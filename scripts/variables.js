const $ = e => document.querySelector(e);
let  config = {
    theme: localStorage.getItem("tema") ||  'vs-dark' ,
    lineNumbers: localStorage.getItem("lineNumbers") || "on",
    wordWrap:localStorage.getItem("wordWrap") || "off",
    fontSize:localStorage.getItem("fontSize") || 16,
    tabSize:localStorage.getItem("tema") || 2,
    minimap:{ enabled: localStorage.getItem("minimap") ||  true },
    cursorStyle: localStorage.getItem("cursorStyle") ||"line",
    cursorBlinking:localStorage.getItem("cursorBlinking") || "blink",
    cursorSmoothCaretAnimation:localStorage.getItem("cursorSmoothCaret") || false,
    fontLigatures: true,
    automaticLayout: true
}



  $("#theme").value = config.theme,
  $("#fontSize").value = config.fontSize
   $("#minimap").value = config.minimap.enabled
   $("#lineNumbers").value = config.lineNumbers
   $("#wordWrap").value = config.wordWrap
   $("#cursorStyle").value = config.cursorStyle
   $("#cursorBlinking").value = config.cursorBlinking
   $("#cursorSmoothCaret").value = config.cursorSmoothCaretAnimation

let suggestions = [];
let html = `<!DOCTYPE html>
<html lang="es">
<head> 
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Conoce a Boruto</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body id="body" class="bg-gray-900 text-white font-sans">

  <!-- Sección Hero -->
  <section class="relative flex items-center justify-center min-h-screen bg-cover bg-center text-center px-4"
    style="background-image: url('https://pollinations.ai/p/una+fondo+de+Boruto+con+estilo+anime');">
    <div class="absolute inset-0 bg-black bg-opacity-60"></div>
    <div class="relative z-10 p-4 sm:p-8">
      <h1 class="text-3xl sm:text-5xl font-bold text-yellow-400 transition duration-500 ease-in-out transform hover:scale-105">
        Boruto Uzumaki
      </h1>
      <p class="mt-3 text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
        Hijo de Naruto Uzumaki y protagonista de la nueva generación de ninjas.
      </p>
      <a href="#historia" class="mt-6 inline-block px-5 py-3 text-base sm:text-lg font-bold text-black bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500 transition duration-500">
        Conoce su historia 🔥
      </a>
    </div>
  </section>

  <!-- Sección Historia -->
  <section id="historia" class="py-12 px-4 sm:px-8 text-center">
    <h2 class="text-3xl sm:text-4xl font-bold text-yellow-400">Su Historia</h2>
    <p class="mt-3 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
      Boruto es el hijo de Naruto Uzumaki y Hinata Hyūga. Aunque tiene grandes habilidades como ninja, 
      al principio rechaza la figura de su padre debido a su ausencia en casa. Con el tiempo, aprende el verdadero significado 
      del sacrificio y la responsabilidad.
    </p>
    <div class="mt-6 flex justify-center">
      <img src="https://pollinations.ai/p/una+imagen+de+Boruto+con+Naruto+en+el+paisaje+de+Konoha+estilo+anime" 
           alt="Boruto y Naruto" class="w-full sm:w-96 rounded-lg shadow-lg transition duration-500 hover:scale-105">
    </div>
  </section>

  <!-- Sección Habilidades -->
  <section class="py-12 px-4 sm:px-8 bg-gray-800 text-center">
    <h2 class="text-3xl sm:text-4xl font-bold text-yellow-400">Sus Habilidades</h2>
    <p class="mt-3 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
      Boruto ha desarrollado varias técnicas poderosas, como el Rasengan invisible, el Jōgan y el Karma.
    </p>
    <div class="mt-6 flex flex-col sm:flex-row justify-center gap-4">
      <img src="https://pollinations.ai/p/una+imagen+de+Boruto+usando+el+Rasengan+en+estilo+anime" 
           alt="Rasengan" class="w-full sm:w-64 rounded-lg shadow-lg hover:scale-110 transition duration-500">
      <img src="https://pollinations.ai/p/una+imagen+de+Boruto+usando+el+Jogan+estilo+anime" 
           alt="Jōgan" class="w-full sm:w-64 rounded-lg shadow-lg hover:scale-110 transition duration-500">
    </div>
  </section>

  <!-- Sección Luchas y Enemigos -->
  <section class="py-12 px-4 sm:px-8 text-center">
    <h2 class="text-3xl sm:text-4xl font-bold text-yellow-400">Luchas y Enemigos</h2>
    <p class="mt-3 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
      A lo largo de la serie, Boruto enfrenta poderosos enemigos, como Momoshiki Ōtsutsuki, quien pone a prueba sus habilidades.
    </p>
    <div class="mt-6 flex justify-center">
      <img src="https://pollinations.ai/p/una+imagen+de+Boruto+enfrentando+a+momoshiki+Ōtsutsuki+estilo+anime" 
           alt="Boruto vs Momoshiki" class="w-full sm:w-96 rounded-lg shadow-lg transition duration-500 hover:scale-105">
    </div>
  </section>

  <!-- Sección Final -->
  <section class="py-12 px-4 sm:px-8 text-center bg-gray-800">
    <h2 class="text-3xl sm:text-4xl font-bold text-yellow-400">¿Listo para conocer más?</h2>
    <p class="mt-3 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
      Boruto sigue su camino ninja enfrentando nuevos desafíos y enemigos. ¡Acompáñalo en su viaje!
    </p>
    <a href="#body" class="mt-6 inline-block px-5 py-3 text-base sm:text-lg font-bold text-black bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500 transition duration-500">
      Ver más 🔥
    </a>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-800 py-6 px-4 text-center">
    <div class="max-w-5xl mx-auto flex flex-col items-center">
      <div class="flex flex-wrap justify-center gap-4">
        <a href="https://www.crunchyroll.com" target="_blank" class="text-yellow-400 hover:text-yellow-500 transition duration-500">Crunchyroll</a>
        <a href="https://www.funimation.com" target="_blank" class="text-yellow-400 hover:text-yellow-500 transition duration-500">Funimation</a>
        <a href="https://www.netflix.com" target="_blank" class="text-yellow-400 hover:text-yellow-500 transition duration-500">Netflix</a>
        <a href="https://www.animeflv.net" target="_blank" class="text-yellow-400 hover:text-yellow-500 transition duration-500">AnimeFLV</a>
      </div>
      <p class="mt-4 text-gray-400">&copy; 2025 Boruto Fan Page. Todos los derechos reservados.</p>
    </div>
  </footer>

</body>
</html>
`
let css1 = ` /* Scroll suave en toda la página */
    html {
      scroll-behavior: smooth;
    }
    /* Estilos personalizados para el scrollbar en navegadores Webkit */
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #1f2937; /* bg-gray-800 */
    }
    ::-webkit-scrollbar-thumb {
      background-color: #fbbf24; /* text-yellow-400 */
      border-radius: 10px;
      border: 2px solid #1f2937;
      transition: background-color 0.3s ease;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: #f59e0b; /* hover: text-yellow-500 */
    }`
let js1 = `//este es un editor de javascript`
let filebutton = $("#ajustes")