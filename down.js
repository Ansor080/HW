let cars = ["3000", "7000", "9000", "11000"];

let from = prompt("От");
let up = prompt("До");

console.log(
    from, up
)

if (from === "0" && up === "3000") {
    alert("Matiz");
} else if (from === "0" && up === "7000") {
    alert("Matiz, Spark");
} else if (from === "3000" && up === "7000") {
    alert("Matiz, Spark");
} else if (from === "0" && up === "9000") {
    alert("Matiz, Spark, Nexia 3");
} else if (from === "3000" && up === "9000") {
    alert("Matiz, Spark, Nexia 3");
} else if (from === "7000" && up === "9000") {
    alert("Spark, Nexia 3");
} else if (from === "0" && up === "11000") {
    alert("Matiz, Spark, Nexia 3, Cobalt");
} else if (from === "3000" && up === "11000") {
    alert("Matiz, Spark, Nexia 3, Cobalt");
} else if (from === "7000" && up === "11000") {
    alert("Spark, Nexia 3, Cobalt");
} else if (from === "9000" && up === "11000") {
    alert("Nexia 3, Cobalt");
} else if (from === "0") {
    alert("Matiz, Spark, Nexia 3, Cobalt");
} else if (from === "3000") {
    alert("Matiz, Spark, Nexia 3, Cobalt");
} else if (from === "7000") {
    alert("Spark, Nexia 3, Cobalt");
} else if (from === "9000") {
    alert("Nexia 3, Cobalt");
} else if (from === "11000") {
    alert("Cobalt");
}