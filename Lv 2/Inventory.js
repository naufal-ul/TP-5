/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Item {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    displayDetails() {
        return `ID: ${this.id}, Nama: ${this.name}, Harga: ${this.price}`;
    }
}

class Inventory {
    constructor() {
        this.items = []; // Properti untuk menyimpan daftar item
    }

    addItem(item) {
        this.items.push(item); // Menambahkan item ke dalam array items
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id); // Menghapus item berdasarkan id
    }

    listItems() {
        return this.items.map(item => item.displayDetails()).join('\n'); // Mengembalikan string informasi detail barang
    }
}

// Contoh penggunaan
const inventory = new Inventory();

const item1 = new Item(1, "Sepatu", 100000);
const item2 = new Item(2, "Baju", 50000);
const item3 = new Item(3, "Celana", 80000);

inventory.addItem(item1);
inventory.addItem(item2);
inventory.addItem(item3);

console.log("Daftar Barang:");
console.log(inventory.listItems());

inventory.removeItem(2);

console.log("\nDaftar Barang setelah dihapus:");
console.log(inventory.listItems());


// Jangan hapus kode di bawah ini!
export default Inventory;
