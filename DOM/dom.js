      //  const quote = document.getElementsByTagName("h1");
      //   // It displays inner text of tag
      //   console.log(quote[1].innerText);
      //   console.log(quote[0].innerText);
      //   // <=It displayed as html collection
      //   console.log(quote);

      //   const Aquote=document.getElementsByClassName("A");
      //   console.log(Aquote[1].innerText);
      //   console.log(Aquote[0].innerText);

      
        
        // const userName = document.querySelector(".user-name");
        // console.log(userName);
        // userName.setAttribute("placeholder","Enter your name");
        // userName.setAttribute("style","background-color:purple");


        // const todos=document.querySelectorAll(".todo");
        // console.log(todos[0].innerText);
        // todos[0].innerText="Replaced";

        const todos=document.querySelectorAll(".todo")
        for (let todo of todos){
          todo.innerText="Replaced";
        }

       
       