import { addDoc, collection } from "firebase/firestore";
import { db } from "../service/firebase/firebaseConfig";

const products = [
  { name: "Gibson Les Paul", img: "https://media.guitarcenter.com/is/image/MMGS7/L54578000005000-00-600x600.jpg", price: 3200, category: "guitars", description: "Guitarra Gibson Les Paul Standard 60s Cherry", stock: 10 },
  { name: "Gibson SG", img: "https://media.guitarcenter.com/is/image/MMGS7/L54591000004000-00-600x600.jpg", price: 2500, category: "guitars", description: "Guitarra Gibson SG Classic", stock: 15 },
  { name: "Fender Stratocaster", img: "https://media.guitarcenter.com/is/image/MMGS7/L69991000001000-00-600x600.jpg", price: 2700, category: "guitars", description: "Guitarra Fender Stratocaster American Ultra", stock: 5 },
  { name: "Fender Telecaster", img: "https://media.guitarcenter.com/is/image/MMGS7/L78119000004000-00-600x600.jpg", price: 2600, category: "guitars", description: "Guitarra Fender Telecaster American Professional II", stock: 8 },
  { name: "Paul Reed Smith", img: "https://media.guitarcenter.com/is/image/MMGS7/L82178000001000-00-600x600.jpg", price: 4900, category: "guitars", description: "Guitarra Paul Reed Smith Custom 24", stock: 4 },
  { name: "Marshall JVM Series", img: "https://media.guitarcenter.com/is/image/MMGS7/480774000000000-00-600x600.jpg", price: 2800, category: "amps", description: "Amplificador Marshall JVM Series JVM410H", stock: 9 },
  { name: "Fender Twin Reverb", img: "https://media.guitarcenter.com/is/image/MMGS7/480505000000000-00-600x600.jpg", price: 2550, category: "amps", description: "Amplificador Fender Vintage Reissue '65 Twin Reverb", stock: 4 },
  { name: "Vox AC30", img: "https://media.guitarcenter.com/is/image/MMGS7/423618000001000-00-600x600.jpg", price: 1850, category: "amps", description: "Amplificador VOX Custom AC30C2 30W 2x12", stock: 2 },
  { name: "Mesa Boogie Mark Vii", img: "https://media.guitarcenter.com/is/image/MMGS7/L97360000001000-00-600x600.jpg", price: 3680, category: "amps", description: "Amplificador MESA-Boogie Mark VII 90W", stock: 1 },
  { name: "Laney Lionheart ", img: "https://media.guitarcenter.com/is/image/MMGS7/J00139000001000-00-600x600.jpg", price: 1450, category: "amps", description: "Amplificador Laney L20T-112 20W 1x12", stock: 16 },
  { name: "Boss OD3", img: "https://media.guitarcenter.com/is/image/MMGS7/151389000000000-00-600x600.jpg", price: 120, category: "pedals", description: "Pedal Boss OD-3 OverDrive", stock: 22 },
  { name: "Line6 Helix Lt", img: "https://media.guitarcenter.com/is/image/MMGS7/J23118000000000-00-600x600.jpg", price: 1350, category: "pedals", description: "Pedalera Line6 Helix Multi-Effects", stock: 18 },
  { name: "Digitech Whammy V", img: "https://media.guitarcenter.com/is/image/MMGS7/H82721000000000-00-600x600.jpg", price: 399, category: "pedals", description: "Pedal DigiTech Whammy V Pitch Shifting", stock: 11 },
  { name: "ProCo Rat", img: "https://media.guitarcenter.com/is/image/MMGS7/151501000000000-00-600x600.jpg", price: 199, category: "pedals", description: "Pedal ProCo Rat2 Distortion", stock: 24 },
  { name: "EHX Big Muff", img: "https://media.guitarcenter.com/is/image/MMGS7/153314000000000-00-600x600.jpg", price: 169, category: "pedals", description: "Pedal Electro Harmonix Big Muff Pi Distortion/Sustainer", stock: 14 }
];


  export const seedProducts = () =>{
    products.forEach( product => {
        addDoc(collection(db, "products"),  product)
    })
  }