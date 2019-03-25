//How to (one-way) bind value from a data/variable to the HTML/UI elements
Vue.config.devtools = true;
new Vue({
    el: '#top',
    data: {
      userCount: 4,
      users: [],
      currentImage: ""
    },
    methods: {
        getUser(){
            //Click handler for the first button
            //alert (`About to fetch ${this.userCount} random users`);
            fetch(`https://randomuser.me/api?results=${this.userCount}`)
                 .then(r => r.json())  // convert the response 'r' to a JSON object
                 .then(u => {
                 // This will show a JSON string inside the <div> defined above
                 this.users = u.results;            
   });
        },
        resetUser(){
            this.users = []
            this.currentImage = '';
        },
        enlargeImg(url){
            this.currentImage = url;
        },
        resetImg(){
           this.currentImage = '';
        }
    }
  })
  