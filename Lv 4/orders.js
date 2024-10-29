// Fungsi untuk menghasilkan ID yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel yang menampung data orders
let orders = [];

// Fungsi untuk menambahkan pesanan
function addOrder(customerName, items) {
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    const newOrder = {
        id: generateUniqueId(),
        customerName: customerName,
        items: items,
        totalPrice: totalPrice,
        status: 'Menunggu' // Status awal
    };
    orders.push(newOrder);
}

// Fungsi untuk mengupdate status pesanan
function updateOrderStatus(orderId, status) {
    const order = orders.find(order => order.id === orderId);
    if (order) {
        order.status = status;
    }
}

// Fungsi untuk menghitung total pendapatan dari order yang berstatus Selesai
function calculateTotalRevenue() {
    return orders
        .filter(order => order.status === 'Selesai')
        .reduce((total, order) => total + order.totalPrice, 0);
}

// Fungsi untuk menghapus pesanan
function deleteOrder(id) {
    orders = orders.filter(order => order.id !== id);
}

// Export semua fungsi dan data
export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };