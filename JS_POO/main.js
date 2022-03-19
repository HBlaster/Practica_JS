// objeto literal
const natalia = {
    name: "natalia",
    age:20,
    CursosAprobados: [
        "Curso definitivo de HTML Y CSS",
        "Curso practico de HTML y CSS",
    ],
    aprobarCurso (NuevoCurso){
        this.CursosAprobados.push(NuevoCurso);
    },

}; 


function Student (name, age, cursosAprobados){
    this.name = name;
    this.age = age; 
    this.cursosAprobados = cursosAprobados;
  /*  this.cursosAprobados = function (NuevoCurso)
    {
        this.cursosAprobados.push(NuevoCurso); 
    }*/
}

Student.prototype.aprobarCurso = function (NuevoCurso)
{
    this.cursosAprobados.push(NuevoCurso); 
}

const juanita = new Student (
    "juanita",
    15,
    [
        "Curso de introduccion a la creacion de videojuegos",
        "Curso de creacion de personajes"
    ],
);