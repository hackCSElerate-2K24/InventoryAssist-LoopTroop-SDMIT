import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";
import axios from "axios";
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import useAuthStore from '@/store/authStore';
import { Button } from "@/components/ui/button";

export const Route = createFileRoute('/inventory')({
    component: RouteComponent,
});

function RouteComponent() {
    const { userInfo } = useAuthStore();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!userInfo) {
            navigate({ to: '/login' });
        }
    }, [userInfo, navigate]);

    const [items, setItems] = useState([
        { id: 1, name: "Sample Item 1", quantity: 100 },
        { id: 2, name: "Sample Item 2", quantity: 200 },
        { id: 3, name: "Sample Item 3", quantity: 300 },
    ]);

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const fetchItems = async (category = null) => {
        try {
            const response = await axios.get('/api/items', { 
                params: { category }  
            });
            setItems(response.data);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get('/api/category/all'); 
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
        // fetchItems();  // Initially fetch all items
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        fetchItems(category);  // Fetch items based on selected category
    };

    return (
        <div className='h-screen w-screen flex flex-col gap-4 p-16 pb-0'>
            <div className=" h-10 w-full flex gap-2 items-center my-4">
              <span className="font-bold">
                Categories: 
              </span>
                <div className="flex gap-4">
                    {categories.map((category) => (
                        <Button 
                            key={category} 
                            onClick={() => handleCategoryClick(category)}
                            variant={selectedCategory === category ? "outline" : "default"}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>
            <div className="h-full w-full">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Item Name</TableHead>
                            <TableHead>Quantity</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {items.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default RouteComponent;

