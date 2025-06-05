const { AdyenCheckout, Dropin, Card, GooglePay, PayPal, ApplePay, Ideal } = window.AdyenWeb;

// Global configuration
  
const globalConfiguration = {
  session: {
    id: 'CSD5A6528E62F2BE3D', // Unique identifier for the payment session.
    sessionData: 'Ab02b4c0!BQABAgANlqNfYI846qWCJTs7MUq5vkLejJ0BnimtFD353BwW7I05p1MfNFzwp7kUvj1lypLDXnpVL299C6ww\/Jqq9azpIg3RZAMrHfxbR2KamuY5f206HqxQsHo81mAlzKUd4q8fmTldLuuVgTX3+MPH9XThsab8eOcKisRBRi6gSkRFLW4YgRFiuOkf1\/UVMI0Jgtd60Ecxldc8nQBPBmHUdV4dmOQa9FRz44iaqU9PEaOJwVo\/3\/7y9Sn9yFotqjYQDpoy+mTqdnutchgf9z1FChtobc1S4nm+vZmeS6OqAuespAEbKrkWv72CYC3UTXfkQM5wLziExOrtoRZBNpb9yr8EcSKR+E6jYeG8GNnzmpexZ1bVSafwFQ3Wf4waO5lQbvkEkGvbACxGkpKufgnTOJsJUq63pibtuCFxH\/x0kwc1GonGAG7PTFrrvUyDzfGdVaHYo2EvrxaB9JB3RMUG+9swN4Bv6AtYiWy7SknV93JKO8WuRyaX\/H\/aK9\/AII2jnvvJHB1NydxEZZAyBMBdNB+9iOM4A1R\/w6Nb5DM1zF4hRrfmoCrYk47TRrnr+2viDbvJkid2c9S2tiSh78wb8K3DGvIaVP\/Db78m2+13XZKNrDiAvb+C+stwhu\/opF\/KN2TnQ27P+n+DBxCRP+5A8Az+yCNdvmuNZFr696qtoMiSTww0hw5N5voSqVTO8zMASnsia2V5IjoiQUYwQUFBMTAzQ0E1MzdFQUVEODdDMjRERDUzOTA5QjgwQTc4QTkyM0UzODIzRDY4REFDQzk0QjlGRjgzMDVEQyJ9GRRykxdo+R\/Yh9yLKwe+w\/Bblh9y9C3A120LJ3WmM+PegUuzvmubFHLtx3C\/GQvYiudvliLo0HWPB7fzKA+nW+uVLQytJ6EXFLZz68VZNCPppwWqws5sL2Q67iLzYGoWp43vnQdHkp+SDLue0xEu3\/foWoEgsvI1hWQanSQP7kgF6UsNQ6RnxVwLQNGkbeZjgMrwlLxR+chSjIqTBm8ywGVPPpPurIsZ\/aAYi4EriP6rOcKwNFIIuEddaLbqbuHXr\/jQgB3DBWKnGJYUbGTBw4OFXY4iVyTSFzkUrWhPM0hbbYQKYtM7TtG4lSprlaBA5EW4ZU6l\/bNdUdjP7C9YoVFlUhCN33zpsF4RW8EMseYHbZvqPVhkrccmuR69zGNlw6sBkE0DO73eWt8r\/b6ircy2mE4dVTM9f11ogokkCmk3fiZ6+YMWUKrycY8bcH6AGmhuONQq3a8B0krHxWpsSS7FUkNbM3rv6mLwZsTjhdtx9BaJJUZnTjZj+3OERmyPCCHhBNcZzmx3ZVt8JCp8gMirj6Dl31sBLboM+CNEZmiVkDquyZh0t1Edtk7yf1EHAA4QW3+IYpV7BRD\/iFZHPMiUwkaHClQONF66nsb1hy7o04gNMe4pD2zDkE3KeLD\/BtwNKTIINxRGK8hcnURCpxrjNWQtWyHdWf8MjCu363QZEkjyw9g=',
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


