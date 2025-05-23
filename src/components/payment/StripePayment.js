import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// Replace with your Stripe publishable key when in production
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
const PaymentForm = ({ amount, onSuccess, onCancel }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentError, setPaymentError] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet
            return;
        }
        setIsProcessing(true);
        setPaymentError('');
        // In a real implementation, you would create a payment intent on your server
        // and return the client secret to complete the payment on the client side
        // For demo purposes, we'll simulate a successful payment
        try {
            const cardElement = elements.getElement(CardElement);
            if (!cardElement) {
                throw new Error('Card element not found');
            }
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            // In a real implementation, you would use the following:
            // const { error, paymentMethod } = await stripe.createPaymentMethod({
            //   type: 'card',
            //   card: cardElement,
            // });
            // if (error) {
            //   throw error;
            // }
            // Then send paymentMethod.id to your server to complete the payment
            // Simulate successful payment
            onSuccess();
        }
        catch (error) {
            console.error('Payment error:', error);
            setPaymentError(error instanceof Error ? error.message : 'An error occurred processing your payment');
        }
        finally {
            setIsProcessing(false);
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Card Details" }), _jsx("div", { className: "p-4 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800", children: _jsx(CardElement, { options: {
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            } }) })] }), paymentError && (_jsx("div", { className: "bg-red-50 dark:bg-red-900 border-l-4 border-red-500 p-4", children: _jsx("p", { className: "text-red-700 dark:text-red-200", children: paymentError }) })), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("button", { type: "button", onClick: onCancel, className: "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium", children: "Cancel" }), _jsx("button", { type: "submit", disabled: !stripe || isProcessing, className: "bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 disabled:opacity-50", children: isProcessing ? 'Processing...' : `Pay $${amount.toFixed(2)}` })] })] }));
};
const StripePayment = (props) => {
    return (_jsx(Elements, { stripe: stripePromise, children: _jsx(PaymentForm, { ...props }) }));
};
export default StripePayment;
