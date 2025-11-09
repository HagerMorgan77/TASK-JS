//Task 8
//  dataset of products
const products = [
    { name: "iPhone 14", brand: "Apple", category: "Mobile", price: 37000, inStock: true, rating: 4.8 },
    { name: "Galaxy S24", brand: "Samsung", category: "Mobile", price: 33000, inStock: false, rating: 4.6 },
    { name: "MacBook Air", brand: "Apple", category: "Laptop", price: 52000, inStock: true, rating: 4.9 },
    { name: "HP Pavilion", brand: "HP", category: "Laptop", price: 27000, inStock: true, rating: 4.3 },
    { name: "Dell XPS", brand: "Dell", category: "Laptop", price: 45000, inStock: false, rating: 4.5 },
    { name: "AirPods Pro", brand: "Apple", category: "Accessories", price: 8000, inStock: true, rating: 4.7 },
    { name: "Galaxy Buds", brand: "Samsung", category: "Accessories", price: 6000, inStock: true, rating: 4.4 },
    { name: "Apple Watch", brand: "Apple", category: "Smart Watch", price: 18000, inStock: false, rating: 4.8 },
    { name: "Fitbit Charge 6", brand: "Fitbit", category: "Smart Watch", price: 9000, inStock: true, rating: 4.2 },
];
// 1- فلترة حسب الفئة
let categoryFilter = products.filter((product) => product.category === "Laptop" && product.rating > 4.5 );

// 2- فلترة حسب العلامة التجارية
let brandFilter = products.filter((product) => product.brand === "Apple" && product.inStock);

// 3- فلترة المنتجات الرخيصة:   
let priceFilter = products.filter((product) => product.price < 10000 && product.inStock);

// 4- تحليل الأسعار
let priceAnalysis = products.filter((product) => product.inStock)
.reduce((acc , current) => acc+ current.price , 0);

//5- أعلى تقييم
let topRated = products.reduce((acc , current) => (current.rating > acc.rating ? current : acc));

// 6- استخدم  لعرض الأسماء .map()
let productNames = products.filter((product) => product.inStock).map((product) => product.name);


// دالة عرض النتائج

function displayResults(title ,filteredArray) {
    if (filteredArray === priceAnalysis) {
        console.log(` ${title}:`);
        console.log(`Total Price of In-Stock Products: ${priceAnalysis}`);
    }
    else if (filteredArray === topRated) {
        console.log(` ${title}:`);
        console.log(`Top Rated Product: ${filteredArray.name} | Rating: ${filteredArray.rating}`);
    }
    else if (filteredArray === productNames) {
        console.log(` ${title}:`);
        console.log(productNames);
    }
    else {
        console.log(` ${title}:`);
        filteredArray.forEach((product) => {
            if (product.name) {
                console.log(
                    "- " + product.name + 
                    " | Price: " + product.price + 
                    " | Rating: " + product.rating + 
                    " | Category: " + product.category
                );
            } else {
                console.log("");
            }
        });
    }
}
displayResults("💻 لابتوبات بتقييم أعلى من 4.5" ,categoryFilter);
displayResults("📦  Apple المنتجات المتوفرة" ,brandFilter);
displayResults("💰 المنتجات الرخيصة والمتوفرة" ,priceFilter);
displayResults("📈 إجمالي أسعار المنتجات المتوفرة" ,priceAnalysis);
displayResults("🏆 أعلى منتج من حيث التقييم" ,topRated);
displayResults(" 📋 أسماء المنتجات المتوفرة" ,productNames);














