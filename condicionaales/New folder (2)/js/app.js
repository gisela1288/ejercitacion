/*
puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada)
Crear una función puedeGraduarse que tome como argumentos dos números asistencia 
y materiasAprobadas y un booleano tesisAprobada,
y devuelva true si una persona puede gruadarse o
false si no. 
Una persona puede graduarse si tiene un 75% de asistencia o más,
50 materias aprobadas o más y la tesis aprobada.

puedeGraduarse(80, 50, true)  // true
puedeGraduarse(80, 50, false) // false
puedeGraduarse(80, 45, true)  // false
puedeGraduarse(80, 45, false) // false
puedeGraduarse(65, 50, true)  // false
puedeGraduarse(33, 55, false) // false
puedeGraduarse(42, 45, true)  // false
puedeGraduarse(28, 45, false) // false

definir la funcion
1-revisar si la asitencia es>=75%
2-revisar la cantidad de materias >=50%
3-revisar tesis aprobada
si todas las condicione son true retorno un true sino retorno un false
*/


/*
const puedeGraduarse = (asistencia,matetriasAprobadas,tesisAprobada)=>{
    if (asistencia>=75 && matetriasAprobadas>=50 && tesisAprobada == true){
        return true;
    }else{
        return false
    }
};

console.log(puedeGraduarse(80, 50, true));
*/

//optimizada
const puedeGraduarse = (asistencia,matetriasAprobadas,tesisAprobada)=>(asistencia>=75 && matetriasAprobadas>=50 && tesisAprobada)


console.log(puedeGraduarse(80, 50, true));
console.log(puedeGraduarse(80, 50, false));