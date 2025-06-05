const { AdyenCheckout, Dropin, Card, GooglePay, PayPal, ApplePay, Ideal } = window.AdyenWeb;

// Global configuration
  
const globalConfiguration = {
  session: {
    id: 'CSF10A2725C4D7ABF2', // Unique identifier for the payment session.
    sessionData: 'Ab02b4c0!BQABAgCA59xLe1QLk4NBjO\/ubhONjQ1wEsczj4I0c8Lrh8ssW1OoXKr\/KSoRSbFP9PHK1UCUX8tcz76LbtESOrYKAcYlZDQFKYDakmE5auNub0MZgbcbyBt1jJyGMfzpKceYvZ3C0Mu7IvruoK8HPFpDbGrTJJKMhuAfzbAq0D5Y6sa\/a6maFEWJyn3yVBOnvmN1ExeO+QpwYOePSjLgkGCIQ6jKnZFA1NGp58CH3qPa2\/DdKmLjgT0rUD2431X5CPaMQwMB1lFOqlg6\/DVI3bLPqpLffUjwR+d7kphrzEthOh5\/4GUqiMNifq0IFW\/IMPPo8qIhv7QMV41q68IlBPymrRc2x6pMWfzG7xjuid\/hgkippzVLzKf\/nmmbYBP3zo3DvpAAQBnuePG4vaewzT\/pHpTxxb13InMqdgOybXpragU0d\/6U65DdirjxcLaLZhHxZ+T5U58S+kNL+2srsFw8xZIAoyZBoIhDGRqZK+8UAz5AdqT2CS+vlncg0lb4wkBWHGX+CGfnWBPJSLFTsC\/EPQCPPJXVyeMP49wvFaCFAzhqkXMmZDgITdSk9gHg6A7WLlqwIQrbmvwjjPsU\/KkOoRT3uNHlbXlLPpUG4\/STyxzyDeWVlZ6rRMkeHE\/2IDyyPuQ3cTsY2a+\/zMy3R8oGccGzXAkdNmnHfM36hmWs6r7wygytsLXxLksrn3r+3U8ASnsia2V5IjoiQUYwQUFBMTAzQ0E1MzdFQUVEODdDMjRERDUzOTA5QjgwQTc4QTkyM0UzODIzRDY4REFDQzk0QjlGRjgzMDVEQyJ9roLyvla029Mc9AB8tRrtCwVyOg9vA9KiMoBkjGdtFqeR+Dpf1mSuiVr3ReEBNOXS+0soiDiNfplPFE5A71wTbtb9M7PDedFICczYw0YOLQCiB6\/LBZBcdtqzhB+xv+2\/ApzEZMQvm7QKw4Dem7zedLm\/YKI7VsyEvGNLzsoMZcX8HKBfDhmqrm+TBzYqRmnzKlWy2L2506HMDbUz5sGdKGyMsf36pOdxqv7l\/ND6RCB0P4B2TIHAG40Ra0mpjNnrNAc11B2Za+d9GwWGFQWwZIl3FvJ8BaQOHQsD4ggYXs6ECJGsEIt+ybSIQHcASFiJGdjD8s+kbe22apvnABy16LZB+pglkxobPiYb4UJ2DYLHeZ0mSZbBT+Q6a\/aPUiFcymj0JZ1QcaQ6oojPwIMwQ0s\/RiH3MWmsZkLMJ5JUjy+387Yji9GmV6\/b2A5hoAdF0\/CHEQrq4eH7bebtYAJnsGkACqwK6chOj9vy8wjjtdt75eda5mT3oiz2y1o09\/ZcM8QyA46Glhoku0RvF5nNKFLAlFw0+ZKCLAjS4TBxLihgdNRczzthTOuoMltglkssZmbsnj+eLFY56M0c0C7GbuFWsD64Wm+Tg23xagBANUBs+a1uos4KI5Ds\/Vm\/28EFRxB3NtEjh9CWz7qzgwNiDefFyy6CaToFcyEDt1\/IlLiEjsF2rw==' // The payment session data.
  },
  environment: 'test', // Change to 'live' for the live environment.
  amount: {
    value: 1000,
    currency: 'GBP'
  },
  locale: 'en-US',
  countryCode: 'GB',
  clientKey: 'test_QMZ4KRP6ZBA2TATP4PMTPJDD2AUGNXMV',
paymentMethodsResponse: {
                    "paymentMethods": [
                {
                    "brands": [
                        "amex",
                        "mc",
                        "visa"
                    ],
                    "name": "Cards",
                    "type": "scheme"
                },
                {
                    "brands": [
                        "amex",
                        "mc",
                        "visa"
                    ], 
                    "configuration": {
                        "merchantId": "000000000304641",
                        "merchantName": "JCBWorldParts_Ecommerce_TEST"
                    },
                    "name": "Apple Pay",
                    "type": "applepay"
                },
                {
                    "name": "UPI",
                    "type": "billdesk_upi"
                },
                {
                    "configuration": {
                        "merchantId": "50",
                        "gatewayMerchantId": "JCBWorldParts_Ecommerce_TEST"
                    },
                    "name": "Google Pay",
                    "type": "googlepay"
                }
            ]
           }
            // Replace with your actual client key
                ,onPaymentCompleted: (result, component) => {
                    console.info('Payment completed:', result, component);
                },
                onPaymentFailed: (result, component) => {
                    console.info('Payment failed:', result, component);
                },
                onError: (error, component) => {
                    console.error('Global error:', error.name, error.message, error.stack, component);
                },
             
        };
        const paymentMethodsConfiguration = {
                card: {
                    showBrandIcon: true,
                    hasHolderName: true,
                    holderNameRequired: true,
                    amount: {
                    value: 1000,
                    currency: "GBP",
                    },
                    placeholders: {
                    cardNumber: "1234 5678 9012 3456",
                    expiryDate: "MM/YY",
                    securityCodeThreeDigits: "123",
                    securityCodeFourDigits: "1234",
                    holderName: "J. Smith",
                    },
                },
            };
(async () => {
  try {
      const checkout = await AdyenCheckout(globalConfiguration);
      const dropin = new Dropin(checkout, paymentMethodsConfiguration).mount('#dropin-container');
} catch (error) {
    console.error('Initialization error:', error);
  }
})();

























// const { AdyenCheckout, Dropin, Card, GooglePay, PayPal, ApplePay, Ideal } = window.AdyenWeb;

// // Global configuration
// const globalConfiguration = {
//   session: {
//     id: 'CSACA883FA01E27C6C', // Replace with your actual session ID
//     sessionData: 'Ab02b4c0!BQABAgBL2AbaXZ1xt00crLMEVStkt5jI1H9YTkvdz1sNQkb8Zx5CQjko60wFNT+50erGQzBzaaIe6UlIChXJbV3y+fQshX+eMa2wlFNPiG1GtfG0uvW\/0Jb\/iHfVzzOX5w2nn06w4PlIcwpiiygtLPnoHVYag217E8iULprU5lCw\/4fqP6PTuiOCVuNudr7M8InVQd5Ahk7Olu1eb4t+4fdjhk+aVjKIhPzuOOG1lchQIWtfztTI2blVxnWB5O3XjoaGBP4z\/\/ifUncg9PJRRzhfFyfTijOiM0NCeodYnETaWx1cYNnuqfbDV0lVhat4gEYRbLNXWZHCnlDisgldI8vngmewtN5f6MNibJ7ok3CtmYORQCmFdQH6JTG9ysa+gPiofP6fxhkA10+Nre9JvFaDflfDAIWsRv6mQxnRNwVdhumk2Tob4jEj3JR0wxow36GwzgfPk0Ct\/8u8O4XeNRQfcf676CuvyVa6prjYYm8XCXezXEb2nXRfwU+laBJhAr4uxlre262dUqyv7dW8VC2It\/xXIPVWCYkD+BUoA00l8xnUGJvWU0eK0IiQlLcxxQ4L8wghHK4F2Nuatpn7G\/VIwsrtQIa8skZDTuMioB0NAuBvif6B4eLS62Q2GRdKitCrX1X2NSouIfaCAJwtCnUA6eu2dwKLdNSxIoxOam8+R3KxgAzMC++zVUtFr7+BGWAASnsia2V5IjoiQUYwQUFBMTAzQ0E1MzdFQUVEODdDMjRERDUzOTA5QjgwQTc4QTkyM0UzODIzRDY4REFDQzk0QjlGRjgzMDVEQyJ9mpo+xgyGM2Ee42jhByZTe\/35JNEE+TyyoaPDsCAVd\/MlAz9fwrZkNlmt1XYxPYE+z0UmJozMPnwsgGro+32drZCWxC8Gc8OD2zGXuDsgsLVoCdGyke7QIfrf165Rawncoi8Dwh2Ce6k9fzpkdQgymfnx9V9lU8c7GljbwOvxaMqtdNZkjtUx+PQtJarDD9+JkOcfexNCdziYSDeNAsEBDL8dXYdXsJyaO9eQt9T9DlTO6Nw01affllc3dSUg5G3UStLhcS81KpkOnMu5JPwNXGtwvn3x\/E2UVGTjjWLbuVeE71axOFOXbHqEZwIRl\/OftUU2RBHSmaMhIyeDwqtnvLN+XjPxTHgolxzz2a8iE6qvgdWEXOBzZ8n\/bTOxHQqEcthk+VNylTd+qQXcSNOKQKR3rQ68b9l2znB+kULprAXWLjQ0ADwT7m4dUYCBx\/tRFmwFLv\/nTl2lUBul5Rch+1RzmssQk1J46M6VSQ\/6P5ck2bDJRz\/e184VZbcUTMC6hSjAJ5Cw0U78Yqb\/guHn2juzsMSHh1YerGjEnIou8K9DO7qtigURVx4l09oyUpFHUPmT5hltsNHuvylE8BogxjQVHlxOiEDcEu\/OwIJ04IFCotQ530GFqOW+2\/Xbdt9QrbfJX\/aG22xI4l69kgUVTlio9FGB3DuXTrg4W9gChjZvcdLRwac=' // with your actual session data
//   },
//   environment: 'test', // Change to 'live' for production
//   amount: {
//     value: 1000, // Value in minor units (e.g., 1000 = €10.00)
//     currency: 'GBP'
//   },
//   locale: 'en-US',
//   countryCode: 'GB',
//   clientKey: 'test_QMZ4KRP6ZBA2TATP4PMTPJDD2AUGNXMV', // Replace with your actual client key
//   onPaymentCompleted: (result, component) => {
//     console.info('Payment completed:', result, component);
//   },
//   onPaymentFailed: (result, component) => {
//     console.info('Payment failed:', result, component);
//   },
//   onError: (error, component) => {
//     console.error('Global error:', error.name, error.message, error.stack, component);
//   }
// };

// const dropinConfiguration = {
//    // Required if you import individual payment methods.
//    paymentMethodComponents: [GooglePay, ApplePay],
//    // Optional configuration.
//    onReady: () => {},
//    instantPaymentTypes: ['applepay', 'googlepay']
   
// };
// (async () => {
//   try {
//     const checkout = await AdyenCheckout(globalConfiguration);
// const dropin = new Dropin(checkout, dropinConfiguration).mount('#dropin-container');
//   } catch (error) {
//     console.error('Initialization error:', error);
//   }
// })();


