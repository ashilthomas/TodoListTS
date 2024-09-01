import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Buttons/Button';
import ItemList from '../ItemList/ItemList';
import { Items } from '../../Types/Utils';




function Todo() {
    const [items, setItems] = useState<Items[]>([]);
    const [input, setInput] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
      
        e.preventDefault();
        if (input.trim() === '') return;
        setItems(prev => [...prev, { title: input, id: Date.now().toString() }]);
        setInput('');
    };



    return (
        <div className='bg-white p-3 rounded-md'>
            <h2 className='mb-2 font-semibold text-2xl'>To do List</h2>
            <div className='w-[320px]'>
                <form action="" className='w-full' onSubmit={handleSubmit}>
                    <div className="flex items-center space-x-2">
                        <Input input={input} setInput={setInput} />

                        <Button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md" >+</Button>
                    </div>
                </form>
                <div className='h-52 overflow-y-auto '>


                    <ItemList items={items} setItems={setItems} />



                </div>
            </div>
        </div>
    );
}

export default Todo;

