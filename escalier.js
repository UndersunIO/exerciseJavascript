let dimension = parseInt(process.argv[2]);

if (typeof dimension === 'number' && dimension > 0) {
    for (let hauteur = 0; hauteur < dimension; hauteur++)
    {
       let ligne = ['|'];
        for  (let contour = 0; contour < dimension - hauteur; contour++)
        {
           ligne += "°";
        }
        for(let sap = dimension - hauteur; sap <= dimension; sap++)
        {
           ligne += '#';
        }
            console.log(ligne);
    } 
} else {
    console.log("Merci de saisir le nombre d'étage : ")
}


