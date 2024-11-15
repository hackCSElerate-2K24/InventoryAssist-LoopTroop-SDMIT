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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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

    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const fetchItems = async (category = null) => {
        try {
            const response = await axios.get('/api/product/all', { params: { category } });
            const itemsByCategory = [];
            
            Object.entries(response.data).forEach(([categoryName, items]) => {
                if (!category || categoryName === category) {
                    items.forEach(item => {
                        itemsByCategory.push({
                            id: item.$id,
                            name: item.name,
                            price: item.price,
                            quantity: item.quantity,
                            category: categoryName,
                        });
                    });
                }
            });

            setItems(itemsByCategory);
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
        fetchItems();
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        fetchItems(category);
    };

    return (
        <div className='w-screen flex flex-col gap-4 px-8 sm:px-16 pt-16 pb-0'>
            <ScrollArea className="w-full h-14 my-4 bg-green">
                <div className="flex gap-2 items-center">
                    <span className="font-bold">Categories: </span>
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
                <ScrollBar orientation="horizontal"></ScrollBar>
            </ScrollArea>
            <div className="h-full w-full">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Item Name</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Quantity</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {items.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id.slice(-5)}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>${item.price}</TableCell>
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



