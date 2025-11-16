// seed-foods.js (UPDATED)
import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import FormData from "form-data";  // ← ADD THIS

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = "http://localhost:4000";
const imagesFolder = path.join(__dirname, "food-images");

// Get and sort .png files
const imageFiles = fs.readdirSync(imagesFolder)
  .filter(f => /\.png$/i.test(f))
  .sort((a, b) => {
    const numA = parseInt(a.match(/_(\d+)/)?.[1] || 0);
    const numB = parseInt(b.match(/_(\d+)/)?.[1] || 0);
    return numA - numB;
  });

if (imageFiles.length !== 32) {
  console.error(`Expected 32 images, found ${imageFiles.length}`);
  process.exit(1);
}

const foodData = [ /* your 32 items */ 
    { name: "Veg Supreme Pizza", price: 14.99, category: "Pure Veg", description: "Loaded with bell peppers, olives, corn & cheese" },
    { name: "Creamy Alfredo Pasta", price: 11.99, category: "Pasta", description: "Rich white sauce with mushrooms & garlic" },
    { name: "Paneer Tikka Wrap", price: 8.99, category: "Pure Veg", description: "Grilled paneer, onions, mint chutney" },
    { name: "Aloo Paratha", price: 6.99, category: "Pure Veg", description: "Stuffed potato flatbread with butter" },
    { name: "Veg Spring Rolls", price: 7.99, category: "Rolls", description: "Crispy rolls with cabbage, carrots & soy" },
    { name: "Chicken Kathi Roll", price: 9.99, category: "Rolls", description: "Spiced chicken, onions, egg in paratha" },
    { name: "Paneer Kathi Roll", price: 8.99, category: "Rolls", description: "Grilled paneer, capsicum, mint sauce" },
    { name: "Mutton Seekh Roll", price: 11.99, category: "Rolls", description: "Minced lamb kebab in soft paratha" },
    { name: "Chocolate Lava Cake", price: 6.99, category: "Dessert", description: "Warm gooey center with vanilla ice cream" },
    { name: "Tiramisu", price: 7.99, category: "Dessert", description: "Coffee-soaked layers with mascarpone" },
    { name: "Gulab Jamun", price: 5.99, category: "Dessert", description: "Soft milk dumplings in rose syrup" },
    { name: "Rasmalai", price: 6.99, category: "Dessert", description: "Spongy cheese balls in sweetened milk" },
    { name: "Grilled Veg Sandwich", price: 7.99, category: "Sandwich", description: "Cucumber, tomato, cheese, green chutney" },
    { name: "Chicken Club Sandwich", price: 10.99, category: "Sandwich", description: "Triple decker with egg, bacon & mayo" },
    { name: "Paneer Tikka Sandwich", price: 8.99, category: "Sandwich", description: "Spiced paneer, onions, mint" },
    { name: "Bombay Grilled Sandwich", price: 7.99, category: "Sandwich", description: "Potato, beetroot, chutney, cheese" },
    { name: "Red Velvet Cake", price: 8.99, category: "Cake", description: "Cream cheese frosting, moist layers" },
    { name: "Black Forest Cake", price: 9.99, category: "Cake", description: "Cherries, whipped cream, chocolate shavings" },
    { name: "Pineapple Cake", price: 7.99, category: "Cake", description: "Light sponge with pineapple chunks" },
    { name: "Chocolate Truffle Cake", price: 10.99, category: "Cake", description: "Rich dark chocolate ganache" },
    { name: "Caesar Salad", price: 8.99, category: "Salad", description: "Romaine, parmesan, croutons, caesar dressing" },
    { name: "Palak Paneer", price: 12.99, category: "Pure Veg", description: "Spinach curry with cottage cheese" },
    { name: "Greek Salad", price: 9.99, category: "Salad", description: "Feta, olives, cucumber, tomato, oregano" },
    { name: "Quinoa Avocado Salad", price: 10.99, category: "Salad", description: "Fresh greens, avocado, lemon dressing" },
    { name: "Spicy Arrabbiata Pasta", price: 11.99, category: "Pasta", description: "Tangy tomato sauce with chili flakes" },
    { name: "Pesto Pasta", price: 12.99, category: "Pasta", description: "Fresh basil pesto with pine nuts" },
    { name: "Carbonara Pasta", price: 13.99, category: "Pasta", description: "Creamy egg sauce with bacon" },
    { name: "Hakka Noodles", price: 9.99, category: "Noodles", description: "Stir-fried with veggies & soy sauce" },
    { name: "Chili Garlic Noodles", price: 10.99, category: "Noodles", description: "Spicy garlic sauce with bell peppers" },
    { name: "Schezwan Noodles", price: 11.99, category: "Noodles", description: "Fiery red chili sauce, Indo-Chinese style" },
    { name: "Singapore Noodles", price: 12.99, category: "Noodles", description: "Curry-flavored rice vermicelli" },
    { name: "Pad Thai Noodles", price: 13.99, category: "Noodles", description: "Tamarind, peanuts, bean sprouts, shrimp" }
]; 

async function seedFoods() {
  console.log("Uploading 32 food items...\n");

  for (let i = 0; i < foodData.length; i++) {
    const item = foodData[i];
    const imagePath = path.join(imagesFolder, imageFiles[i]);

    const form = new FormData();
    form.append("name", item.name);
    form.append("description", item.description);
    form.append("price", item.price);
    form.append("category", item.category);
    form.append("image", fs.createReadStream(imagePath));

    try {
      await axios.post(`${url}/api/food/add`, form, {
        headers: form.getHeaders(), // ← CRITICAL: sets Content-Type
      });
      console.log(`${String(i + 1).padStart(2)}. ${item.name} → Success`);
    } catch (err) {
      if (err.response) {
        console.error(`${String(i + 1).padStart(2)}. ${item.name} → Failed`, 
          err.response.status, err.response.data);
      } else {
        console.error(`${String(i + 1).padStart(2)}. ${item.name} → Request Failed`, err.message);
      }
    }
  }

  console.log("\nALL DONE! Refresh your app.");
}

seedFoods();