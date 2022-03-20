function videoPlay(id){
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Se esta reproduciendo desd ela url" + urlSecreta );
}

function videoStop(id){
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Se pauso la url" + urlSecreta );
}

export class PlatziClass { 
    constructor({
        name,
        videoID,
    })
    {
         this.name = name;
         this.videoID = videoID;   
    }

    reproducir()
    {
        videoPlay(this.videoID);
    }

    pausar()
    {
        videoStop(this.videoID);
    }
    
}












//Cursos de la plataforma
class Courses {
    constructor({
        name,
        classes = [],
    }){
        this._name = name; //pedir que no se llame al metodo con un "_"
        this.classes = classes;
    }

    get name (){
        return this._name;
    }

    set name (nuevoNombre){
        if(nuevoNombre === "nombre inventado para el ejemplo"){
            console.error("wey... no");
        }else{
            this._name = nuevoNombre;
        }
        
    }
    
};

const cursoProgBasica = new Courses ({
    name: "Curso Gratis de Programacion Basica",
});

const cursoDefinitivoHTML = new Courses ({
    name: "Curso definitivo HTML y CSS",
});

const cursoPracticoHTML = new Courses ({
    name: "Curso practico HTML y CSS",
});

//Rutas de aprendizaje

class learningPaths{
    constructor({
        name,
        courses = [],
    }){
        this.name = name;
        this.courses = courses;
    }
};

const EscuelaWeb = new learningPaths ({
    name: "Escuela de desarrollo web", 
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
        "Curso grid",
        "Curso react.js",
        "Curso basico de JavaScript"
    ],
})

const DataScience = new learningPaths({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso basico Python",
        "Matematicas para programadores",
        "Curso excel avanzado",
    ] 
})

const EscuelaVgs = new learningPaths({
    name: "Escuela de video juegos",
    courses: [
        cursoProgBasica,
        "Curso de Unity",
        "Curso de Unreal",
    ] 
})



class Student {
    constructor ({
        name, 
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) 
    {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
};

const alfredo = new Student ({
    name: "AlfredoC",
    username: "AlfredoC103",
    email: "alfredo103@ejemplo.com",
    twitter:"alfredo_C1",
})

const jose = new Student ({
    name: "joseC",
    username: "joseC103",
    email: "joseC@ejemplo.com",
    twitter:"joseC_C1",
})

