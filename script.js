let noteMax = 50


function getNoteMax(noteMax) {
    let noteA = noteMax >=90 && noteMax <=100
    let noteB = noteMax >=80 && noteMax <=89
    let noteC = noteMax >=70 && noteMax <=79
    let noteD = noteMax >=60 && noteMax <=69
    let noteF = noteMax <=60

    let noteMaxFinal;

    if (noteA) {
        noteMaxFinal = 'A'
    } else if (noteB) {
        noteMaxFinal = 'B'
    } else if (noteC) {
        noteMaxFinal = 'C'
    } else if (noteD) {
        noteMaxFinal = 'D'
    } else if (noteF) {
        noteMaxFinal = 'F'
    } else {
        noteMaxFinal = "nota inválida"
    }

    return noteMaxFinal
}

console.log(getNoteMax(200))
console.log(getNoteMax(100))
console.log(getNoteMax(101))
console.log(getNoteMax(60))
console.log(getNoteMax(20))
console.log(getNoteMax(80))
console.log(getNoteMax(200))
console.log(getNoteMax(200))
