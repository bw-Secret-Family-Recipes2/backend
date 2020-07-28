# cookbook-backend
Secret Family Recipe Cookbook - Backend

Deployed Link: https://secretcookbook1.herokuapp.com

Section Contents:
- [/api/auth/login POST](#authlogin-post)
- [/api/auth/register POST](#authregister-post)
- [/api/users GET](#users-get)
- [/api/recipes GET](#recipes-get)
- [/api/recipes POST](#recipes-post)
- [/api/recipes/:id GET](#recipesid-get)
- [/api/recipes/:id PUT](#recipesid-put)
- [/api/recipes/:id DELETE](#recipesid-delete)
- [/api/categories GET](#categories-get)
- [/api/categories POST](#categories-post)
- [/api/categories/:id/recipes GET](#recipesbycategory-get)
- [/api/categories/:id GET](#categoriesid-get)

### /auth/login POST

Expects an object with this format as the request body:
```
{
  "username": "User1",   //string
  "password": "password" //string
}
```

### /auth/register POST

Expects an object with this format as the request body:
```
{
  "username": "User1",   //string
  "password": "password" //string
}
```

### /users GET

Requires an `authorization` header with a JWT.
it  will return an array of objects in this format:
```
[
  {
    "id": 1,
    "username": "Amanda"
  },
  {
    "id": 6,
    "username": "Damian"
  },
  {
    "id": 4,
    "username": "Daniel"
  },
  {
    "id": 5,
    "username": "Mike"
  },
  {
    "id": 3,
    "username": "Shirley"
  },
  {
    "id": 2,
    "username": "Stephanie"
  }
]
```
### /recipes GET

Requires an `authorization` header with a JWT. It  will return an array of objects in this format:
```
  "recipes": [
  {
    "id": 1,
    "name": "Shrimp tacos",
    "category": "entree",
    "source": "Cousin Juan",
    "instructions": "Add together, eat.",
    "ingredients": "6 corn tortillas, 1 lb. shrimp, 1 cup grated cheese, chopped tomatoes, shredded cabbage, salsa"
  }
```

### /recipes POST

Requires an `authorization` header with a JWT. Expects an object with this format as the request body:
```
        {
  "id": 12, //unique interger
  "name": "Cake", //unique name
  "source": "Grandma", //string
  "instructions": "Add together, bake, eat.", //string
  "ingredients": "flour, butter, egg", //string
  "category_id": 3 //interger of category id#
    }
```

### /recipes/:id GET

Requires an `authorization` header with a JWT. The object represents the recipe with the ID specified in the path:
```
  "recipe": {
  "id": 2,
  "name": "Broccoli Casserole",
  "category": "vegan",
  "source": "Barb",
  "instructions": "Add together, bake, eat.",
  "ingredients": "chopped broccoli, cooked rice, sliced red pepper, tamari, salt, black pepper"
}
```

### /recipes/:id PUT

Requires an `authorization` header with a JWT. Expects an object with this format as the request body:
```
         {
  "id": 10, //interger id# of the recipe you want to update
  "name": "Cookies", //name of recipe you want to update
  "source": "Grandma", //string
  "instructions": "Add together, bake, eat.", //string
  "ingredients": "flour, butter, egg, vanilla", //string
  "category_id": 3 //interger of category id#
    }
```

### /recipes/:id DELETE

Requires an `authorization` header with a JWT. Deletes the selected recipe if it exists and is associated with the current user.

### /categories GET

Requires an `authorization` header with a JWT. It  will return an array of objects in this format:
```
  "categories": [
  {
    "id": 1,
    "name": "entree"
  },
  {
    "id": 2,
    "name": "appetizer"
  },
  {
    "id": 3,
    "name": "dessert"
  },
  {
    "id": 4,
    "name": "soup"
  },
  {
    "id": 5,
    "name": "vegan"
  },
]
```
### /categories POST

Requires an `authorization` header with a JWT. Expects an object with this format as the request body:
```
    {
	"name": "Snack"
}
```
### /categories/:id/recipes GET

Requires an `authorization` header with a JWT. *SIMPLIFIED OUTPUT* The object represents the recipes with the category ID specified in the path:
```
  "recipes": [
  {
    "category": "entree",
    "name": "Shrimp tacos",
    "source": "Cousin Juan"
  },
  {
    "category": "entree",
    "name": "Lasagna",
    "source": "Aunt Mary"
  }
]
```
### /categories/:id GET

Requires an `authorization` header with a JWT. *DETAILED OUTPUT* The object represents the category with the ID specified in the path:
```
  "cateogry": {
  "id": 1,
  "name": "entree",
  "recipes": [
    {
      "id": 1,
      "name": "Shrimp tacos",
      "source": "Cousin Juan",
      "instructions": "Add together, eat.",
      "ingredients": "6 corn tortillas, 1 lb. shrimp, 1 cup grated cheese, chopped tomatoes, shredded cabbage, salsa",
      "category_id": 1
    },
    {
      "id": 4,
      "name": "Lasagna",
      "source": "Aunt Mary",
      "instructions": "Add together, bake, eat.",
      "ingredients": "noodles, ricotta cheese, parmesan cheese, bolognese sauce",
      "category_id": 1
    }
  ]
}
```