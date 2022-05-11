/*
Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/
const app = new Vue({

  el : '#app',

  data:{
    isLoading : true, 
    eMail : '',
    numNewMail: 10,
    eMailList : [],
  },

  methods:{

    getEMailList(){

      for(let i = 0; i< this.numNewMail; i++){

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response =>  {
        this.eMail = response.data.response;
        this.eMailList.push(this.eMail);
        this.isLoading = false;
        })

      }


    }
  },



  mounted(){
    

    this.getEMailList()
  }
})