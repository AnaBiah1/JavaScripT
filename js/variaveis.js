function exemploVar(){
    if(true){
        //definir as variaveis
        var x=10;
        let y=20;
        const z=30;
    }
    console.log(x); //acessivel
    console.log(y); //Erro: y não esta definido
    console.log(z); //Erro: z não esta definido
}