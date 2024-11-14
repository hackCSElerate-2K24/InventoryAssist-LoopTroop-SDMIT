import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useState, useEffect } from "react"
import axios from "axios"

function ItemTable() {
    const [items, setItems] = useState([]);

    // Function to fetch items from the backend
    const fetchItems = async () => {
        try {
            const response = await axios.get('/api/items'); // Replace with your actual endpoint
            setItems(response.data);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };

    // Fetch items when component mounts
    useEffect(() => {
        fetchItems();
    }, []);

    return (
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
    );
}

export default ItemTable;
