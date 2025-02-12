
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.30.1/min/vs' }});
require(['vs/editor/editor.main'], function() {
    document.body.style.opacity = "1"
  window.html5 = monaco.editor.create(document.getElementById('editorhtml'), {
        value: [html].join('\n'),
        language: 'html',
        ...config
    });
   window.css = monaco.editor.create(document.getElementById('editorcss'), {
        value: [css1].join('\n'),
        language: 'css',
        ...config
    });
   window.js =   monaco.editor.create(document.getElementById('editorjs'), {
        value: [js1].join('\n'),
        language: 'javascript',
        ...config
    });
    
    emmetMonaco.emmetHTML(monaco);
    monaco.languages.registerCompletionItemProvider('html', {
        provideCompletionItems: function (model, position) {
       
          suggestions.push({
            label: 'div',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: '<div class="p-4 bg-blue-500 text-white"></div>',
            detail: 'Elemento div con clases de Tailwind'
          });
          suggestions.push({
            label: 'span',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: '<span class="text-red-500"></span>',
            detail: 'Elemento span con clase de Tailwind'
          });
          return { suggestions: suggestions };
        }
      });



    html5.onDidChangeModelContent(playground);
    css.onDidChangeModelContent(playground);
    js.onDidChangeModelContent(playground);


 function playground() {
const blob = new window.Blob([AR()], { type: 'text/html' });

  const url = URL.createObjectURL(blob);

 /*const file = new File([AR()], "archivo.text", {
    type: "text/html",
    lastModified: new Date(),
  });
  
  // Generamos una URL temporal para el archivo
  const fileUrl = URL.createObjectURL(file);

  // Redirigir al usuario al archivo
*/
$("#priview").src =  url
$("#url").value = url




}

const AR = () => {
    return `
    

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
${css.getValue()}
</style>
    </head>
<body>
${html5.getValue()}

<script>
${js.getValue()}
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Evita que se recargue el iframe o navegue
        const targetId = e.target.getAttribute('href').substring(1); // Obtiene el ID de la sección destino
        const targetElement = document.getElementById(targetId); // Busca el elemento
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente hacia la sección
        }
    });
});


</script>
</body>
</html>
    
    `
    
}

playground()
$(".reload").addEventListener("click", playground)


Split(['#home', '#web'], {
    minSize: 0,
    gutterSize: 3,
    
    cursor: 'col-resize'
  });



dragula([$('.cont')])



function applyChanges() {
  if (!html5) return;
  let actualizacion = {
    
    theme: document.getElementById("theme").value,
    fontSize: parseInt(document.getElementById("fontSize").value, 10),
    minimap: { enabled: document.getElementById("minimap").value === "true" },
    lineNumbers: document.getElementById("lineNumbers").value,
    wordWrap: document.getElementById("wordWrap").value,
    cursorStyle: document.getElementById("cursorStyle").value,
    cursorBlinking: document.getElementById("cursorBlinking").value,
    cursorSmoothCaretAnimation: document.getElementById("cursorSmoothCaret").value === "true"
  }
  html5.updateOptions({
   ...actualizacion
  });
  css.updateOptions({
    ...actualizacion
   });
   js.updateOptions({
    ...actualizacion
   });


  localStorage.setItem("tema",$("#theme").value)
  localStorage.setItem("fontSize",$("#fontSize").value)
  localStorage.setItem("minimap",$("#minimap").value)
  localStorage.setItem("lineNumbers",$("#lineNumbers").value) 
  localStorage.setItem("wordWrap",$("#wordWrap").value)
  localStorage.setItem("cursorStyle",$("#cursorStyle").value)
  localStorage.setItem("cursorBlinking",$("#cursorBlinking").value)
  localStorage.setItem("cursorSmoothCaret",$("#cursorSmoothCaret").value)
}

// Escuchar cambios en los select e inputs para aplicarlos en tiempo real
document.querySelectorAll(".config").forEach(element => {
  element.addEventListener("input", applyChanges);
});

window.addEventListener("resize", () => {
  html5.layout();
  css.layout();
  js.layout();
});
});


document.querySelectorAll(".tanbsleng").forEach(btn => {
    btn.addEventListener("click", e => {
        // Elimina la clase de todos los botones
        document.querySelectorAll(".tanbsleng").forEach(b => b.classList.remove("bg-[#2e2e2e]"));

        // Agrega la clase solo al botón clickeado
        e.target.classList.add("bg-[#2e2e2e]");
    });
});


