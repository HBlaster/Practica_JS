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

//prototipos

function Student (name, age, cursosAprobados){
    this.name = name;
    this.age = age; 
    this.cursosAprobados = cursosAprobados;
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


//prototipos con la sintaxis de clases
class Student2 {
    constructor(
        {
            name,
            age,
            CursosAprobados =[],
            email,
        })
        {
            this.name = name;
            this.age = age;
            this.CursosAprobados = CursosAprobados;
            this.email =email;
        }

    aprobarcursos (nuevoCurso){
        this.CursosAprobados.push(nuevoCurso);
    }

};

const miguel = new Student2 ({
    name: "miguel",
    age: 28,
    email: "miguel@gmail.com"
}
);