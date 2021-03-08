/*Horas a pagar por sexo*/
db.alumnos.aggregate([
    {$match: {$or:[{Sexo:'M'},{Sexo: 'F'}]}},
    {$group: {_id: '$Sexo', HorassinCobrar: {$sum:'$Horas_aPagar'}}}
    ]).pretty()
    { 
        "_id" : "F", 
    "HorassinCobrar" : 271 }
    { 
        "_id" : "M", 
        "HorassinCobrar" : 235 }
    
    
    /*Horas a pagar por edad*/
    
    
    db.alumnos.aggregate([
        {$group: {_id: '$Edad', HorassinCobrar: {$sum: '$Horas_aPagar'}}},
        {$sort:{_id : -1}}
    ])

    { 
        "_id" : 19, 
        "HorassinCobrar" : 35 }
    { 
        "_id" : 18, 
        "HorassinCobrar" : 62 }
    { 
        "_id" : 17, 
    "HorassinCobrar" : 75 }
    { 
        "_id" : 16, 
    "HorassinCobrar" : 69 }
    { 
        "_id" : 15, 
    "HorassinCobrar" : 81 }
    { 
        "_id" : 14, 
    "HorassinCobrar" : 116 }
    { 
        "_id" : 13, 
    "HorassinCobrar" : 68 }
    
    
    /*horas totales que se le debe a la academia*/
    db.alumnos.aggregate([
        {$group: {_id: '$Edad', HorassinCobrar: {$sum: '$Horas_aPagar'}}},
        {$sort:{_id : -1}},
        {$group: {_id: '', Total_aDeber: {$sum: '$HorassinCobrar'} }}
    ])
    
    { "_id" : "", "Total_aDeber" : 506 }
    
    /*  
    Recuento de niñas según el curso en el que están
    */
    db.alumnos.aggregate([
    {$match: {Sexo: 'F'}},
    {$group: {_id:'$Curso', NumAlumnos:{ $sum: 1}}},
    {$sort: {Curso:1}}
    ])

    { 
        "_id" : "3ESO", 
        "NumAlumnos" : 3 }
    { 
        "_id" : "2BACH", 
        "NumAlumnos" : 2 }
    { 
        "_id" : "1BACH", 
        "NumAlumnos" : 2 }
    { 
        "_id" : "1ESO", 
        "NumAlumnos" : 4 }
    { 
        "_id" : "4ESO", 
        "NumAlumnos" : 1 }
    { 
        "_id" : "2ESO", 
        "NumAlumnos" : 3 }
    
    
   
    /* Necesitamos saber cuantas horas se le debe a cada profesor,
     sabiendo que el profesor cobra la hora a dos euros menos que la academia a los alumnos, 
     cuanto dinero se le debe a cada profesor */
    
     /*HORAS*/ 
    db.asignaturas.aggregate([
        {$lookup:
        {from:'alumnos',
        localField: '_id',
        foreignField: 'idas',
        as: 'alumnos'}},
        {$project:
        {
            _id: 0,
            Asignatura: '$Materia',
            Horasnopagadas: {$sum: '$alumnos.Horas_aPagar'}
        }}
    ])


    { 
        "Asignatura" : "Lengua", 
        "Horasnopagadas" : 47 }
    { 
        "Asignatura" : "Química", 
        "Horasnopagadas" : 55 }
    {
         "Asignatura" : "Inglés", 
         "Horasnopagadas" : 62 }
    {
         "Asignatura" : "Matemáticas", 
         "Horasnopagadas" : 45 }
    {
         "Asignatura" : "Biología",
        "Horasnopagadas" : 57 }
    { 
        "Asignatura" : "Latín", 
        "Horasnopagadas" : 50 }
    {
         "Asignatura" : "Tecnología", 
         "Horasnopagadas" : 42 }
    {
         "Asignatura" : "Física", 
         "Horasnopagadas" : 38 }
    { 
        "Asignatura" : "Griego", 
        "Horasnopagadas" : 63 }
    { 
        "Asignatura" : "Francés", 
        "Horasnopagadas" : 47 }
    
    /*DINERO */
    
    db.asignaturas.aggregate([
        {$lookup:
        {from:'alumnos',
        localField: '_id',
        foreignField: 'idas',
        as: 'alumnos'}},
        {$project: {
        _id: 0,
        Asignatura: '$Materia',
        DineroAPagar: {$multiply: [ {$sum: ['$alumnos.Horas_aPagar']}, {$subtract: ['$PrecioHora', 2]}]}
     }}
    ])
    {
    "Asignatura" : "Griego",
    "DineroaPagar" : 378 }
    { 
    "Asignatura" : "Inglés", 
    "DineroaPagar" : 496 }
    { 
        "Asignatura" : "Biología", 
        "DineroaPagar" : 342 }
    { 
        "Asignatura" : "Química", 
        "DineroaPagar" : 330 }
    { 
         "Asignatura" : "Latín", 
         "DineroaPagar" : 350 }
    { 
         "Asignatura" : "Lengua", 
         "DineroaPagar" : 329 }
    {
         "Asignatura" : "Francés", 
         "DineroaPagar" : 423}
    {
         "Asignatura" : "Matemáticas", 
         "DineroaPagar" : 270}
    {
         "Asignatura" : "Tecnología", 
         "DineroaPagar" : 336}
    { 
         "Asignatura" : "Física", 
         "DineroaPagar" : 266 }
    
    /*Sabiendo que los trabajadores cobran dos euros menos la asignatura de lo que los alumnos pagan, 
    cuales son las ganancias del mes para la academia que deja cada profesor por asignatura*/
    
    db.asignaturas.aggregate([
        {$lookup:
        {from:'alumnos',
        localField: '_id',
        foreignField: 'idas',
        as: 'alumnos'}},
        {$lookup:
            {from:'profesores',
            localField: '_id',
            foreignField: '_idas',
            as: 'profesores'}},
        {$project:
        {
        _id: 0,
        Profesor: '$profesores.Nombre',
        Asignatura: '$Materia',
        DineroaPagar: {$multiply:[ {$sum: '$alumnos.Horas_aPagar'}, {$subtract: ['$PrecioHora', 2]}]},
        Ganancias: {$subtract: [{$multiply:[ {$sum: '$alumnos.Horas_aPagar'},'$PrecioHora']},
         {$multiply:[ {$sum: '$alumnos.Horas_aPagar'}, {$subtract: ['$PrecioHora', 2]}]}]}
     }},
     {$sort:{Ganancias:-1}}
    ])

    { "Profesor" : [ "Encarna" ],
    "Asignatura" : "Griego",
    "DineroaPagar" : 378, 
    "Ganancias" : 126 },

    {
         "Profesor" : [ "Luisa" ], 
    "Asignatura" : "Inglés", 
    "DineroaPagar" : 496, 
    "Ganancias" : 124 }
    { 
        "Profesor" : [ "Isabel" ], 
        "Asignatura" : "Biología", 
        "DineroaPagar" : 342, 
        "Ganancias" : 114 }
    { 
        "Profesor" : [ "Juan" ], 
        "Asignatura" : "Química", 
        "DineroaPagar" : 330, 
        "Ganancias" : 110 }
    {
         "Profesor" : [ "Lidia" ], 
         "Asignatura" : "Latín", 
         "DineroaPagar" : 350, 
         "Ganancias" : 100 }
    {
         "Profesor" : [ "Blanca" ], 
         "Asignatura" : "Lengua", 
         "DineroaPagar" : 329, 
         "Ganancias" : 94 }
    {
         "Profesor" : [ "Natalia" ], 
         "Asignatura" : "Francés", 
         "DineroaPagar" : 423, 
         "Ganancias" : 94 }
    {
         "Profesor" : [ "Edurado" ], 
         "Asignatura" : "Matemáticas", 
         "DineroaPagar" : 270, 
         "Ganancias" : 90 }
    {
         "Profesor" : [ "Martina" ], 
         "Asignatura" : "Tecnología", 
         "DineroaPagar" : 336, 
         "Ganancias" : 84 }
    {
         "Profesor" : [ "Alberto" ], 
         "Asignatura" : "Física", 
         "DineroaPagar" : 266, 
         "Ganancias" : 76 }


    /*Si un profesor imparte de 100 horas semanales tendran un plus de ganancias mayor que si no, 
    de forma que; si tiene más de 100 horas, se le restará 100 y se multiplicará 0.8 al resultado,
    en caso contrario las horas impartidas se multiplican por 0.02*/

    db.asignaturas.aggregate([
        {$lookup:
        {from:'alumnos',
        localField: '_id',
        foreignField: 'idas',
        as: 'alumnos'}},
        {$lookup:
            {from:'profesores',
            localField: '_id',
            foreignField: '_idas',
            as: 'profesores'}},
        {$project:
        {
        _id: 0,
        Profesor: {$concat: ['$profesores.Nombre','','$profesores.Apellidos']},
        Asignatura: '$Materia',
        DineroaPagar: {$multiply:[ {$sum: '$alumnos.Horas_aPagar'}, {$subtract: ['$PrecioHora', 2]}]},
        Ganancias: {$subtract: [{$multiply:[ {$sum: '$alumnos.Horas_aPagar'},'$PrecioHora']},
         {$multiply:[ {$sum: '$alumnos.Horas_aPagar'}, {$subtract: ['$PrecioHora', 2]}]}]},
        plus: {$cond: { if: {$gte: ['$Ganancias',110]}, then:[{$multiply: [{$subtract: ['$Ganancias',100]}, 0.8]}], else:[{$multiply: ['$Ganancias', 0.02]}]}}
    }},
      {$sort:{Ganancias:-1}}
    ])

    { 
        "Profesor" : [ "Encarna Yanes Vega" ], 
        "Asignatura" : "Griego", 
        "DineroaPagar" : 378, 
        "Ganancias" : 126, 
        "plus": 20.8}
    { 
        "Profesor" : [ "Luisa Caballero Muñoz" ],
         "Asignatura" : "Inglés", 
         "DineroaPagar" : 496, 
         "Ganancias" : 124, 
         "plus": 19.2}
    { 
        "Profesor" : [ "Isabel Cuevas Jimenez" ],
        "Asignatura" : "Biología", 
        "DineroaPagar" : 342, 
        "Ganancias" : 114, 
        "plus": 11.2}
    {
         "Profesor" : [ "Juan Martín Rodríguez" ], 
         "Asignatura" : "Química", 
         "DineroaPagar" : 330, 
         "Ganancias" : 110, 
         "plus": 8}
    {
         "Profesor" : [ "Lidia Aguilar Montagout" ], 
         "Asignatura" : "Latín", 
         "DineroaPagar" : 350, 
         "Ganancias" : 100, 
         "plus": 0.8}
    { 
        "Profesor" : [ "Blanca Cordero Benitez" ], 
        "Asignatura" : "Lengua", 
        "DineroaPagar" : 329, 
        "Ganancias" : 94, 
        "plus": 1.88}
    {
         "Profesor" : [ "Natalia Diez Claro" ], 
         "Asignatura" : "Francés", 
         "DineroaPagar" : 423, 
         "Ganancias" : 94, 
         "plus": 1.88}
    {
         "Profesor" : [ "Edurado Juan Escalona" ], 
         "Asignatura" : "Matemáticas", 
         "DineroaPagar" : 270, 
         "Ganancias" : 90, 
         "plus": 1.8}
    {
         "Profesor" : [ "Martina Barcia Mejias" ], 
         "Asignatura" : "Tecnología", 
         "DineroaPagar" : 336, 
         "Ganancias" : 84, 
         "plus": 1.68}
    {
         "Profesor" : [ "Alberto García Álvaro" ], 
         "Asignatura" : "Física", 
         "DineroaPagar" : 266, 
         "Ganancias" : 76, 
         "plus": 1.52}


/*Tenemos una tarifa plus para los alumnos que han impartido más de 200 clases, para ellos, 
cada 10 clases, 1 es gratis.¿Cuántas clases deben este mes ralmente?*/
    db.alumnos.aggregate([
        { $match: {$expr: { $gt: [ "$Horas_asistidas", 200 ]}}},
        {$group:
            { _id:{ año: {$year: "$Fecha_inscripción"}}, AlumnosPlusporAño:{$sum: 1 }}},
        {$lookup:
            {from:'asignaturas',
            localField: 'idas',
            foreignField: '_id',
            as: 'alumnos'}},
        {$project:
        {_id:1,
        AlumnosPlusporAño:1,
        Asignatura: '$Materia',
        TarifaPlus: {$subtract: ['$Horas_aPagar',{$divide: ['$Horas_aPagar',10]}]}}}
            
    ])
    { 
        "_id" : [2017], 
        "AlumnosPlusporAño" : 1 , 
        "Asignatura" : "Biología", 
        "TarifaPlus" : 18}
    {
         "_id" : [2019], 
         "AlumnosPlusporAño" : 1 , 
         "Asignatura" : "Física", 
         "TarifaPlus" : 11}
    {
         "_id" : [2019], 
         "AlumnosPlusporAño" : 1 , 
         "Asignatura" : "Latín", 
         "TarifaPlus" : 15}
