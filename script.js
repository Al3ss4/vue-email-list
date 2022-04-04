console.log('JS OK!');

/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/


const app = new Vue ({

    el: '#app',
    data :
    {
        email : []
    },
    //utilizzo la funzione mounted, ciclo tramite axios l'api fin quando non arrivo a 10. una volta ciclato pusherò le mail generate nell'array
    mounted(){
        for (let i = 0; i < 10; i++){
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(element =>{
                   // console.log(element.data.response);
                    this.email.push(element.data.response);
                    //console.log(this.email);
                })
        }
    }

})