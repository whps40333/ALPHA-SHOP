import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useReducer,
} from "react"

const SHOPPING_SHEET = {
    cardName: '',
    cardNumber: '',
    cardDate: '',
    cardCode: '',
    totlaPrice: '',
}

const SheetContext = createContext()
const SheetDispatchContext = createContext()
const ConfirmedContext = createContext()
const SetConfirmedContext = createContext()
const SetResetConfirmedContext = createContext()

export function SheetProvider({ children }) {
    const [tasks, dispatch] = useReducer(tasksReducer, SHOPPING_SHEET)
    const [confirmed, setConfirmed] = useState(false)

    function handleOnConfirmed() {
        if (!Object.values(tasks).includes('')) {
            setConfirmed(true)
        }
        console.log(tasks)
    }

    function handleResetConfirmed() {
        setConfirmed(false)
    }

    useEffect(() => {
        if (confirmed) {
            console.log(tasks)
        }
    }, [confirmed, tasks])

    return (
        <SheetContext.Provider value={tasks}>
            <SheetDispatchContext.Provider value={dispatch}>
                <ConfirmedContext.Provider value={confirmed}>
                    <SetConfirmedContext.Provider value={handleOnConfirmed}>
                        <SetResetConfirmedContext.Provider value={handleResetConfirmed}>
                            {children}
                        </SetResetConfirmedContext.Provider>
                    </SetConfirmedContext.Provider>
                </ConfirmedContext.Provider>
            </SheetDispatchContext.Provider>
        </SheetContext.Provider>
    )
}

export function useSheet() {
    return useContext(SheetContext)
}
export function useSheetDispatch() {
    return useContext(SheetDispatchContext)
}
export function useConfirmed() {
    return useContext(ConfirmedContext)
}
export function useSetConfirmed() {
    return useContext(SetConfirmedContext)
}
export function useResetConfirmed() {
    return useContext(SetResetConfirmedContext)
}

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'editCardName': {
            return { ...tasks, cardName: action.value }
        }
        case 'editCardNumber': {
            return { ...tasks, cardNumber: action.value }
        }
        case 'editCardDate': {
            return { ...tasks, cardDate: action.value }
        }
        case 'editCardCode': {
            return { ...tasks, cardCode: action.value }
        }
        case 'sumTotalPrice': {
            return { ...tasks, totlaPrice: action.value }
        }
        default: {
            console.error('something wrong!')
        }
    }
}