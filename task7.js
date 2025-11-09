//TASK 7
//  مصفوفة المنتجات (بيانات واقعية)
const products = [
    { name: "iPhone 15", price: 45000, category: "Electronics", inStock: true, rating: 4.8 },
    { name: "Samsung TV 55\"", price: 18000, category: "Electronics", inStock: false, rating: 4.6 },
    { name: "Nike Air Max", price: 2200, category: "Fashion", inStock: true, rating: 4.3 },
    { name: "Dell Laptop", price: 30000, category: "Electronics", inStock: true, rating: 4.7 },
    { name: "Book: Clean Code", price: 750, category: "Books", inStock: true, rating: 4.9 },
    { name: "Office Chair", price: 1300, category: "Furniture", inStock: false, rating: 4.2 },
    { name: "Headphones", price: 950, category: "Electronics", inStock: true, rating: 4.4 },
    { name: "Gaming Mouse", price: 800, category: "Electronics", inStock: true, rating: 4.7 },
    { name: "T-shirt", price: 350, category: "Fashion", inStock: true, rating: 4.1 },
    { name: "Smartwatch", price: 1700, category: "Electronics", inStock: true, rating: 4.6 }
];
//  1- المنتجات المتوفرة فقط
const productsFilter1 = products.filter(product => product.inStock);

//  2- المنتجات اللي سعرها أقل من 1000 جنيه
const productsFilter2 = products.filter(product => product.price < 1000);

//  3- المنتجات ذات التقييم العالي (rating >= 4.5)
const productsFilter3 = products.filter(product => product.rating >= 4.5);

//  4- منتجات من فئة معينة (مثلاً Electronics) وسعرها أقل من 5000 ومتوفره
const productsFilter4 = products.filter(product => 
    product.category === "Electronics" && product.price < 5000 && product.inStock
);

// دالة عرض النتائج
function productsFilterFinal(filterName, filteredArray) {
console.log(`📦 ${filterName}: `);
filteredArray.forEach(product => {
    console.log(`${product.name} | price: ${product.price} | rating: ${product.rating} | category: ${product.category}`);
});
}
// عرض النتائج
productsFilterFinal("المنتجات المتوفرة في المخزن", productsFilter1);
productsFilterFinal("المنتجات التي سعرها أقل من 1000", productsFilter2);
productsFilterFinal("المنتجات التي تقييمها 4.5 أو أعلى" , productsFilter3);
productsFilterFinal("المنتجات الإلكترونية المتوفرة وسعرها أقل من 5000", productsFilter4);
