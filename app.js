const express = require('express')
const axios = require('axios');

const app = express()
const port = process.env.PORT || 8000

async function getPetImage() {

    const externalUrl = 'https://dog.ceo/api/breeds/image/random';
      
    return await axios.get(externalUrl)
        .then(response => {
            return response.data.message; // Send the JSON data as the response
        })
        .catch(error => {
        console.error(error);
            return { error: 'An error occurred' };
        });

}

function getPetName() {
    const petNames = [
        {"name": "Whiskers","gender": "masculine"},
        {"name": "Bella","gender": "feminine"},
        {"name": "Max","gender": "masculine"},
        {"name": "Luna","gender": "feminine"},
        {"name": "Charlie","gender": "masculine"},
        {"name": "Lucy","gender": "feminine"},
        {"name": "Leo","gender": "masculine"},
        {"name": "Lola","gender": "feminine"},
        {"name": "Oliver","gender": "masculine"},
        {"name": "Molly","gender": "feminine"},
        {"name": "Milo","gender": "masculine"},
        {"name": "Daisy","gender": "feminine"},
        {"name": "Rocky","gender": "masculine"},
        {"name": "Sadie","gender": "feminine"},
        {"name": "Jack","gender": "masculine"},
        {"name": "Chloe","gender": "feminine"},
        {"name": "Tiger","gender": "masculine"},
        {"name": "Sophie","gender": "feminine"},
        {"name": "Buddy","gender": "masculine"},
        {"name": "Lily","gender": "feminine"},
        {"name": "Oscar","gender": "masculine"},
        {"name": "Zoe","gender": "feminine"},
        {"name": "Coco","gender": "masculine"},
        {"name": "Ruby","gender": "feminine"},
        {"name": "Sam","gender": "masculine"},
        {"name": "Mia","gender": "feminine"},
        {"name": "Toby","gender": "masculine"},
        {"name": "Gracie","gender": "feminine"},
        {"name": "Simba","gender": "masculine"},
        {"name": "Rosie","gender": "feminine"},
        {"name": "Felix","gender": "masculine"},
        {"name": "Cleo","gender": "feminine"},
        {"name": "Shadow","gender": "masculine"},
        {"name": "Penny","gender": "feminine"},
        {"name": "Jasper","gender": "masculine"},
        {"name": "Misty","gender": "feminine"},
        {"name": "Gizmo","gender": "masculine"},
        {"name": "Maggie","gender": "feminine"},
        {"name": "Mochi","gender": "masculine"},
        {"name": "Stella","gender": "feminine"},
        {"name": "Tigger","gender": "masculine"},
        {"name": "Callie","gender": "feminine"},
        {"name": "Milo","gender": "masculine"},
        {"name": "Nala","gender": "feminine"},
        {"name": "Charlie","gender": "masculine"},
        {"name": "Kitty","gender": "feminine"},
        {"name": "Smokey","gender": "masculine"},
        {"name": "Willow","gender": "feminine"},
        {"name": "Bentley","gender": "masculine"},
        {"name": "Phoebe","gender": "feminine"},
        {"name": "Zeus","gender": "masculine"},
        {"name": "Cali","gender": "feminine"},
        {"name": "Cooper","gender": "masculine"},
        {"name": "Nina","gender": "feminine"},
        {"name": "Teddy","gender": "masculine"},
        {"name": "Hazel","gender": "feminine"},
        {"name": "Winston","gender": "masculine"},
        {"name": "Coco","gender": "feminine"},
        {"name": "Murphy","gender": "masculine"},
        {"name": "Piper","gender": "feminine"},
        {"name": "Buster","gender": "masculine"},
        {"name": "Gigi","gender": "feminine"},
        {"name": "Duke","gender": "masculine"},
        {"name": "Maddie","gender": "feminine"},
        {"name": "Harley","gender": "masculine"},
        {"name": "Roxy","gender": "feminine"},
        {"name": "Lucky","gender": "masculine"},
        {"name": "Mabel","gender": "feminine"},
        {"name": "George","gender": "masculine"},
        {"name": "Olive","gender": "feminine"},
        {"name": "Bentley","gender": "masculine"},
        {"name": "Penelope","gender": "feminine"},
        {"name": "Zeus","gender": "masculine"},
        {"name": "Mimi","gender": "feminine"},
        {"name": "Ollie","gender": "masculine"},
        {"name": "Sasha","gender": "feminine"},
        {"name": "Baxter","gender": "masculine"},
        {"name": "Pearl","gender": "feminine"},
        {"name": "Romeo","gender": "masculine"},
        {"name": "Winnie","gender": "feminine"},
        {"name": "Apollo","gender": "masculine"},
        {"name": "Dolly","gender": "feminine"},
        {"name": "Samson","gender": "masculine"},
        {"name": "Millie","gender": "feminine"},
        {"name": "Jackson","gender": "masculine"},
        {"name": "Peanut","gender": "feminine"},
        {"name": "Cody","gender": "masculine"},
        {"name": "Belle","gender": "feminine"},
        {"name": "Archie","gender": "masculine"},
        {"name": "Cupcake","gender": "feminine"},
        {"name": "Bruno","gender": "masculine"},
        {"name": "Lulu","gender": "feminine"},
        {"name": "Henry","gender": "masculine"},
        {"name": "Honey","gender": "feminine"},
        {"name": "Maximus","gender": "masculine"},
        {"name": "Poppy","gender": "feminine"},
        {"name": "Oscar","gender": "masculine"},
        {"name": "Sunny","gender": "feminine"},
        {"name": "Riley","gender": "masculine"},
        {"name": "Daisy","gender": "feminine"}
      ]

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * petNames.length);

    // Get the random value from the array
    return petNames[randomIndex];
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pets', async (req,res) => {
    
    petName = await getPetName()

    pet = {
        img: await getPetImage(),
        name: petName.name,
        gender: petName.gender
    }
    res.send(pet)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})