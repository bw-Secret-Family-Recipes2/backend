exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      //password: admin
      return knex('users').insert([{
        "id": 1,
        "username": "Amanda", 
        "password": "$2a$10$e7BR5bbT31PL2aZSSso8JOatXWD28NT6DoQuSaUvnBV2z5HhxzfmS"
      }, {
        "id": 2,
        "username": "Stephanie",
        "password": "$2a$10$R8NBbJWz/nB0cKaVhVfffeW7kN6XWsf1d2i93fEGiK8/eI5YCyQvy"
      }, {
        "id": 3,
        "username": "Shirley",
        "password": "$2a$10$sOFqk2Qb0Z.YuH/4gD6voeUlGtQNj4s5CATX2YDey8Uje8gzI8Gsy"
      }, {
        "id": 4,
        "username": "Daniel",
        "password": "$2a$10$BJfd7PEOL/a6LFr/rCrt3uawbPx.hus3QOquS04DdBj.SACRnA63S"
      }, {
        "id": 5,
        "username": "Mike",
        "password": "$2a$10$LapwDsRJe5rxvfHKTzur2eRTXn0n/GZiqWjqez12MvpuT0o1O/7qS"
      }]);
    });
};