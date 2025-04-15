
// import React from 'react';

// function AdminDashboard() {
//     return (
//         <div style={{ textAlign: 'center', marginTop: '100px' }}>
//             <h1>Admin Dashboard</h1>
//             <p>Welcome to the admin panel!</p>
//         </div>
//     );
// }

// export default AdminDashboard;

import React from "react";

const AdminDashboard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>✨ Admin Dashboard</h1>
        <p style={styles.text}>Welcome back to Ideal Café's control panel.</p>
        <p style={styles.subtext}>Manage orders, menu, and customer insights easily!</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "2rem 3rem",
    borderRadius: "1rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  heading: {
    color: "#343a40",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1.2rem",
    color: "#495057",
  },
  subtext: {
    marginTop: "0.5rem",
    color: "#868e96",
    fontSize: "0.95rem",
  },
};

export default AdminDashboard;

// import React from "react";
// import {
//   Coffee,
//   ReceiptText,
//   Users2,
//   ClipboardList,
//   Star,
//   LogOut,
// } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Card } from '@/components/ui/card'


// const AdminDashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md flex flex-col">
//         <div className="text-2xl font-bold p-6 border-b border-gray-200 text-center text-orange-600">
//           Ideal Café Admin
//         </div>
//         <nav className="flex-1 p-4 space-y-3">
//           <button className="flex items-center gap-3 p-2 w-full text-left hover:bg-orange-100 rounded-md">
//             <ReceiptText size={20} /> Orders
//           </button>
//           <button className="flex items-center gap-3 p-2 w-full text-left hover:bg-orange-100 rounded-md">
//             <Coffee size={20} /> Menu
//           </button>
//           <button className="flex items-center gap-3 p-2 w-full text-left hover:bg-orange-100 rounded-md">
//             <ClipboardList size={20} /> Inventory
//           </button>
//           <button className="flex items-center gap-3 p-2 w-full text-left hover:bg-orange-100 rounded-md">
//             <Star size={20} /> Reviews
//           </button>
//           <button className="flex items-center gap-3 p-2 w-full text-left hover:bg-orange-100 rounded-md">
//             <Users2 size={20} /> Users
//           </button>
//         </nav>
//         <div className="p-4 border-t">
//           <Button variant="outline" className="w-full flex items-center gap-2">
//             <LogOut size={16} /> Logout
//           </Button>
//         </div>
//       </aside>

//       {/* Main Section */}
//       <main className="flex-1 p-6 overflow-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
//           <p className="text-sm text-gray-500">Welcome back, Admin!</p>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           <Card>
//             <CardContent className="p-4">
//               <p className="text-sm text-gray-500">Today's Orders</p>
//               <p className="text-2xl font-bold">83</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4">
//               <p className="text-sm text-gray-500">Revenue</p>
//               <p className="text-2xl font-bold">$1,340</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4">
//               <p className="text-sm text-gray-500">Special of the Day</p>
//               <p className="text-lg font-semibold text-orange-600">
//                 Choco Lava Sundae 🍨
//               </p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4">
//               <p className="text-sm text-gray-500">Pending Reviews</p>
//               <p className="text-2xl font-bold">12</p>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Recent Orders Table Placeholder */}
//         <div className="bg-white rounded-xl p-6 shadow-md">
//           <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
//           <div className="text-gray-500">
//             [Recent order table or cards can go here]
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;


// import React from "react";

// const AdminDashboard = () => {
//     return (
//     <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
//       {/* Sidebar */}
//         <aside style={{ width: "200px", background: "#f97316", color: "#fff", padding: "20px" }}>
//         <h2 style={{ fontSize: "20px", marginBottom: "30px" }}>Ideal Café</h2>
//         <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
//             <button style={btnStyle}>Orders</button>
//             <button style={btnStyle}>Menu</button>
//             <button style={btnStyle}>Users</button>
//             <button style={btnStyle}>Reviews</button>
//             <button style={btnStyle}>Logout</button>
//         </nav>
//         </aside>

//       {/* Main Content */}
//         <main style={{ flex: 1, padding: "30px", background: "#f3f4f6" }}>
//             <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Admin Dashboard</h1>

//         <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
//             <StatCard title="Today's Orders" value="83" />
//             <StatCard title="Revenue" value="$1,340" />
//             <StatCard title="Special Item" value="Choco Lava 🍫" />
//             <StatCard title="Pending Reviews" value="12" />
//         </div>
//         </main>
//     </div>
//     );
// };

// const StatCard = ({ title, value }) => (
//     <h1 style={{ color: "green" }}>Admin Dashboard Loaded ✅</h1>
// );

// const btnStyle = {
//     background: "#fff",
//   color: "#f97316",
//   border: "none",
//   padding: "10px",
//   borderRadius: "5px",
//   cursor: "pointer"
// };

// export default AdminDashboard;
