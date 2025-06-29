// app/admin/portfolio/page.tsx
"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Define the data type
export type PortfolioItem = {
  id: number;
  title: string;
  category: string;
};

// Initial dummy data (50 items)
const initialData: PortfolioItem[] = [
  { id: 1, title: "Website Company", category: "Web" },
  { id: 2, title: "Mobile App Design", category: "Design" },
  { id: 3, title: "E-commerce Platform", category: "Web" },
  { id: 4, title: "Branding Package", category: "Design" },
  { id: 5, title: "Company Profile App", category: "Mobile" },
  { id: 6, title: "Online Booking System", category: "Web" },
  { id: 7, title: "Logo Redesign", category: "Design" },
  { id: 8, title: "Portfolio Website", category: "Web" },
  { id: 9, title: "Event App", category: "Mobile" },
  { id: 10, title: "Restaurant Website", category: "Web" },
  { id: 11, title: "Travel App UI", category: "Design" },
  { id: 12, title: "News Portal", category: "Web" },
  { id: 13, title: "Admin Dashboard", category: "Web" },
  { id: 14, title: "Real Estate App", category: "Mobile" },
  { id: 15, title: "Photography Portfolio", category: "Web" },
  { id: 16, title: "Fitness Tracker", category: "Mobile" },
  { id: 17, title: "Creative Agency Website", category: "Web" },
  { id: 18, title: "SaaS Dashboard", category: "Web" },
  { id: 19, title: "Invoice Generator", category: "Web" },
  { id: 20, title: "Landing Page Design", category: "Design" },
  { id: 21, title: "Education Platform", category: "Web" },
  { id: 22, title: "Social Media App", category: "Mobile" },
  { id: 23, title: "Logo Design", category: "Design" },
  { id: 24, title: "Portfolio Redesign", category: "Design" },
  { id: 25, title: "Task Management App", category: "Web" },
  { id: 26, title: "Finance App UI", category: "Design" },
  { id: 27, title: "Healthcare Website", category: "Web" },
  { id: 28, title: "Hotel Booking App", category: "Mobile" },
  { id: 29, title: "Dashboard UI Kit", category: "Design" },
  { id: 30, title: "Blog Website", category: "Web" },
  { id: 31, title: "Online Course App", category: "Mobile" },
  { id: 32, title: "Product Showcase", category: "Web" },
  { id: 33, title: "Crypto Wallet UI", category: "Design" },
  { id: 34, title: "Inventory System", category: "Web" },
  { id: 35, title: "Medical App Design", category: "Design" },
  { id: 36, title: "Weather App", category: "Mobile" },
  { id: 37, title: "Freelance Portfolio", category: "Web" },
  { id: 38, title: "Fashion E-commerce", category: "Web" },
  { id: 39, title: "Job Board Platform", category: "Web" },
  { id: 40, title: "HR Management App", category: "Web" },
  { id: 41, title: "Grocery Delivery UI", category: "Design" },
  { id: 42, title: "Banking App", category: "Mobile" },
  { id: 43, title: "Virtual Events Site", category: "Web" },
  { id: 44, title: "Video Streaming App", category: "Mobile" },
  { id: 45, title: "Startup Landing Page", category: "Design" },
  { id: 46, title: "NFT Marketplace", category: "Web" },
  { id: 47, title: "CV Builder App", category: "Web" },
  { id: 48, title: "Client Portal", category: "Web" },
  { id: 49, title: "Resume Design", category: "Design" },
  { id: 50, title: "Virtual Store", category: "Web" },
];


// Define table columns
const columns: ColumnDef<PortfolioItem>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
];

// Page component
export default function PortfolioAdminPage() {
  const [data, setData] = useState<PortfolioItem[]>(initialData);

  const handleEdit = (item: PortfolioItem) => {
    alert(`Edit item: ${item.title}`);
    // TODO: Show edit modal or navigate to form
  };

  const handleDelete = (item: PortfolioItem) => {
    if (confirm(`Yakin mau hapus \"${item.title}\"?`)) {
      setData(prev => prev.filter(p => p.id !== item.id));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Portfolio Admin</h1>
      <DataTable
        columns={columns}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
