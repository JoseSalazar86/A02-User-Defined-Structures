let libro ={
    titulo : "",
    autor : "",
    pagina : 315,
    resumen: function() {
        return `Título: "${this.titulo}", Autor: ${this.autor}, Páginas: ${this.paginas}`;
    }
};

let biblioteca = [
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        paginas: 417,
        resumen: function() {
            return `Título: "${this.titulo}", Autor: ${this.autor}, Páginas: ${this.paginas}`;
        }
    },
    {
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        paginas: 96,
        resumen: function() {
            return `Título: "${this.titulo}", Autor: ${this.autor}, Páginas: ${this.paginas}`;
        }
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        paginas: 328,
        resumen: function() {
            return `Título: "${this.titulo}", Autor: ${this.autor}, Páginas: ${this.paginas}`;
        }
    },
    {
        titulo: "Moby Dick",
        autor: "Herman Melville",
        paginas: 585,
        resumen: function() {
            return `Título: "${this.titulo}", Autor: ${this.autor}, Páginas: ${this.paginas}`;
        }
    }
];

biblioteca.forEach(libro => {
    console.log(libro.resumen());
});