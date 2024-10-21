'use client'

import { useState } from 'react'
import Image from 'next/image'

interface PaymentMethod {
  id: string
  name: string
  image: string
  displayText: string
  isConnected: boolean
  placeholder: string
}

export default function PaymentMethods() {
  const [openInputId, setOpenInputId] = useState<string | null>(null)

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'paypal',
      name: 'PayPal',
      image: 'https://storage.googleapis.com/a1aa/image/LM00lHy4e4VEfEwshfXBUMcJYM0B328inIsGRj7TYfhafrHdC.jpg',
      displayText: 'PayPal',
      isConnected: true,
      placeholder: 'Enter PayPal address'
    },
    {
      id: 'googlepay',
      name: 'Google Pay',
      image: 'https://storage.googleapis.com/a1aa/image/SvKY98RDkvYhENmLE9Ukt5u94yGsWNixkJM5U691UbdeveoTA.jpg',
      displayText: 'Google Pay',
      isConnected: true,
      placeholder: 'Enter Google Pay address'
    },
    {
      id: 'applepay',
      name: 'Apple Pay',
      image: 'https://storage.googleapis.com/a1aa/image/YqpCh7xg0Ab9N17SKmdPm6cBYfCqsSwebOnsx553IeS1f1jOB.jpg',
      displayText: 'Apple Pay',
      isConnected: true,
      placeholder: 'Enter Apple Pay address'
    },
    {
      id: 'mastercard',
      name: 'Mastercard',
      image: 'https://storage.googleapis.com/a1aa/image/XBvmqXf3efCHMIrLcbgQfNciUh1kUfjmogYgjIg8xeoIeveoTA.jpg',
      displayText: '•••• 2766',
      isConnected: true,
      placeholder: 'Enter Mastercard details'
    }
  ]

  const toggleInput = (id: string) => {
    setOpenInputId(openInputId === id ? null : id)
  }

  return (
    <div className="bg-white h-screen flex flex-col justify-between">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <i className="fas fa-arrow-left text-xl"></i>
          <h1 className="text-xl font-semibold ml-4">Payment Methods</h1>
        </div>
        
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div key={method.id}>
              <div 
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg cursor-pointer"
                onClick={() => toggleInput(method.id)}
              >
                <div className="flex items-center">
                  <Image
                    src={method.image}
                    alt={`${method.name} logo`}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <span className="ml-4 text-lg">{method.displayText}</span>
                </div>
                <span className="text-purple-600">Connected</span>
              </div>
              
              {openInputId === method.id && (
                <div className="p-4 bg-gray-100 rounded-lg mt-2">
                  <input 
                    type="text" 
                    placeholder={method.placeholder}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button className="w-full py-4 bg-purple-100 text-purple-600 rounded-lg">
            Add New Card
          </button>
        </div>
      </div>

      <div className="flex justify-between p-4">
        <button className="w-1/2 py-4 bg-purple-100 text-purple-600 rounded-lg mr-2">
          Cancel
        </button>
        <button className="w-1/2 py-4 bg-purple-600 text-white rounded-lg ml-2">
          Continue
        </button>
      </div>
    </div>
  )
}
