 let users=[
    {
      "createdAt": "2022-02-21T09:57:14.768Z",
      "name": "Anna Leuschke",
      "avatar": "https://cdn.fakercloud.com/avatars/cadikkara_128.jpg",
      "id": "1"
    },
    {
      "createdAt": "2022-02-20T11:46:25.880Z",
      "name": "Virginia Smith",
      "avatar": "https://cdn.fakercloud.com/avatars/madewulf_128.jpg",
      "id": "2"
    },
    {
      "createdAt": "2022-02-20T17:23:20.010Z",
      "name": "Joanna Kihn Sr.",
      "avatar": "https://cdn.fakercloud.com/avatars/adamnac_128.jpg",
      "id": "3"
    }];
    function createUser() {
        document.querySelector(".user-list").innerHTML +=`
        <div class="user-container">
        <img class="user-pic"`
    }