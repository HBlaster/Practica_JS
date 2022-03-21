//Agregar comentarios
class comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    })
    {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes =0;
    }

    publicar(){
        console.log(this.studentName + "(" + this.studentRole + ")" );
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}


function videoPlay(id){
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Se esta reproduciendo desd ela url" + urlSecreta );
}

function videoStop(id){
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Se pauso la url" + urlSecreta );
}

    class PlatziClass { 
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
        isFree = false,
        lang = "Spanish",
    }){
        this._name = name; //pedir que no se llame al metodo con un "_"
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
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
    isFree: true,
});

const cursoDefinitivoHTML = new Courses ({
    name: "Curso definitivo HTML y CSS",
});

const cursoPracticoHTML = new Courses ({
    name: "Curso practico HTML y CSS",
    lang: "english",
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

    publicarComentario(commentContent){
        const coment = new comment({
            content: commentContent,
            studentName: this.name,
        });
        coment.publicar();
    }
};

// Existen diferentes tipos de estudiantes en la plataforma, es necesario dar diferentes tipos de accesos para cada tipo de estudiante, para esto tenemos una clase student "master", de la cual se va a obtener la informacion general, y con "extends" la vamos a mandar llamar en las siguientes clases mas especificas, con la finalidad de no repetir codigo 

class FreeStudent extends Student {
    constructor(props){
        super(props); //se usa super para mandar llamar al constructor de la clase madre "Student"
    }
    approveCourse(newCourse){
        if(newCourse.isFree)
        {
            this.approvedCourses.push(newCourse);
        } else{
            console.warn("lo sentimos," + this.name +", solo puedes tomar cursos abiertos.");
        }
    }
}

class BasicStudent extends Student {
    constructor(props){
        super(props); 
    }

    approveCourse(newCourse){
        if(newCourse.lang !== "english")
        {
            this.approvedCourses.push(newCourse);
        } else{
            console.warn("lo sentimos," + this.name +", no puedes tomar cursos en ingles.");
        }
    }
}


class ExpertStudent extends Student {
    constructor(props){
        super(props); 
    }

    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student {
    constructor(props){
        super(props); 
    }

    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent){
        const coment = new comment({
            content: commentContent,
            studentName: this.name,
            studentRole:"profesor",
        });
        coment.publicar();
    }
}



const alfredo = new ExpertStudent ({
    name: "AlfredoC",
    username: "AlfredoC103",
    email: "alfredo103@ejemplo.com",
    twitter:"alfredo_C1",
})

const jose = new FreeStudent ({
    name: "joseC",
    username: "joseC103",
    email: "joseC@ejemplo.com",
    twitter:"joseC_C1",
})

const Freddy = new TeacherStudent ({
    name: "FreddyV",
    username: "FreddyV10",
    email: "FreddyV@ejemplo.com",
    twitter:"FreddyV_1",
})

