import { View, Text, } from 'react-native'
import React, {useState, useEffect, createContext, useContext} from 'react'
import { useAuthContext } from './AuthContext'
import { DataStore, Predicates } from 'aws-amplify/datastore';
import { Order } from '../models';


const OrderContext = createContext({})

const OrderContextProvider = ({children}) => {
    const [recipientName, setRecipientName]= useState('')
    const [recipientNumber, setRecipientNumber]= useState('')
    const [orderDetails, setOrderDetails]= useState('')
    
    const [orders, setOrders]= useState([])

    const {dbUser} = useAuthContext()

    const removeOrder = (id)=>{
      const newEditedOrders = orders.filter((newEditedOrder)=>newEditedOrder.id !== id);
      setOrders(newEditedOrders);
    }

    const createOrder = async () =>{
      const newOrder = await DataStore.save(new Order({
        userID: dbUser.id,
        recipientName,
        recipientNumber,
        orderDetails,
        originPlace,
        destinationPlace,
        atuaType:'BIKE',
        total:3000.99,
        status:'READY_FOR_PICKUP',
        
      }))
      console.warn('done')
    }

  useEffect(()=>{
    DataStore.query(Order, (o)=>o.userID.eq(dbUser.id)).then(setOrders)
    // DataStore.delete(Order, Predicates.ALL)
  }, [dbUser])

  // const getOrder = async (id)=>{
  //   return DataStore.query(Order, id)
  // }

  return (
    <OrderContext.Provider value={{recipientName, recipientNumber, orderDetails, setRecipientName, setRecipientNumber, setOrderDetails, orders, setOrders, removeOrder, createOrder}}>
        {children}
    </OrderContext.Provider>
  )
}

export default OrderContextProvider

export const useOrderContext = ()=> useContext(OrderContext)