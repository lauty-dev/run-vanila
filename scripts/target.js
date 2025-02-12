function tabsselect (e1,e2){
     $(e1).style.borderColor = "#3f3f46"
 $(e2).style.borderColor = "#10b981"
}



filebutton.addEventListener("click", () => {
  if( $("#nabar").style.transform === "translate(-100%)"){
 $("#nabar").style.transform = "translate(0)"
 tabsselect("#editores","#ajustes")

} else {
     $("#nabar").style.transform = "translate(-100%)"
     tabsselect("#ajustes","#editores")
  }
})


$("#app").addEventListener("click", () => {
 $("#nabar").style.transform = "translate(-100%)"
 tabsselect("#ajustes","#editores")
})

$("#editores").addEventListener("click", () => {
    $("#nabar").style.transform = "translate(-100%)"
    tabsselect("#ajustes","#editores")
   })



   $(".recet").addEventListener("click", () => {


    localStorage.setItem("tema" ,"")
    localStorage.setItem("fontSize" ,"")
    localStorage.setItem("minimap" ,"")
    localStorage.setItem("lineNumbers" ,"") 
    localStorage.setItem("wordWrap" ,"")
    localStorage.setItem("cursorStyle","")
    localStorage.setItem("cursorBlinking" ,"")
    localStorage.setItem("cursorSmoothCaret" ,"")

    html5.updateOptions({
        ...config
       });
       css.updateOptions({
         ...config
        });
        js.updateOptions({
         ...config
        });
        $("#theme").value = config.theme,
        $("#fontSize").value = config.fontSize
         $("#minimap").value = config.minimap.enabled
         $("#lineNumbers").value = config.lineNumbers
         $("#wordWrap").value = config.wordWrap
         $("#cursorStyle").value = config.cursorStyle
         $("#cursorBlinking").value = config.cursorBlinking
         $("#cursorSmoothCaret").value = config.cursorSmoothCaretAnimation

   })


   $(".configdown").addEventListener("click", () => {


    const configJSON = JSON.stringify(config, null, 2);

    // Creamos el archivo
    const file = new File([configJSON], "configuracion.json", {
        type: "application/json",
        lastModified: new Date(),
    });

    // Generamos una URL temporal para el archivo
    const fileUrl = URL.createObjectURL(file);

    // Creamos un enlace de descarga
    const a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", "configuracion")
    document.body.appendChild(a);
    a.click();

    // Limpiamos la URL temporal
    setTimeout(() => {
        URL.revokeObjectURL(fileUrl);
        document.body.removeChild(a);
    }, 100);

   })

