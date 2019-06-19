// necessary to avoid "regeneratorRuntime is not defined" error
import "@babel/polyfill";

console.log('start');
import ledger from './ledger.js';

const complete = async () => {
    console.log('check if ledger is available');
    const ledgerIsAvailable = await ledger.isAvailable();
    if (!ledgerIsAvailable) {
        console.log('is NOT available')
        throw new Error('Ledger device is unavailable!');
    }
    console.log('getting address');
    ledger.getAddress("44'/199'/0'/0/0", true)
        .then(res => { console.log('res'); console.log(res); })
        .catch(err => { console.log('err'); console.log(err); });
    // console.log(x);
    return true;
}

complete();


// komodo test
// import TransportU2F from '@ledgerhq/hw-transport-u2f';
// import Btc from '@ledgerhq/hw-app-btc';
// const getDevice = async () => {

//     const transport = await TransportU2F.create();
//     const ledger = new Btc(transport);
  
//     ledger.close = () => transport.close();
  
//     return ledger;
//   };

// const isAvailable = async () => {
//     const ledger = await getDevice();
//     try {
//         await ledger.getWalletPublicKey(`m/44'/0'/0'/0/0`);
//         await ledger.close();
//         return true;
//     } catch (error) {
//         return false;
//     }
// };
// const getAddress = async (derivationPath, verify) => {
//     const ledger = await getDevice();
//     const {bitcoinAddress} = await ledger.getWalletPublicKey(derivationPath, verify);
//     await ledger.close();
  
//     return bitcoinAddress;
// };

// getAddress(`m/44'/0'/0'/0/0`, false)
//     .then((res) => { console.log('res!'); console.log(res); })
//     .catch((err) => { console.log('err!'); console.log(err); });


// # 1
// import TransportWebUSB from "@ledgerhq/hw-transport-webusb";

// console.log('start');
// TransportWebUSB.create()
//     .then(a => {
//         console.log('then');
//         console.log(a);
//     })
//     .catch(err => { 
//         console.log('err');
//         console.log(err);
//     });



// import Transport from "@ledgerhq/hw-transport-node-hid";
// // import Transport from "@ledgerhq/hw-transport-webusb";
// // import Transport from "@ledgerhq/react-native-hw-transport-ble";
// import AppBtc from "@ledgerhq/hw-app-btc";
// const getBtcAddress = async () => {
//   const transport = await Transport.create();
//   const btc = new AppBtc(transport);
//   const result = await btc.getWalletPublicKey("44'/0'/0'/0/0");
//   return result.bitcoinAddress;
// };
// getBtcAddress()
//     .then(a => {
//         console.log('then');
//         console.log(a);
//     })
//     .catch(err => { 
//         console.log('err');
//         console.log(err);
//     });
