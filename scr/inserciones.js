db.alumnos.drop()

/*Las horas a pagar son las realizadas en el último mes, que acaba de finalizar */ 
db.alumnos.insertMany([
    {
        '_id': 01,
    Nombre: 'Joaquín',
    Apellidos: 'López González',
    Edad: 19,
    Curso: '2BACH',
    Sexo: 'M',
    Horas_asistidas: 80,
    Horas_aPagar: 15, 
    Fecha_inscripción: ISODate('2020-09-01'),
    idas: 1
},
    {
        '_id': 02, 
    Nombre: 'Almudena', 
    Apellidos: 'García Pérez',
    Edad: 14, 
    Curso: '2ESO', 
    Sexo: 'F', 
    Horas_asistidas: 231, 
    Horas_aPagar: 26, 
    Fecha_inscripción: ISODate('2018-11-30'), 
    idas: 3
},
    {
        '_id': 03, 
        Nombre: 'Marta', 
        Apellidos: 'Olivera Delgado', 
        Edad: 13, 
        Curso: '1ESO', 
        Sexo: 'F', 
        Horas_asistidas: 250, 
        Horas_aPagar: 20, 
        Fecha_inscripción: ISODate('2018-12-16'), 
        idas: 5
    },
    { 
        '_id': 04, 
        Nombre: 'Juan', 
        Apellidos: 'Rodríguez Bernal', 
        Edad: 17, 
        Curso: '1BACH', 
        Sexo: 'M', 
        Horas_asistidas: 50, 
        Horas_aPagar: 16, 
        Fecha_inscripción: ISODate('2020-10-28'), 
        idas: 6
    },
    {
        '_id': 05, 
        Nombre: 'Mario', 
        Apellidos: 'Jimenez Contreras', 
        Edad: 16, 
        Curso: '4ESO', 
        Sexo: 'M', 
        Horas_asistidas: 66, 
        Horas_aPagar: 17, 
        Fecha_inscripción: ISODate('2020-11-20'), 
        idas: 2
    },
    {
        '_id': 06, 
        Nombre: 'Gema', 
        Apellidos: 'León Navarro', 
        Edad: 15, 
        Curso: '3ESO', 
        Sexo: 'F', 
        Horas_asistidas: 109, 
        Horas_aPagar: 14, 
        Fecha_inscripción: ISODate('2020-07-19'), 
        idas: 4
    },
    {
        '_id': 07, 
        Nombre: 'Jesús', 
        Apellidos: 'Ramirez Álvarez', 
        Edad: 17, 
        Curso: '1BACH', 
        Sexo: 'M', 
        Horas_asistidas: 152, 
        Horas_aPagar: 13, 
        Fecha_inscripción: ISODate('2020-05-25'), 
        idas: 7
    },
    {
        '_id': 08, 
        Nombre: 'Rafa', 
        Apellidos: 'Romero Domínguez', 
        Edad: 18, 
        Curso: '1BACH', 
        Sexo: 'M', 
        Horas_asistidas: 200, 
        Horas_aPagar: 12, 
        Fecha_inscripción: ISODate('2019-02-06'), 
        idas: 8
    },
    {
        '_id': 09, 
        Nombre: 'Rosario', 
        Apellidos: 'De los Reyes Ruíz', 
        Edad: 14, 
        Curso: '1ESO', 
        Sexo: 'F', 
        Horas_asistidas: 35, 
        Horas_aPagar: 26, 
        Fecha_inscripción: ISODate('2020-12-15'), 
        idas: 9
    },
    {
        '_id': 10, 
        Nombre: 'Laura', 
        Apellidos: 'Sanchez Romero', 
        Edad: 18, 
        Curso: '2BACH', 
        Sexo: 'F', 
        Horas_asistidas: 38, 
        Horas_aPagar: 24, 
        Fecha_inscripción: ISODate('2021-02-15'), 
        idas: 10},
    {'_id': 11, Nombre: 'Javier', Apellidos: 'Benitez Hidalgo', Edad: 16, Curso: '3ESO', Sexo: 'M', Horas_asistidas: 45, Horas_aPagar: 16, Fecha_inscripción: ISODate('2021-02-20'), idas: 3},
    {'_id': 12, Nombre: 'Raquel', Apellidos: 'Díaz de la Concha ', Edad: 17, Curso: '4ESO', Sexo: 'F', Horas_asistidas: 82, Horas_aPagar: 17, Fecha_inscripción: ISODate('2020-07-25'), idas: 4},
    {'_id': 13, Nombre: 'Ana', Apellidos: 'Vázquez Rojas', Edad: 15, Curso: '3ESO', Sexo: 'F', Horas_asistidas: 220, Horas_aPagar: 19, Fecha_inscripción: ISODate('2018-12-14'), idas: 2},
    {'_id': 14, Nombre: 'Julia', Apellidos: 'Ribas Morales', Edad: 14, Curso: '2ESO', Sexo: 'F', Horas_asistidas: 264, Horas_aPagar: 17, Fecha_inscripción: ISODate('2021-01-27'), idas: 1},
    {'_id': 15, Nombre: 'Álvaro', Apellidos: 'Martín Martínez', Edad: 13, Curso: '1ESO', Sexo: 'M', Horas_asistidas: 248, Horas_aPagar: 19, Fecha_inscripción: ISODate('2017-02-12'), idas: 5},
    {'_id': 16, Nombre: 'Luis', Apellidos: 'Duran Alcaide ', Edad: 15, Curso: '3ESO', Sexo: 'M', Horas_asistidas: 35, Horas_aPagar: 18, Fecha_inscripción: ISODate('2020-09-01'), idas: 6},
    {'_id': 17, Nombre: 'Alejandro', Apellidos: 'Burgos Muñoz', Edad: 14, Curso: '2ESO', Sexo: 'M', Horas_asistidas: 26, Horas_aPagar: 16, Fecha_inscripción: ISODate('2020-09-01'), idas: 8},
    {'_id': 18, Nombre: 'Sonia', Apellidos: 'Moreno Macia', Edad: 13, Curso: '1ESO', Sexo: 'F', Horas_asistidas: 109, Horas_aPagar: 15, Fecha_inscripción: ISODate('2020-09-01'), idas: 7},
    {'_id': 19, Nombre: 'Silvia', Apellidos: 'Rincón Lavado', Edad: 19, Curso: '2BACH', Sexo: 'F', Horas_asistidas: 99, Horas_aPagar: 20, Fecha_inscripción: ISODate('2020-09-01'), idas: 9},
    {'_id': 20, Nombre: 'Daniel', Apellidos: 'Romero Maldonado', Edad: 18, Curso: '2BACH', Sexo: 'M', Horas_asistidas: 15, Horas_aPagar: 10, Fecha_inscripción: ISODate('2020-09-01'), idas: 10},
    {'_id': 21, Nombre: 'Lucía', Apellidos: 'Valero Ruíz', Edad: 17, Curso: '1BACH', Sexo: 'F', Horas_asistidas: 21, Horas_aPagar: 15, Fecha_inscripción: ISODate('2020-09-01'), idas: 1},
    {'_id': 22, Nombre: 'Roberto', Apellidos: 'Risoto Barrero', Edad: 16, Curso: '4ESO', Sexo: 'M', Horas_asistidas: 23, Horas_aPagar: 19, Fecha_inscripción: ISODate('2020-09-01'), idas: 2},
    {'_id': 23, Nombre: 'Carmen', Apellidos: 'Nogales González', Edad: 15, Curso: '2ESO', Sexo: 'F', Horas_asistidas: 26, Horas_aPagar: 20, Fecha_inscripción: ISODate('2020-09-01'), idas: 3},
    {'_id': 24, Nombre: 'Jose', Apellidos: 'López Astola', Edad: 14, Curso: '2ESO', Sexo: 'M', Horas_asistidas: 23, Horas_aPagar: 18, Fecha_inscripción: ISODate('2020-09-01'), idas: 5},
    {'_id': 25, Nombre: 'Paula', Apellidos: 'Pellin Bueno', Edad: 13, Curso: '1ESO', Sexo: 'F', Horas_asistidas: 17, Horas_aPagar: 14, Fecha_inscripción: ISODate('2020-09-01'), idas: 7},
    {'_id': 26, Nombre: 'Pedro', Apellidos: 'Guerra Jurado', Edad: 18, Curso: '2BACH', Sexo: 'M', Horas_asistidas: 257, Horas_aPagar: 16, Fecha_inscripción: ISODate('2020-09-01'), idas: 6},
    {'_id': 27, Nombre: 'Beatriz', Apellidos: 'Manzano Lobo', Edad: 17, Curso: '1BACH', Sexo: 'F', Horas_asistidas: 64, Horas_aPagar: 14, Fecha_inscripción: ISODate('2020-09-01'), idas: 4},
    {'_id': 28, Nombre: 'Armando', Apellidos: 'Serrano Valencia', Edad: 16, Curso: '4ESO', Sexo: 'M', Horas_asistidas: 25, Horas_aPagar: 17, Fecha_inscripción: ISODate('2020-09-01'), idas: 9},
    {'_id': 29, Nombre: 'Mónica', Apellidos: 'Toscano Moya', Edad: 15, Curso: '3ESO', Sexo: 'F', Horas_asistidas: 45, Horas_aPagar: 10, Fecha_inscripción: ISODate('2020-09-01'), idas: 8},
    {'_id': 30, Nombre: 'Miguel', Apellidos: 'Dávila Durbán', Edad: 14, Curso: '1ESO', Sexo: 'M', Horas_asistidas: 21, Horas_aPagar: 13, Fecha_inscripción: ISODate('2020-09-01'), idas: 10}

])

    db.asignaturas.drop()
    db.asignaturas.insertMany([
    {
        '_id': 1, 
        Materia: 'Lengua', 
        PrecioHora:9
    },
    {
        '_id': 2, 
        Materia: 'Química', 
        PrecioHora:8
    },
    {
        '_id': 3, 
        Materia: 'Inglés', 
        PrecioHora:10
    },
    {
        '_id': 4, 
        Materia: 'Matemáticas', 
        PrecioHora:8
    },
    {
        '_id': 5, 
        Materia: 'Biología', 
        PrecioHora:8
    },
    {'_id': 6, Materia: 'Latín', PrecioHora:9},
    {'_id': 7, Materia: 'Tecnología', PrecioHora:10},
    {'_id': 8, Materia: 'Física', PrecioHora:9},
    {'_id': 9, Materia: 'Griego', PrecioHora:8},
    {'_id': 10, Materia: 'Francés', PrecioHora:11},
    ])

    /* Las horas de clases son las del último mes, es decir, las que se les debe*/

    db.profesores.drop()
    db.profesores.insertMany([
        {
            '_id': 1, 
            Nombre: 'Juan', 
            Apellidos: 'Martín Rodríguez', 
            Edad: 37, 
            Sexo: 'M', 
            _idas: 2,
        },
        {
            '_id': 2, 
            Nombre: 'Blanca', 
            Apellidos: 'Cordero Benitez', 
            Edad: 35, 
            Sexo: 'F',  
            _idas: 1,
        },
        {
            '_id': 3, 
            Nombre: 'Luisa', 
            Apellidos: 'Caballero Muñoz', 
            Edad: 34, 
            Sexo: 'F', 
            _idas: 3,
        },
        {
            '_id': 4, 
            Nombre: 'Edurado', 
            Apellidos: 'Juan Escalera', 
            Edad: 46, 
            Sexo: 'M',  
            _idas: 4,
        },
        {
            '_id': 5, 
            Nombre: 'Isabel', 
            Apellidos: 'Cuevas Jimenez', 
            Edad: 36, 
            Sexo: 'F', 
            _idas: 5,
        },
        {'_id': 6, Nombre: 'Encarna', Apellidos: 'Yanes Vega', Edad: 56, Sexo: 'F', _idas: 9},
        {'_id': 7, Nombre: 'Lidia', Apellidos: 'Aguilar Montagout', Edad: 41, Sexo: 'F', _idas: 6},
        {'_id': 8, Nombre: 'Natalia', Apellidos: 'Diez Claro', Edad: 31, Sexo: 'F', _idas: 10},
        {'_id': 9, Nombre: 'Alberto', Apellidos: 'García Álvaro', Edad: 49, Sexo: 'M', _idas: 8},
        {'_id': 10, Nombre: 'Martina', Apellidos: 'Barcia Mejías', Edad: 32, Sexo: 'F', _idas: 7},
    ])

