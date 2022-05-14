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

    teamMember: [
      {
        name: 'Luisa',
        image: '1',
        email: '',
      },
      {
        name: 'Marta',
        image: '2',
        email: '',
      },
      {
        name: 'Andrea',
        image: '3',
        email: '',
      },
      {
        name: 'Marco',
        image: '4',
        email: '',
      },
      {
        name: 'Tim',
        image: '5',
        email: '',
      },
      {
        name: 'Lara',
        image: '6',
        email: '',
      },
      {
        name: 'Jennefer',
        image: '7',
        email: '',
      },
      {
        name: 'Stefano',
        image: '8',
        email: '',
      },
      {
        name: 'Luisa B',
        image: '9',
        email: '',
      },
      {
        name: 'Marco',
        image: '10',
        email: '',
      }
    ],

    eMailList : [],
    SelectedMember: 0,
    numNewMail: 10,
    isLoading : true, 
    isError : false,
    eMail : '',
    errorMsg: ''
  },

  methods:{

    getEMailList(){

      for(let i = 0; i< this.numNewMail; i++){

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response =>  {
        this.eMail = response.data.response;
        this.eMailList.push(this.eMail);
            
        if(this.eMailList.length === this.numNewMail){

          setTimeout(()=>{
            this.isLoading = false;
          }, 2000 )  
        }

        })
        .catch(error =>{
          this.errorMsg = error;
          this.isError = true;
        })  
      }
      
    },


  },



  mounted(){
    

    this.getEMailList()
  }
})