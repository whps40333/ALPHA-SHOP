import React, { createContext, useContext, useReducer } from "react";

const products = [
    {
        id: '1',
        name: '貓咪罐罐',
        img: 'https://picsum.photos/300/300?text=1',
        price: 100,
        quantity: 2,
    },
    {
        id: '2',
        name: '貓咪干干',
        img: 'https://picsum.photos/300/300?text=2',
        price: 200,
        quantity: 1,
    },
]

const ProductsContext = createContext()
const ProductsDispatchContext = createContext()
export function ProductsProvider({ children }) {
    const [tasks, dispatch] = useReducer(tasksReducer, products)

    return (
        <ProductsContext.Provider value={tasks}>
            <ProductsDispatchContext.Provider value={dispatch}>
                {children}
            </ProductsDispatchContext.Provider>
        </ProductsContext.Provider>
    )
}

export function useProducts() {
    return useContext(ProductsContext)
}

export function useProductsDispatch() {
    return useContext(ProductsDispatchContext)
}

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'add': {
            return tasks.map(task => {
                if (task.id === action.id) {
                    return { ...task, quantity: task.quantity + 1 }
                } else {
                    return task
                }
            })
        }
        case 'minus': {
            let newTasks = tasks.map(task => {
                if (task.id === action.id) {
                    return { ...task, quantity: task.quantity - 1 }
                } else {
                    return task
                }
            })
            return newTasks.filter(newTask => newTask.quantity !== 0)
        }
        default: {
            console.error('something wrong!')
        }
    }
}