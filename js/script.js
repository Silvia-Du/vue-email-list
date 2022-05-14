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

    teamList: [
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
        name: 'Leila',
        image: '6',
        email: '',
      },
      {
        name: 'Luca',
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
        name: 'Sara',
        image: '10',
        email: '',
      }
    ],

    eMailList : [],
    Selectedindex: 0,
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

    getActiveMember(index){
      this.Selectedindex = index;
      
    },

    getMailToUser(index){
      console.log(index, 'mail index');
      console.log(this.eMailList[index], 'email dell index');
      this.teamList[this.Selectedindex].email = this.eMailList[index];
    }


  },



  mounted(){
    

    this.getEMailList()
  }
})