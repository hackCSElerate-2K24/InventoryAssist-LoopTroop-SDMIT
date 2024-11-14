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
    const [items, setItems] = useState([
        { id: 1, name: "Sample Item 1", quantity: 100 },
        { id: 2, name: "Sample Item 2", quantity: 200 },
        { id: 3, name: "Sample Item 3", quantity: 300 },
    ]);

    // Function to fetch items from the backend
    const fetchItems = async () => {
        try {
            const response = await axios.get('/api/items'); // Replace with your actual endpoint
            setItems(response.data);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };

    useEffect(() => {
        
    }, []);

    return (
        <Table className="">
            <TableHeader >
                <TableRow >
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
