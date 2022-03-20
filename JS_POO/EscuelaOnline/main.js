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
        "Curso definitivo HTML y CSS",
        "Curso grid",
        "Curso react.js",
        "Curso basico de JavaScript"
    ],
})

const DataScience = new learningPaths({
    name: "Escuela de Data Science",
    courses: [
        "Curso basico Python",
        "Matematicas para programadores",
        "Curso excel avanzado",
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

