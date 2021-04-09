// textContent: escribe texto plano
//inneraHtml: incluye nodos/etiquetas de html
/*
       const titulo = document.querySelector ("h1");
       const parrafo = document.querySelector("p")
       
       titulo.textContent = "Nuevo Titulo";
       parrafo.innerHTML = "<strong>lorem ipsum  </strong> que se yo lo qu sigue despues";
       console.log(titulo);
       console.log(document.querySelector (parrafo));
       */

        const nombre = prompt ("ingrese su nombre");

        const titulo = document.querySelector("h1");

        titulo.innerHTML = `Hola ${nombre}`;

        const estilos = "color:blue; background-color:green;"

        titulo.style = estilos; 
