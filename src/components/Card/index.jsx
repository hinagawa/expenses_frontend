import { useContext, useEffect, useState, useMemo } from 'react';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { MyContext } from "../../context/MyContext"

function Card({ title, sum, isBalance, isExpenses }) {
    const { state } = useContext(MyContext);
    const [category, setCategory] = useState();
    const [open, setOpen] = useState(false);


    useEffect(() => {
        fetch('http://localhost:8000/api/finances/categories')
            .then(response => response.json())
            .then(val => setCategory(val.category))
            .catch(e => console.log(e))
    }, [])

    const memoizedCategoryItems = useMemo(() => {
        return category?.map((item) => {
            return <MenuItem key={item.id} id={item.id} value={item.id}>{item.category}</MenuItem>;
        });
    }, [category]);
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = (value) => {
        setOpen(false);
        console.log(value)
    };

    const handleChange = () => {
        console.log('change')
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const name = formJson.name;
        const category = formJson.category;
        const sum = formJson.sum;

        console.log(name, category, sum);

        // Create the payload
        const payload = {
            name: name,
            category: category,
            sum: sum,
            is_expenses: isExpenses,
            user_id: 1
        };

        try {
            const response = await fetch('http://localhost:8000/api/finances/finances/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                console.log('Data submitted successfully');
            } else {
                console.error('Error submitting data');
            }
        } catch (error) {
            console.error('Error:', error);
        }

        handleClose();
    };

    return (
        <>
            <div className="flex flex-col justify-start items-start bg-white w-64 h-32 m-5 p-3 rounded-lg shadow-lg">
                <div className="flex flex-row justify-between w-full">
                    <p className="font-bold">{title}</p>
                    <button onClick={handleOpen}>
                        {isBalance ? undefined : <AddCircleIcon />}
                    </button>
                </div>
                <p className="text-3xl font-medium pt-1"> {state.userData?.currency.currency_abbr} {sum}</p>
                {!isBalance && <p className="text-sm pt-3">for last month</p>}
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: handleSubmit
                }}
            >
                <DialogTitle>Add {title}</DialogTitle>
                <DialogContent>
                    <div className="flex flex-row">
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="name"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Category"
                                name="category"
                                defaultValue=""
                                onChange={handleChange}
                            >
                                {category && memoizedCategoryItems}
                            </Select>
                        </FormControl>
                    </div>
                    <TextField
                        required
                        margin="dense"
                        id="sum"
                        name="sum"
                        label="Sum"
                        type="number"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Add</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Card